<template>
  <div class="single-result__wrapper">
    <div class="single-result box" v-for="(test) in results" :key="test.id">
      <div class="single-result__content--wrapper">
        <div v-if="test.typeQuestion === 'testi'" class="single-result__content--title">
          سوال تستی:
        </div>
        <div v-else class="single-result__content--title">
          سوال تشریحی:
        </div>

        <div class="single-result__content result_list" v-html="test.question">
        </div>
        
      </div>
      <div v-if="test.typeQuestion === 'testi'" class="single-result__content--wrapper">
        <div class="single-result__content--title">
          گزینه ها:
        </div>
        <div 
          class="single-result__content" 
          v-for="(option, index) in test.options" 
          :class="{'single-result__content--correct': test.optinAnswerNumber === index + 1}" 
          :key="option.id" 
          v-html="option"
        >
        
        </div>
      </div>
      
      <div v-if="test.answer != '\n'" class="single-result__content--wrapper">
        <div v-if="test.typeQuestion === 'testi'" class="single-result__content--title">
          توضیحات:
        </div>
        <div v-else class="single-result__content--title">
          پاسخ:
        </div>
        <div 
          class="single-result__content" 
          :class="{'single-result__content--correct': test.typeQuestion !== 'testi'}" 
          v-html="test.answer"
        >
        </div>
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
      content: [],
    };
  },
  methods: {

  },
  mounted() {
    this.query = this.queries;
    this.content = this.results;
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
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

    &--title {
      margin-bottom: 16px;
      font-weight: bold;
    }

    &--correct {
      color: #1d9138;
      padding: 4px 24px 4px 16px;
      border-radius: 6px;
      margin: 16px 0;
      position: relative;
      font-weight: bold;

      &::after {
        content: '';
        position: absolute;
        top: 14px;
        right: 0px;
        width: 16px;
        height: 16px;
        background: url('~assets/images/checkmark.svg') no-repeat;
        background-size: 16px;
      }
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
