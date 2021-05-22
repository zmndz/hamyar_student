<template>
<div class="main__wrapper">
  <div class="main">
    <div class="search__wrapper">
      <b-form @submit="search" class="">
        <div class="search__bar">
          <div class="search__input-wrapper">
            <input v-model="queryString" type="text" class="search__input" placeholder="سوالتو اینجا بنویس...">
          </div>
          <div class="search__input--validation">
            
          </div>
          <div class="search__button-warapper">
            <button class="search__button button button--blue" :class="{'button--disabled' : (!queryString.length || queryString ===' ')}" @click="search">
              جستجو
            </button>
          </div>
        </div>
        <div class="search__bar">
          <b-form-group id="input-group-register-grade" class="w-100" label-for="input-register-grade">
            <b-form-select
              id="input-register-grade"
              class="form__select search__book"
              v-model="selectedBooks"
              :options="books"
            >
            </b-form-select>
          </b-form-group>
        </div>
      </b-form>

      <!-- <div class="search__count">
        تعداد نتایج: 4 
      </div> -->
    </div>

    <div class="result__title">
      دسته بندی های نتایج جستجو:
    </div>
    <div class="result card">
      <b-tabs content-class="" card fill>
        <b-tab title="سوالات تستی و تشریحی" active>
          <div v-if="searchResult && searchResult.test && searchResult.test.length">
            <TestSingleResult ref="TestSingleResult" :results="searchResult.test" :queries="activeQueryString" />
          </div>
        </b-tab>
        <b-tab title="متن کتاب">
          <div v-if="searchResult && searchResult.book && searchResult.book.length">
            <BooksSingleResult :results="searchResult.book" :queries="activeQueryString"/>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import BooksSingleResult from '~/components/BooksSingleResult'
import TestSingleResult from '~/components/TestSingleResult'

export default {
  layout: 'userLayout',
  components: {
    BooksSingleResult,
    TestSingleResult,
  },
  data() {
    return {
      queryString: '',
      activeQueryString: '',
      selectedBooks: null,
      books: [],
      currentBook: null,
      searchResult: [],
    }
  },
  computed: {
    ...mapGetters([
      'getBooksList',
      'getSearchResult',
    ]),
  },
  methods: {
    ...mapActions([
      'setSearchQuery',
    ]),
    goToClasses() {
      this.$router.push('/manager/classRegistration');
    },
    goToTeachers() {
      this.$router.push('/manager/teacherRegistration');
    },
    goToStudents() {
      this.$router.push('/manager/studentRegistration');
    },
    async search(e) {
      e.preventDefault()
      if (!this.queryString) {
        return;
      }

      let params = {
        searchText: this.queryString,
        grade_id: null,
      }
      let result = await this.setSearchQuery(params)
      if (result) {
        this.searchResult = await this.getSearchResult;
        this.activeQueryString = this.queryString;
      }
    },
  },
  async mounted() {
    this.books = await this.getBooksList;
  },
}
</script>

<style lang="scss" scoped>
@import './assets/scss/partials/variables.scss';

.main {

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  width: 100%;
  max-width: 768px;
}

.search {

  &__wrapper {
    margin-bottom: 32px;
  }

  &__bar {
    display: flex;
    width: 100%;
    margin-bottom: 16px;
  }

  &__input {

    &-wrapper {
      width: 100%;
    }

    border: none;
    box-shadow: 0 3px 6px 0 rgba(32, 33, 36, 0.06);
    height: 48px;
    font-size: 18px;
  }

  &__button {

    &-wrapper {
    }

    height: 48px;
    width: 100px;
    box-shadow: 0 3px 6px 0 rgba(32, 33, 36, 0.06) !important;
    font-size: 18px;
    margin-right: 16px;
    // background-color: $primary-color;
  }

  &__count {
    color: rgb(185, 185, 185);
    font-size: 16px;
    text-align: left;
  }

  &__book {
    border: none;
    box-shadow: 0 3px 6px 0 rgba(32, 33, 36, 0.06);
    height: 48px;
    font-size: 18px;
  }
}

.result {
  font-size: 18px;
  
  &__title {
    color: rgb(185, 185, 185);
    font-size: 16px;
    text-align: right;
    margin-bottom: 8px;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 767.98px) {

}

// large devices (laptops, 768px and up)
@media (min-width: 991.98px) {

}

// extra large devices (desktops, 768px and up)
@media (min-width: 1199.98px) {

}
</style>
