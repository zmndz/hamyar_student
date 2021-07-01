<template>
<div class="">
  <div class="price container-fluid" id="price">

    <div class="price__wrapper container">
      <div class="price__title">
        تعرفه ها
      </div>
      <b-alert variant="warning" fade show dismissible>
        <div class="price__alert">
          لطفا قبل از ورود به صفحه پرداخت، از خاموش بودن فیلترشکن خود اطمینان حاصل کنید.
        </div>
      </b-alert>

      <div class="price__list">
        <div class="price__item" v-for="(plan, index) in plans" :key="index">
          <div class="price__header">
            <div class="price__header--icon">
              <img src="~/assets/images/logo-small.svg" alt="">
            </div>
            <div class="price__header--label">
              {{plan.text}}
            </div>
          </div>
          <div class="price__card">
            <div class="price__description">
              <div class="price__details" v-for="(description, index2) in plan.value.descriptions" :key="index2">
                <div class="price__details--icon">
                  <img src="~/assets/images/checkmark.svg" alt="">
                </div>
                <div class="price__details--label">
                  {{description}}
                </div>
              </div>
            </div>
            <div class="price__amount">
              <div>
                <div v-if="plan.value.price == 0" class="price__amount--number">
                  رایگان
                </div>
                <div v-else class="price__amount--number">
                  {{formatPrice(plan.value.price)}}
                  <span class="price__amount--currency">
                    تومان
                  </span>
                </div>
              </div>
            </div>
            <div class="price__choose">
              <button class="price__choose--button" @click="choosePlan(plan.value.planId)">
                انتخاب
              </button>
            </div>
          </div>
        </div>
      </div>
    <div class="price__back">
      <div class="button button--outline--blue" @click="goToBack">
        بازگشت به صفحه جستجو
      </div>
    </div>
    </div>
  </div>

</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import BooksSingleResult from '~/components/BooksSingleResult'

export default {
  layout: 'userLayout',
  components: {
    BooksSingleResult,
  },
  data() {
    return {
      plans: [],
    }
  },
  computed: {
    ...mapGetters([
      'getPlans',
    ]),
  },
  methods: {
    ...mapActions([
      'getInformations',
      'setPlan',
    ]),
    goToBack() {
      this.$router.push('/user');
    },
    formatPrice(value) {      
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    choosePlan(planId) {
      let params = {
        plan_id: planId,
      }
      this.setPlan(params);
    },
  },
  async mounted() {
    await this.getInformations();
    this.plans = this.getPlans;
  }
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

.price {

  &__wrapper {

  }

  &__alert {
    text-align: justify;
  }

  &__back {
    text-align: left;
    width: 100%;
    margin: 32px 0;
  }
  
  &__list {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
  }

  &__title {
    font-size: 32px;
    margin-bottom: 32px;
    font-weight: bold;
  }

  &__item {
    // width: 100%;
    border: 2px solid #eaeaea;
    border-radius: 12px;
    box-shadow: 0 2px 24px -18px #1893fe;
    background-color: #fff;
    margin: 32px 0px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    padding: 24px;

    &--icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      box-shadow: 0 2px 28px -18px #1893fe;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 32px;
      }
    }

    &--label {
      font-size: 24px;
      font-weight: bold;
      margin-right: 24px;
    }

  }

  &__card {

  }

  &__description {
    padding: 0 24px;
    padding-bottom: 32px;
    border-bottom: 2px solid #eaeaea;

  }

  &__details {
    display: flex;
    align-items: center;
    line-height: 40px;
    // justify-content: space-between;

    &--icon {
      width: 24px;
    }

    &--label {
      color: #707070;
      margin-right: 24px;
      width: 102px;
    }
  }

  &__amount {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 24px 0 24px;

    &--number {
      font-size: 32px;
      display: flex;
      align-items: center;
    }

    &--currency {
      font-size: 16px;
      margin-right: 4px;
    }
  }

  &__choose {
    padding: 24px;
    display: flex;
    justify-content: center;

    &--button {
      color: #fff;
      background-color: $blue-color;
      font-weight: bold;
      text-align: center;
      font-size: 24px;
      border-radius: 4px;
      line-height: 54px;
      border: none;
      width: 200px;
      transition: all 0.2s ease-in-out;

      &:hover {
        opacity: 0.9;
      }

      &:active {
        opacity: 1;
        background-color: lighten($blue-color, 13%);
      }

      &:focus {
        outline: none;
      }

    }
  }
}


// Medium devices (tablets, 768px and up)
@media (min-width: 767.98px) {
  .price {
    margin-bottom: 5rem;

    &__list {
      flex-direction: row;
    }

    &__item {
      width: 25%;
      margin: 0 24px;

      &:first-child {
        margin-right: 0;
      }
      &:last-child {
        margin-left: 0;
      }

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
