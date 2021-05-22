<template>
<div class="main__wrapper">
  <div class="main">
    <div class="purchase box">
      <div class="purchase__title">
        تمدید اشتراک
      </div>
      <div class="purchase__plans">
        <div class="purchase__plan">
          
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

    }
  },
  computed: {
    ...mapGetters([

    ]),
  },
  methods: {
    ...mapActions([
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
  },
  async mounted() {

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

.search {

  &__wrapper {

  }

  &__bar {
    display: flex;
    width: 100%;
    margin-bottom: 48px;
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
