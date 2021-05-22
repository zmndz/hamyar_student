import { execute, setCacheData, clearCacheData } from "~/utils/publicScripts"

export const state = () => ({
  plans: [],
  activePlan: null,
  majors: [],
  grades: [],
  activeMajor: null,
  activeGrade: null,
  booksList: [
    {
      value: null, 
      text: 'همه کتاب ها', 
    }, 
    {
      value: 1, 
      text: 'ریاضی', 
    }, 
    {
      value: 2, 
      text: 'ادبیات فارسی', 
    }, 
    {
      value: 3, 
      text: 'علوم تجربی', 
    }, 
    {
      value: 4, 
      text: 'هدیه های آسمانی', 
    }, 
  ],
  searchResult: [],

  mobile: null,
  registerToken: null,
  registerVerificationToken: null,
  loginToken: null,
  loginVerificationToken: null,

})

export const getters = {
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
    setCacheData("plans", JSON.stringify(alteredData));
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
    setCacheData("majors", JSON.stringify(alteredData));
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
    setCacheData("grades", JSON.stringify(alteredData));
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
    setCacheData('loginVerificationToken', data)
  },
  SET_SEARCH_RESULT(state, data) {
    state.searchResult = data;
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
        "لطفا دوباره امتحان کنید!"
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
      return true;
    } else {
      this.$toast.error(
        "لطفا دوباره امتحان کنید!"
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
        "لطفا دوباره امتحان کنید!"
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
    } else if (fetchResult && (fetchResult.meta.code === 420)) {
      this.$toast.show(
        `شماره موبایل ${data.mobile} قبلا در سیستم ثبت شده است. از بخش ورود برای لاگین استفاده کنید.`
      )
      return false;
    } else {
      this.$toast.error(
        "مشکلی پیش اومده"
      )
      return false;
    }
  },
  async verifyUserLogin({ dispatch, commit, state }, data) {
    const url = '/user/auth/verifylogin';
    let params = data;
    let fetchResult = await execute('POST', url, params);
    if (fetchResult && (fetchResult.meta.success === true)) {
      commit("SET_LOGIN_VERIFICATION_DATA", fetchResult.data.token);
      return true;
    } else if (fetchResult && (fetchResult.meta.code === 420)) {
      this.$toast.show(
        `شماره موبایل ${data.mobile} قبلا در سیستم ثبت شده است. از بخش ورود برای لاگین استفاده کنید.`
      )
      return false;
    } else {
      this.$toast.error(
        "لطفا دوباره امتحان کنید!"
      )
      return false;
    }
  },
  async setSearchQuery({ dispatch, commit, state }, data) {
    const url = '/user/setQuestion';
    console.log('data: ', data);
    let params = data;
    let fetchResult = await execute('POST', url, params);
    if (fetchResult && (fetchResult.meta.success === true)) {
      console.log('fetchResult: ', fetchResult);
      commit("SET_SEARCH_RESULT", fetchResult.data);
      return true;
    } else if (fetchResult && (fetchResult.meta.code === 420)) {
      this.$toast.show(
        `شماره موبایل ${data.mobile} قبلا در سیستم ثبت شده است. از بخش ورود برای لاگین استفاده کنید.`
      )
      return false;
    } else {
      this.$toast.error(
        "لطفا دوباره امتحان کنید!"
      )
      return false;
    }
  },

  async logoutUser({ dispatch, commit, state }, data) {
    commit("LOGOUT_USER");
  },

  // async setLoginData({ dispatch, commit, state }, data) {
  //   commit("INSERT_NEW_STUDENT", data);
  // },

}

export default {
  state,
  getters,
  actions,
  mutations
}
