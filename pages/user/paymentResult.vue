<template>
  <div class="payment">
    <div v-if="isPaid" class="payment__result">
      <Success :title="planTitle" :refId="paymentRefId"  />
    </div>
    <div v-else>
      <Filaure />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Success from '~/components/payment/Success'
import Filaure from '~/components/payment/Failure'

export default {
  layout: 'userLayout',
  components: {
    Success,
    Filaure,
  },
  data() {
    return {
      isPaid: true,
      paymentRefId: null,
      planTitle: '',
    };
  },
  updated(){
  },

  computed: {

  },
  methods: {
    highlight(content) {
    },
  },
  created() {

  },
  mounted() {
    let queryParams = this.$route.query;
    if (queryParams.status === "true") {
      this.isPaid = true;
      this.paymentRefId = queryParams.RefID;
      this.planTitle = queryParams.title;
    } else {
      this.isPaid = false;

    }
  },
};
</script>

<style lang="scss" scoped>

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
