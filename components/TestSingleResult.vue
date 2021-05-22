<template>
  <div class="single-result__wrapper">
    <div class="single-result box" v-for="(test, index) in results" :key="test.id">
      <div class="single-result__content--wrapper">
        <div class="single-result__content--title">
          سوال
        </div>
        <div ref="zzz" class="single-result__content result_list" v-html="highlight(test.question, index)">
        </div>
        
      </div>
      <div v-if="test.typeQuestion === 'testi'" class="single-result__content--wrapper">
        <div class="single-result__content--title">
          گزینه ها:
        </div>
        <div class="single-result__content" v-html="highlight(test.optiona)">
        </div>
        <div class="single-result__content" v-html="highlight(test.optionb)">
        </div>
        <div class="single-result__content" v-html="highlight(test.optionc)">
        </div>
        <div class="single-result__content" v-html="highlight(test.optiond)">
        </div>
      </div>
      
      <div v-if="test.answer != '\n'" class="single-result__content--wrapper">
        <div class="single-result__content--title">
          توضیحات:
        </div>
        <div class="single-result__content" v-html="highlight(test.answer)">
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
  computed: {

  },
  methods: {
    highlight(content) {
      function escapeRegExp(str) {
        if (!str) {
            return "";
        }
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }

      this.query = (this.queries);
      return content.replace(new RegExp(this.query, "gi"), match => {
          return '<span class="highlightText">' + match + '</span>';
      });
    },
  },
  created() {

  },
  mounted() {
    this.query = this.queries;
  },
};
</script>

<style lang="scss" scoped>
.single-result {
  &__wrapper {
    margin: 8px 0;
  }

  &__content {
    line-height: 36px;
    color: rgb(131, 131, 131);
    text-align: justify;
    font-size: 18px;

    &--wrapper {
      margin-bottom: 16px;
    }
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
