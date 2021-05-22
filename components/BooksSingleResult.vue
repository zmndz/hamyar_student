<template>
  <div class="single-result__wrapper">
    <div class="single-result box" v-for="(book) in results" :key="book.id">
      <div class="single-result__content" v-html="highlight(book.text)">
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
    highlight(content) {
      // if(!this.query) {
      //     return content;
      // }
      function escapeRegExp(str) {
        if (!str) {
            return "";
        }
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }

      this.query = (this.queries);
      console.log('this.queryzzz: ', this.query);
      return content.replace(new RegExp(this.query, "gi"), match => {
          return '<span class="highlightText">' + match + '</span>';
      });
    },
  },
  mounted() {
    this.query = this.queries;
    console.log('this.queries: ', this.queries);
  },
};
</script>

<style lang="scss" scoped>

.single-result {
  &__wrapper {
    margin: 8px 0;
  }
  // max-width: 768px;
  // max-width: 768px;

  &__content {
    line-height: 36px;
    color: rgb(131, 131, 131);
    text-align: justify;
    font-size: 18px;
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
