<template>
  <div class="single-result__wrapper">
    <div class="single-result box" v-for="(book) in results" :key="book.id">
      <div class="single-result__content" v-html="book.text">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["results", "queries"],
  data() {
    return {
      query: '',
      content: '',
    };
  },
  computed: {

  },
  methods: {
  },
  mounted() {
    this.query = this.queries;
  },
};
</script>

<style lang="scss" scoped>
@import './assets/scss/partials/variables.scss';

.single-result {
  padding: 0px;
  margin-bottom: 32px;
  padding-bottom: 16px;
  box-shadow: none;
  border-bottom: 2px dashed #1893fe;
  border-radius: 0;

  &__wrapper {
    margin: 8px 0;
  }

  &__content {
    line-height: 36px;
    color: #6b6b6b;
    text-align: justify;
    font-size: 18px;

    &--wrapper {
      margin-bottom: 32px;
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 767.98px) {
  .single-result {
    padding: 16px;
    padding-bottom: 16px;
  }
}

// large devices (laptops, 768px and up)
@media (min-width: 991.98px) {

}

// extra large devices (desktops, 768px and up)
@media (min-width: 1199.98px) {

}
</style>
