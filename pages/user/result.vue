<template>
<div class="main__wrapper">
  <div class="main">
    <div class="search__wrapper">
      <b-form @submit="validateSearch" class="">
        <div class="search__bar">
          <div class="search__input-wrapper">
            <input v-model="queryString" type="text" class="search__input" placeholder="سوالتو اینجا بنویس...">
          </div>
          <!-- <div class="search__books">
            <b-form-group id="input-group-register-grade" class="w-100 my-0" label-for="input-register-grade">
              <b-form-select
                id="input-register-grade"
                class="form__select search__book"
                v-model="selectedBook"
                :options="books"
              >
              </b-form-select>
            </b-form-group>

          </div> -->

        </div>
        <div class="search__bar">
          <div class="search__button-wrapper">
            <button class="search__button button button--blue button--block" :class="{'button--disabled' : (!queryString.length || queryString ===' ')}" @click="validateSearch">
              جستجو
            </button>
          </div>
        </div>
      </b-form>
    </div>


    <div v-if="!isLoadingActive" class="result__wrapper" :class="{'result--hide' : !isSearched}">
      <div class="result__title">
        دسته بندی های نتایج جستجو:
      </div>
      <div class="result card">

        <b-tabs nav-class="p-0" active-nav-item-class="h-100" card justified>
          <b-tab title="متن کتاب" :active="searchResult.test_score <= searchResult.book_score">
            <div v-if="searchResult.book && searchResult.book.length">
              <BooksSingleResult :results="searchResult.book" :queries="activeQueryString"/>
            </div>
            <div v-else class="result__empty">
              اطلاعاتی وجود ندارد
            </div>
          </b-tab>
          <b-tab title="سوالات تستی و تشریحی" :active="searchResult.test_score > searchResult.book_score">
            <div v-if="searchResult.test && searchResult.test.length">
              <TestSingleResult :results="searchResult.test" :queries="activeQueryString" />
            </div>
            <div v-else class="result__empty">
              اطلاعاتی وجود ندارد
            </div>
          </b-tab>
        </b-tabs>

        <!-- <b-tabs v-if="searchResult.book_score >= searchResult.test_score" nav-class="p-0" card fill>
          <b-tab title="متن کتاب" active>
            <div v-if="searchResult.book && searchResult.book.length">
              <BooksSingleResult :results="searchResult.book" :queries="activeQueryString"/>
            </div>
            <div v-else class="result__empty">
              اطلاعاتی وجود ندارد
            </div>
          </b-tab>
          <b-tab title="سوالات تستی و تشریحی">
            <div v-if="searchResult.test && searchResult.test.length">
              <TestSingleResult :results="searchResult.test" :queries="activeQueryString" />
            </div>
            <div v-else class="result__empty">
              اطلاعاتی وجود ندارد
            </div>
          </b-tab>
        </b-tabs> -->

      </div>
    </div>
    <Loading v-else :isOverlay="false" />

  </div>

  <b-modal id="modal-expired" ref="modal-expired" hide-footer>
    <template #modal-title>
      <div class="expired__title">
        توجه!
      </div>
    </template>
    <div class="expired">
      <div class="expired__message">
        برای استفاده از موتور جستجوی وی‌فایند <br />
         یکی از پلن ها را انتخاب کنید
      </div>
      <button class="button button--blue button--block mt-5" @click="goToPurchase">
        رفتن به صفحه انتخاب پلن
      </button>
    </div>
  </b-modal>

</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import BooksSingleResult from '~/components/BooksSingleResult'
import TestSingleResult from '~/components/TestSingleResult'
import Loading from '~/components/common/Loading'

export default {
  layout: 'userLayout',
  components: {
    BooksSingleResult,
    TestSingleResult,
    Loading,
  },
  data() {
    return {
      isLoadingActive: false,
      isSearched: false,
      queryString: '',
      activeQueryString: '',
      selectedBook: null,
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
      // 'fetchBooksList',
    ]),
    // async initiateBooks() {
    //   let result = await this.fetchBooksList();
    //   if (result) {
    //     this.books = await this.getBooksList;
    //     this.selectedBook = this.books[0].value;
    //   }
    // },
    validateSearch(e) {
      e.preventDefault()
      if (!this.queryString) {
        return;
      }

      this.$router.push({path: '/user/result', query: {q: this.queryString} });
      this.search();
    },
    async search() {
      this.isLoadingActive = true;
      let params = {
        searchText: this.queryString,
        /*disable (this.selectedBook), beacause it doesn't matter! */
        // book_id: this.selectedBook.bookId,
        book_id: -1,
      }

      let result = await this.setSearchQuery(params)
      if (result.status) {
        this.searchResult = await this.getSearchResult;
        this.activeQueryString = this.queryString;
        this.isSearched = true;
        this.isLoadingActive = false;
      } else if (!result.status && (result.code === 710)) {
        this.$refs['modal-expired'].show();
      }
    },
    goToPurchase() {
      this.$router.push('/user/purchase');
    },
    goToIndex() {
      this.$router.push('/user');
    },
    initiateQueryParams() {
      let queryParams = this.$route.query['q'];
      if (queryParams) {
        this.queryString = queryParams;
        this.search()
      } else {
        this.$router.push('/user');
      }
    },
  },
  async mounted() {
    // this.initiateBooks();
    this.initiateQueryParams();
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
    flex-direction: column;
  }

  &__input {
    width: 100%;

    &-wrapper {
      width: 100%;
      margin-bottom: 16px;
    }

    border: none;
    // box-shadow: 0 3px 6px 0 rgba(32, 33, 36, 0.06);
    height: 56px;
    padding: 8px 24px;
    font-size: 18px;
    border-radius: 100px;
    border: 1px solid #dfe1e5;

    &:focus {
      outline: none;
      box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
      border-color: rgba(223,225,229,0);
    }
  }

  &__books {
    width: 100%;
  }

  &__button {
    height: 48px;
    // box-shadow: 0 3px 6px 0 rgba(32, 33, 36, 0.06) !important;
    box-shadow: none !important;
    font-size: 18px;
    border-radius: 100px;

    &-wrapper {
      width: 100%;
    }

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
  margin-bottom: 64px;


  &--hide {
    display: none;
  }

  &__title {
    color: rgb(185, 185, 185);
    font-size: 16px;
    text-align: right;
    margin-bottom: 8px;
  }

  &__empty {
    color: #ccc;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96px;
  }
}

.expired {

  &__message {
    font-size: 24px;
    padding: 16px;
    text-align: center;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 767.98px) {
  .search {

    &__bar {
      flex-direction: row;
    }

    &__books {
      width: 360px;
      margin-right: 16px;
    }
  }
}

// large devices (laptops, 768px and up)
@media (min-width: 991.98px) {

}

// extra large devices (desktops, 768px and up)
@media (min-width: 1199.98px) {

}
</style>
