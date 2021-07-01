<template>
<div class="main__wrapper">
  <div class="main">
    <div class="search__wrapper">
      <b-form @submit="search" class="">
        <div class="search__bar">
          <div class="search__logo">
            <img class="" src="~/assets/images/logo.svg" alt="">
          </div>
        </div>
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
            <button class="search__button button button--blue button--block" :class="{'button--disabled' : (!queryString.length || queryString ===' ')}" @click="search">
              جستجو
            </button>
          </div>
        </div>
      </b-form>
    </div>
  </div>

  <!-- <b-modal id="modal-expired" ref="modal-expired" hide-footer>
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
        انتقال به صفحه انتخاب پلن
      </button>
    </div>
  </b-modal> -->

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'userLayout',
  components: {
  },
  data() {
    return {
      queryString: '',
      activeQueryString: '',
      // selectedBook: null,
      books: [],
      // searchResult: [],
    }
  },
  computed: {
    ...mapGetters([
      // 'getBooksList',
    ]),
  },
  methods: {
    ...mapActions([
      // 'fetchBooksList',
    ]),
    // async initiateBooks() {
    //   let result = await this.fetchBooksList();
    //   if (result) {
    //     this.books = await this.getBooksList;
    //     this.selectedBook = this.books[0].value;
    //   }
    // },
    async search(e) {
      e.preventDefault()
      if (!this.queryString) {
        return;
      }

      this.$router.push('/user/result?q=' + this.queryString);
    },
    goToPurchase() {
      this.$router.push('/user/purchase');
    },
  },
  mounted() {
    // this.initiateBooks();
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
    margin-top: 64px;
    margin-bottom: 32px;
  }

  &__bar {
    display: flex;
    width: 100%;
    margin-bottom: 16px;
    flex-direction: column;
  }

  &__logo {
    width: 100%;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 16px;

    img {
      width: 160px;
    }
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

    &:hover {
      // outline: none;
      // box-shadow: 0 0px 3px rgba(32, 33, 36, 0.28);
      border-color: #ccc;
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
      border-color: rgba(223,225,229,0);
    }
  }

  // &__books {
  //   width: 100%;
  // }

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
    &__wrapper {
      // margin-top: 256px;
    }

    &__button {
      width: 256px;

      &-wrapper {
        display: flex;
        justify-content: center;

      }
    }

  &__logo {

    img {
      width: 256px;
    }
  }

    &__bar {
      flex-direction: row;
    }

    // &__books {
    //   width: 360px;
    //   margin-right: 16px;
    // }
  }
}

// large devices (laptops, 768px and up)
@media (min-width: 991.98px) {

}

// extra large devices (desktops, 768px and up)
@media (min-width: 1199.98px) {

}
</style>
