<template>
  <div class="payment">
    <div class="payment__success">
      <div class="payment__image">
        <img src="~/assets/images/success.png" alt="">
      </div>
      <div v-if="title" class="payment__message">
        <!-- پرداخت شما با موفقیت انجام شد! -->
        پلن {{title}} با موفقیت ثبت شد!
      </div>
      <div v-if="refId" class="payment__message">
        کدرهگیری: {{refId}}
      </div>
      <!-- <div class="payment__message">
        {{title}}
      </div> -->
      <div class="button button--blue payment__button" @click="goToBack">
        بازگشت به صفحه جستجو
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["title", "refId"],
  data() {
    return {

    };
  },
  computed: {

  },
  methods: {
    goToBack() {
      this.$router.push('/user');
    },
  },
  created() {

  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>

.payment {

  &__success {
    // box-shadow: 0 3px 6px 0 rgba(32, 33, 36, 0.06);
    // background-color: #fff;
    border-radius: 4px;
    padding: 64px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
  }

  &__image {
    margin-bottom: 32px;
  }

  &__message {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 16px;
    text-align: center;
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
