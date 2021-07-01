import { execute, setCacheData,getCacheData , clearCacheData } from "~/utils/publicScripts"

export const state = () => ({
  mobile: null,
  plans: [],
  activePlan: null,
  majors: [],
  grades: [],
  activeMajor: null,
  activeGrade: null,
  booksList: [],
  searchResult: [],
  mobile: null,
  registerToken: null,
  registerVerificationToken: null,
  loginToken: null,
  loginVerificationToken: null,

})

export const getters = {
  getMobile(state) {
    let cachedMobile = getCacheData('mobile');
    if (state.mobile === null) {
      return cachedMobile;
    } else {
      return state.mobile;
    }
  },
  getPlans(state) {
    return state.plans;
  },
  getMajors(state) {
    return state.majors;
  },
  getGrades(state) {
    return state.grades;
  },
  getActiveMajor(state) {
    return state.activeMajor;
  },
  getActiveGrade(state) {
    return state.activeGrade;
  },
  getBooksList(state) {
    return state.booksList;
  },
  getSearchResult(state) {
    return state.searchResult;
  },
}

export const mutations = {
  SET_MOBILE_DATA(state, data) {
    state.mobile = data.mobile;
    setCacheData('mobile', data.mobile)
  },
  SET_PLANS_DATA(state, data) {
    let alteredData = [];
    data.map((item, index) => {
      let temp = {
        text: item.title,
        value: {
          planId: item.plan_id,
          price: item.price,
          title: item.title,
          days: item.days,
          discount: item.discount,
          descriptions: item.descriptions,
        }
      }
      alteredData.push(temp)
    })
    state.plans = alteredData;
    // setCacheData("plans", JSON.stringify(alteredData));
  },
  SET_MAJORS_DATA(state, data) {
    let alteredData = [
      { 
        text: 'رشته تحصیلی را انتخاب کنید',
        value: null
      },
    ];
    data.map((item, index) => {
      let temp = {
        text: item.label,
        value: {
          majorId: item.major_id,
        }
      }
      alteredData.push(temp)
    })
    state.majors = alteredData;
    // setCacheData("majors", JSON.stringify(alteredData));
  },
  SET_GRADES_DATA(state, data) {
    let alteredData = [
      { 
        text: 'پایه تحصیلی را انتخاب کنید',
        value: null
      },
    ];
    data.map((item, index) => {
      let temp = {
        text: item.label,
        value: {
          gradeId: item.grade_id,
          labelNumber: item.labelNumber,
        }
      }
      alteredData.push(temp)
    })
    state.grades = alteredData;
    // setCacheData("grades", JSON.stringify(alteredData));
  },
  SET_RGISTER_DATA(state, data) {
    state.registerToken = data.token;
    setCacheData('registerToken', data)
  },
  SET_REGISTER_VERIFICATION_DATA(state, data) {
    state.registerVerificationToken = data.token;
    setCacheData('registerVerificationToken', data)
  },
  SET_LOGIN_DATA(state, data) {
    state.loginToken = data.token;
    setCacheData('loginToken', data)
  },
  SET_LOGIN_VERIFICATION_DATA(state, data) {
    state.loginVerificationToken = data.token;
    setCacheData('loginVerificationToken', data.token)
  },
  SET_SEARCH_RESULT(state, data) {
    state.searchResult = data;
  },
  SET_ACTIVE_PLAN(state, data) {
    state.activePlan = data;
    setCacheData('activePlan', data)
  },
  SET_BOOKS_LIST(state, data) {
    state.booksList = data;
    let alteredData = [
      { 
        text: 'جستجو در همه کتاب ها',
        value: {
          bookId: -1,
        }
      },
    ];
    data.map((item, index) => {
      let temp = {
        text: item.name,
        value: {
          gradeId: item.grade_id,
          bookId: item.book_id,
          majorId: item.major_id,
        }
      }
      alteredData.push(temp)
    })
    state.booksList = alteredData;

  },
  LOGOUT_USER(state, data) {
    clearCacheData();
  },
}

export const actions = {
  async registerUser({ dispatch, commit, state }, data) {
    const url = '/user/auth/register';
    let params = data;
    let fetchResult = await execute('POST', url, params);
    if (fetchResult && (fetchResult.meta.success === true)) {
      commit("SET_RGISTER_DATA", fetchResult.data.verificationToken);
      return true;
    } else if (fetchResult && (fetchResult.meta.code === 420)) {
      this.$toast.show(
        `شماره موبایل ${data.mobile} قبلا در سیستم ثبت شده است. از بخش ورود برای لاگین استفاده کنید.`
      )
      return false;
    } else {
      this.$toast.error(
        "مشکلی پیش اومده!"
      )
      return false;
    }
  },
  async verifyUser({ dispatch, commit, state }, data) {
    const url = '/user/auth/verifyRegister';
    let params = data;
    let fetchResult = await execute('POST', url, params);
    if (fetchResult && (fetchResult.meta.success === true)) {
      commit("SET_REGISTER_VERIFICATION_DATA", fetchResult.data.token);
      commit("SET_MOBILE_DATA", {mobile: data.mobile});
      return {status: true, isPaid: fetchResult.data.isPayed};
    } else {
      this.$toast.error(
        "مشکلی پیش اومده!"
      )
      return false;
    }
  },
  async getInformations({ dispatch, commit, state }, data) {
    const url = '/getInformations';
    let fetchResult = await execute('POST', url);
    if (fetchResult && (fetchResult.meta.success === true)) {
      commit("SET_MAJORS_DATA", fetchResult.data.majors);
      commit("SET_PLANS_DATA", fetchResult.data.plans);
      commit("SET_GRADES_DATA", fetchResult.data.grades);
      return true;
    } else {
      this.$toast.error(
        "مشکلی پیش اومده!"
      )
      return false;
    }
  },
  async loginUser({ dispatch, commit, state }, data) {
    const url = '/user/auth/login';
    let params = data;
    let fetchResult = await execute('POST', url, params);
    if (fetchResult && (fetchResult.meta.success === true)) {
      commit("SET_LOGIN_DATA", fetchResult.data.verificationToken);
      return true;
    } else if (fetchResult && (fetchResult.meta.code === 404)) {
      this.$toast.error(
        "این شماره موبایل در سیستم ثبت نشده"
      )
      return false;
    } else {
      this.$toast.error(
        "مشکلی پیش اومده!"
      )
      return false;
    }
  },
  async verifyUserLogin({ dispatch, commit, state }, data) {
    const url = '/user/auth/verifylogin';
    let params = data;
    let fetchResult = await execute('POST', url, params);
    if (fetchResult && (fetchResult.meta.success === true)) {
      commit("SET_LOGIN_VERIFICATION_DATA", {token: fetchResult.data.token});
      commit("SET_MOBILE_DATA", {mobile: data.mobile});
      return {status: true, isPaid: fetchResult.data.isPayed};
    } else if (fetchResult && (fetchResult.meta.code === 415)) {
      this.$toast.error(
        "لطفا کد پیامک شده را اصلاح کنید"
      )
      return false;
    } else {
      this.$toast.error(
        "مشکلی پیش اومده!"
      )
      return false;
    }
  },
  async setSearchQuery({ dispatch, commit, state }, data) {
    const url = '/user/setQuestion';
    let params = data;
    let fetchResult = await execute('POST', url, params);
    if (fetchResult && (fetchResult.meta.success === true)) {
      commit("SET_SEARCH_RESULT", fetchResult.data);
      return {status: true};
    } else if (fetchResult && (fetchResult.meta.code === 710)) {
      // this.$toast.error(
      //   "مشکلی پیش اومده!"
      // )
      return {status: false, code: 710};
    } else {
      this.$toast.error(
        "مشکلی پیش اومده!"
      )
      return false;
    }
  },
  async fetchBooksList({ dispatch, commit, state }, data) {
    const url = '/user/getBook';
    // let params = data;
    let fetchResult = await execute('POST', url);
    if (fetchResult && (fetchResult.meta.success === true)) {
      commit("SET_BOOKS_LIST", fetchResult.data.books);
      return true;
    } else {
      this.$toast.error(
        "مشکلی پیش اومده!"
      )
      return false;
    }
  },
  async setPlan({ dispatch, commit, state }, data) {
    let url = '';
    if (data.plan_id === 1) {
      url = '/user/setDemo';
    } else {
      url = '/user/setPayment';
    }
    let params = data;
    let fetchResult = await execute('POST', url, params);
    if (fetchResult && (fetchResult.meta.success === true)) {
      if (data.plan_id !== 1) {
        window.location.href = fetchResult.data.urlPayment;
      }
      if (data.plan_id === 1) {
        this.$router.push('/user/paymentResult?status=true&title=دمو')
      }
  
      // commit("SET_SEARCH_RESULT", fetchResult.data);
      return true;
    } else if (fetchResult && (fetchResult.meta.code === 440)) {
      this.$toast.show(
        'نسخه دمو قبلا برای شما فعال شده است'
      )
      return false;
    } else {
      this.$toast.error(
        "مشکلی پیش اومده!"
      )
      return false;
    }
  },

  setActivePlan({ dispatch, commit, state }, data) {
    commit("SET_ACTIVE_PLAN", data);
  },
  logoutUser({ dispatch, commit, state }, data) {
    commit("LOGOUT_USER");
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}
