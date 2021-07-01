<template>
  <div class="landing" id="main">
    <div class="navs navs__desktop container-fluid" :class="{'navs--fixed' : fixNavbar}">
      <a href="" class="navs__logo">
        <img src="~/assets/images/logo-white.svg" alt="">
      </a>
      <nav class="navs__menu-wrapper">
        <ul class="navs__menu">
          <li class="navs__menu--item" v-scroll-to="'#main'">
            اصلی
          </li>
          <li class="navs__menu--item" v-scroll-to="'#features'">
            ویژگی‌ها
          </li>
          <li class="navs__menu--item" v-scroll-to="'#price'">
            تعرفه‌ها
          </li>
          <li class="navs__menu--item" v-scroll-to="'#faq'">
            سوالات متداول
          </li>
        </ul>
      </nav>
      <div class="navs__login--wrapper">
        <div class="navs__login" @click="openLoginModal()">
          ورود
        </div>
        <div class="navs__register" @click="openRegisterModal()">
          ثبت نام
        </div>
      </div>
    </div>

    <div class="navs navs__responsive container-fluid" :class="{'navs--fixed' : fixNavbar}">
      <div class="navs__row">
        <a href="" class="navs__logo">
          <img src="~/assets/images/logo-white.svg" alt="">
        </a>
        <div class="navs__login--wrapper">
          <div class="navs__login" @click="openLoginModal()">
            ورود
          </div>
          <div class="navs__register" @click="openRegisterModal()">
            ثبت نام
          </div>
        </div>
      </div>

      <nav class="navs__menu-wrapper navs__responsive-wrapper">
        <ul class="navs__menu">
          <li class="navs__menu--item" v-scroll-to="'#main'">
            اصلی
          </li>
          <li class="navs__menu--item" v-scroll-to="'#features'">
            ویژگی‌ها
          </li>
          <li class="navs__menu--item" v-scroll-to="'#price'">
            تعرفه‌ها
          </li>
          <li class="navs__menu--item" v-scroll-to="'#faq'">
            سوالات متداول
          </li>
        </ul>
      </nav>
    </div>

    <div class="hero__wrapper container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="hero">
              <div class="hero__title">
                موتور جستجوی وی‌فایند
              </div>
              <div class="hero__description">
                پیدا کردن جواب سوالات امتحانی
              </div>
              <button class="hero__button" @click="openRegisterModal()">
                ثبت نام
              </button>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="hero__image">
              <img src="~/assets/images/hero.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero__footer">
      <img src="~/assets/images/hero-curve.svg" alt="">
    </div>

    <div class="container">
      <div class="features" id="features">
        <div class="row features--reverse">
          <div class="col-12 col-md-6">
            <div class="features__image">
              <img src="~/assets/images/section-1.svg" alt="">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="features__text">
              <div class="features__title">
                به چه دردی می خوره؟
              </div>
              <div class="features__description">
                موتور جستجوی وی‌فایند کمکت می کنه که بتونی تو کمترین زمان جواب سوال های درسی و امتحانی رو از تو کتاب های درسی و کمک درسی پیدا کنی
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="features">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="features__image">
              <img src="~/assets/images/section-2.svg" alt="">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="features__text">
              <div class="features__title">
                جواب همه سوال ها!
              </div>
              <div class="features__description">
                وی‌فایند با استفاده از الگوریتم های جستجوی پیشرفته و بانک اطلاعاتی به روز از سوال ها و جواب های هر درس، می تونه با درصد دقت بالایی جواب سوال شما رو پیدا کنه
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="features">
        <div class="row features--reverse">
          <div class="col-12 col-md-6">
            <div class="features__image">
              <img src="~/assets/images/section-3.svg" alt="">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="features__text">
              <div class="features__title">
                خداحافظ گام به گام!
              </div>
              <div class="features__description">
                با استفاده از وی‌فایند، دیگه نیازی به گام به گام نداری چون با جستجوی هر سوالی می تونی جوابش رو پیدا کنی
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="price container-fluid" id="price">
      <div class="price__wrapper container">
        <div class="price__title">
          تعرفه ها
        </div>
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
                <div class="price__amount--number">
                  <div v-if="plan.value.price == 0">
                    رایگان
                  </div>
                  <div v-else>
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
      </div>
    </div>
    
    <div class="container">
      <div class="faq" id="faq">
        <div class="faq__title">
          سوالات متداول
        </div>
        <div class="row features--reverse">
          <div class="col-12 col-md-6">
            <div class="faq_image">
              <img src="~/assets/images/section-3.svg" alt="">
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="faq__wrapper">
              <div class="accordion w-100" role="tablist">
                <div class="faq__question" v-for="(faqQuestion, index) in faqQuestions" :key="faqQuestion.id">
                  <div header-tag="header" role="tab">
                    <div class="faq__question--title" v-b-toggle="'accordion-' + index">
                      {{faqQuestion.question}}
                      <div class="faq__question--icon when-closed">
                        <img src="~/assets/images/sort-down.svg" alt="">
                      </div>
                      <div class="faq__question--icon when-open">
                        <img src="~/assets/images/sort-up.svg" alt="">
                      </div>
                    </div>
                  </div>
                  <b-collapse :id="'accordion-' + index" visible accordion="my-accordion" role="tabpanel">
                    <div class="faq__answer">
                      {{faqQuestion.answer}}
                    </div>
                  </b-collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer container-fluid">
      <div class="footer__wrapper container">
        <div class="row">
          <div class="col-12 col-md-9">
            <div class="footer__right">
              <div class="footer__contact--title">
                تماس با ما
              </div>
              <div class="footer__contact--address">
                <div class="footer__contact--icon">
                  <img src="~/assets/images/location.svg" alt="">
                </div>
                <div class="footer__contact--label">
                  شهرک بهاران، میدان بهاران، پارک علم و فناوری سنندج
                </div>
              </div>
              <div class="footer__contact--email">
                <div class="footer__contact--icon">
                  <img src="~/assets/images/email.svg" alt="">
                </div>
                <div class="footer__contact--label">
                  vfind1400@gmail.com
                </div>
              </div>
              <div class="footer__contact--socials">
                <div class="footer__contact--social">
                  <a href="https://www.instagram.com/vfind.ir/" rel="noreferrer" target="_blank">
                    <img src="~/assets/images/instagram.svg" alt="">
                  </a>
                </div>
                <div class="footer__contact--social">
                  <a href="https://t.me/v_find" target="_blank" rel="noreferrer">
                    <img src="~/assets/images/telegram.svg" alt="">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="footer__left">
              <!-- <div class="footer__download">
                <div class="footer__download--icon">
                    <img src="~/assets/images/download.svg" alt="">
                </div>
                <div class="footer__download--label">
                  دانلود نسخه وب
                </div>
              </div> -->
              <!-- <div id="namad_zarinpal" class="footer__namad" @click="checkZarinpal">
                <img src="https://cdn.zarinpal.com/badges/trustLogo/1.svg" alt="">
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal id="modal-register" ref="modal-register" hide-footer>
      <template #modal-title>
        <div class="register__title">
          ثبت نام
        </div>
      </template>
      <div class="register">
        <div v-if="!isRegisterSubmited" class="register__info-wrapper">
          <b-form @submit="onRegister" class="register__info">
            <b-form-group id="input-group-input-register-phone" label="شماره موبایل:" label-for="input-register-phone">
              <b-form-input
                id="input-register-phone"
                type="number"
                placeholder="شماره موبایل را وارد کنید"
                class="form__input"
                :class="{'form__input--invalid' : isRegisterPhoneNumberInvalid === true}"
                v-model="registerPhoneNumber"
                @input="validateRegisterPhoneNumber()"
              ></b-form-input>
              <span v-if="isRegisterPhoneNumberInvalid === true" class="form__input--invalid-message">
                لطفا شماره موبایل صحیح وارد کنید
              </span>
            </b-form-group>

            <b-form-group id="input-group-register-grade" label="پایه تحصیلی:" label-for="input-register-grade">
              <b-form-select
                id="input-register-grade"
                class="form__select"
                :class="{'form__select--invalid': isGradeEmpty}"
                v-model="selectedGrade"
                :options="grades"
                @input="validateGrade()"
              >
              </b-form-select>
              <span v-if="isGradeEmpty === true" class="form__select--invalid-message">
                لطفا یکی از پایه های تحصیلی را انتخاب کنید
              </span>
            </b-form-group>

            <b-form-group v-if="isMajorVisible" id="input-group-register-major" label="رشته تحصیلی:" label-for="input-register-major">
              <b-form-select
                id="input-register-major"
                class="form__select"
                :class="{'form__select--invalid': isMajorEmpty}"
                v-model="selectedMajor"
                :options="majors"
                @input="validateMajor()"
              >
              </b-form-select>
              <span v-if="isMajorEmpty === true" class="form__select--invalid-message">
                لطفا یکی از رشته های تحصیلی را انتخاب کنید
              </span>
            </b-form-group>

            <button type="submit" class="button button--blue button--block mt-5">
              ارسال پیامک  کد تایید
            </button>
          </b-form>
        </div>
        <div v-else class="register__verify-wrapper">
          <b-form @submit="onVerifyRegister" class="register__verify">
            <div class="register__edit">
              <div class="register__edit--message">
                کد 5 رقمی به شماره شما پیامک شد
              </div>
              <div class="register__edit--phone" @click="registerEditPhone">
                {{registerPhoneNumber}}
              </div>
            </div>

            <b-form-group id="input-group-register-verification-code" label="کد تایید پیامک شده:" label-for="input-register-verification-code">
              <b-form-input
                id="input-register-verification-code"
                ref="registerVerificationCode"
                type="number"
                placeholder="کد تایید را وارد کنید"
                class="form__input"
                :class="{'form__input--invalid' : isRegisterVerificationCodeEmpty === true}"
                v-model="registerVerificationCode"
                @input="validateRegisterVerificationCode()"
              ></b-form-input>
              <span v-if="isRegisterVerificationCodeEmpty === true" class="form__input--invalid-message">
                لطفا کد تایید را وارد کنید
              </span>
            </b-form-group>

            <button type="submit" class="button button--blue button--block mt-5">
              ثبت کد تایید
            </button>

            <div class="register__countdown">
              <div v-if="isRegisterVerifyCountdownStarted" class="register__countdown--counter">
                {{this.regsiterCurrentVerificationTime}} ثانیه تا ردیافت مجدد کد
              </div>
              <div v-else class="register__retry">
                <div class="register__retry--label">
                  پیامکی دریافت نکردید؟ 
                </div>
                <div class="register__retry--button" @click="registerResendCode">ارسال مجدد کد تایید</div>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </b-modal>

    <b-modal id="modal-login" ref="modal-login" hide-footer>
      <template #modal-title>
        <div class="login__title">
          ورود
        </div>
      </template>
      <div class="login">
        <div v-if="!isLoginSubmited" class="login__info-wrapper">
          <b-form @submit="onLogin" class="login__info">
            <b-form-group id="input-group-login-phone" label="شماره موبایل:" label-for="input-login-phone">
              <b-form-input
                id="input-login-phone"
                type="number"
                placeholder="شماره موبایل را وارد کنید"
                class="form__input"
                :class="{'form__input--invalid' : isLoginPhoneNumberInvalid === true}"
                v-model="loginPhoneNumber"
                @input="validateLoginPhoneNumber()"
              ></b-form-input>
              <span v-if="isLoginPhoneNumberInvalid === true" class="form__input--invalid-message">
                لطفا شماره موبایل صحیح وارد کنید
              </span>
            </b-form-group>

            <button type="submit" class="button button--blue button--block mt-5">
              ارسال پیامک  کد تایید
            </button>
          </b-form>
        </div>
        <div v-else class="login__verify-wrapper">
          <b-form @submit="onVerifyLogin" class="login__verify">
            <div class="login__edit">
              <div class="login__edit--message">
                کد 5 رقمی به شماره شما پیامک شد
              </div>
              <div class="login__edit--phone" @click="loginEditPhone">
                {{loginPhoneNumber}}
              </div>
            </div>

            <b-form-group id="input-group-login-verification-code" label="کد تایید پیامک شده:" label-for="input-login-verification-code">
              <b-form-input
                id="input-login-verification-code"
                ref="loginVerificationCode"
                type="number"
                placeholder="کد تایید را وارد کنید"
                class="form__input"
                :class="{'form__input--invalid' : isLoginVerificationCodeEmpty === true}"
                v-model="loginVerificationCode"
                @input="validateLoginVerificationCode()"
              ></b-form-input>
              <span v-if="isLoginVerificationCodeEmpty === true" class="form__input--invalid-message">
                لطفا کد تایید را وارد کنید
              </span>
            </b-form-group>

            <button type="submit" class="button button--blue button--block mt-5">
              ثبت کد تایید
            </button>

            <div class="login__countdown">
              <div v-if="isLoginVerifyCountdownStarted" class="login__countdown--counter">
                {{this.loginCurrentVerificationTime}} ثانیه تا ردیافت مجدد کد
              </div>
              <div v-else class="login__retry">
                <div class="login__retry--label">
                  پیامکی دریافت نکردید؟ 
                </div>
                <div class="login__retry--button" @click="loginResendCode">ارسال مجدد کد تایید</div>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </b-modal>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      registerPhoneNumber: '',
      isRegisterPhoneNumberInvalid: false,
      loginPhoneNumber: '',
      isLoginPhoneNumberInvalid: false,
      grades: [],
      selectedGrade: null,
      isGradeEmpty: false,
      isMajorVisible: false,
      majors: [],
      selectedMajor: null,
      noMajorId: 4,
      isMajorEmpty: false,
      plans: [],
      selectedPlan: '',

      isRegisterSubmited: false,
      registerVerificationCode: null,
      isRegisterVerificationCodeEmpty: null,
      isRegisterVerifyCountdownStarted: false,
      registerTimer: null,
      registerVerificationTime: 120,
      regsiterCurrentVerificationTime: 120,

      isLoginSubmited: false,
      loginVerificationCode: null,
      isLoginVerificationCodeEmpty: null,
      isLoginVerifyCountdownStarted: false,
      loginTimer: null,
      loginVerificationTime: 120,
      loginCurrentVerificationTime: 120,

      activeQuestion: null,
      fixNavbar: false,
      faqQuestions: [
        {
          id: 1,
          question: 'وی‌فایند چیه؟',
          answer: 'یه موتور جستجوه که برای پیدا کردن جواب سوال های امتحانی طراحی شده',
          isOpen: false,
        },
        {
          id: 2,
          question: 'به درد چه کسای می خوره؟',
          answer: 'دانش آموزان، والدین، همکلاسی ها، و کلا هر کسی که می خواد به دانش آموزها تو پیدا کردن جواب سوالاشون بهشون کمک کنه',
          isOpen: false,
        },
        {
          id: 3,
          question: 'برای چه پایه هایی قابل استفاده ست؟',
          answer: 'تمام کتاب های پایه های هفتم، هشتم،نهم دهم، یازدهم، دوازدهم (همه رشته ها) در وی‌فایند وجود داره. به علاوه چندصد هزار سوال تستی و تشریحی که از منابع مختلف جمع آوری شده',
          isOpen: false,
        },
        {
          id: 4,
          question: 'اگه سوالی یا مشکلی در مورد وی‌فایند برام پیش اومد چیکار کنم؟ آیا کسی جواب گو هست؟',
          answer: 'بله. در صورت وجود هرگونه سوال یا مشکلی می تونید از طریق پشتیبانی آنلاین (پایین، سمت راست صفحه)، گروه تلگرام، کانال اینستگرام یا ایمیل، اقدام به مطرح کردن سوال یا مشکلتون بکنید تا تو کمترین زمان بررسی بشه',
          isOpen: false,
        },
        {
          id: 5,
          question: 'چطور ثبت نام کنیم؟',
          answer: 'از بخش تعرفه ها پلن مورد نظرتون رو انتخاب کنید، بعد شماره موبایلتون رو وارد کنید، بعد پایه و رشته تحصیلی تون رو انتخب کنید. بعد از این که ثبت نام رو زدید کد پیامک شده به شماره موبایلتون رو وارد کنید',
          isOpen: false,
        },
        {
          id: 6,
          question: 'چطور ازش استفاده کنیم؟',
          answer: 'بعد از ثبت نام، وارد پنل وی‌فایند میشید.  اگر اولین ورودتون هست پلن مورد نظرتون رو انتخاب کنید. بعد از ثبت پلن و پرداخت، به صفحه جستجو برگردید. تو کادری که در نظر گرفته شده سوالتون رو وارد کنید، درس مورد نظرتون رو انتخاب کنید و جستجو بزنید. اگه درسی انتخاب نکنید سوالتون از بین همه کتاب های درسی جستجو میشه',
          isOpen: false,
        },
        {
          id: 7,
          question: 'آیا می تونم اول امتحانش کنم بعد پولشو بدم؟',
          answer: 'بله. می تونید اول پلن دمو رو که رایگان هست انتخاب کنید تا جستجوی رایگان ۱۵ سوال بهتون هدیه داده بشه. اینجوری می تونید اول وی‌‌فایند رو تست کنید، بعد که از کارکردش مطمئن شدید پلن مورد نظرتون رو انتخاب کنید',
          isOpen: false,
        },
        {
          id: 8,
          question: 'آیا می تونم جواب سوالم رو تو همه درس ها پیدا کنم؟',
          answer: 'بله. با استفاده از الگوریتم جستجوی پیشرفته وی‌فایند و بانک سوالات گسترده ای که داره، می تونید با درصد خیلی بالایی جواب اکثر سوال هایی که تو امتحان میاد رو پیدا کنید (به استثناء قسمت های فرمولی درس های ریاضی و فیزیک که فعلا قابل تایپ نیستن)',
          isOpen: false,
        },
        {
          id: 10,
          question: 'چقدر احتمال داره وی‌فایند جوابم سوالم رو پیدا کنه؟',
          answer: 'خیلی زیاد! بانک سوالات وی‌فایند از منابع خیلی زیادی برای جستجو استفاده می کنه و احتمال این که سوال شما یا چنیدین سوال مشابهش پیدا بشه خیلی زیاده',
          isOpen: false,
        },
        {
          id: 11,
          question: 'آیا محدودیتی تو تعداد سوال هایی که می پرسم هست؟',
          answer: 'در نسخه دمو که برای تست کردن سیستم هست تعداد ۱۵ سوال جستجو در نظر گرفته شده. در پلن های ۱ هفته ای و ۱ ماهه به ازای هر روز، ۱۰۰۰ سوال در نظر گرفته شده. جمعا ۷,۰۰۰ سوال برای پلن یک هفته ای و ۳۰,۰۰۰ سوال برای پلن یک ماهه وجود داره',
          isOpen: false,
        },
        {
          id: 12,
          question: 'وی‌فایند رو چه گوشی هایی نصب میشه؟',
          answer: 'نسخه وب وی‌ فایند (PWA) رو همه گوشی های هوشمند اندروید و آیفون قابل نصبه. برای نصب وی‌فایند روی گوشی، از پایین صفحه روی گزینه "دانلود نسخه وب" کلیک کنید',
          isOpen: false,
        },
      ],
    }
  },
  computed: {
    ...mapGetters([
      'getPlans',
      'getMajors',
      'getGrades',
    ]),
  },
  methods: {
    ...mapActions([
      'getInformations',
      'registerUser',
      'verifyUser',
      'loginUser',
      'verifyUserLogin',
      'setActivePlan',
    ]),
    openRegisterModal() {
      this.$refs['modal-register'].show();
    },
    openLoginModal() {
      this.$refs['modal-login'].show();
    },
    toggleQuestion(index) {
      this.activeQuestion = index;
    },
    onScroll () {
      // Get the current scroll position
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      this.fixNavbar = currentScrollPosition > 0;
    },
    formatPrice(value) {      
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    validateRegisterPhoneNumber() {
      if (this.registerPhoneNumber == '') {
        this.isRegisterPhoneNumberInvalid = true;
        return false;
      }

      // let regex = new RegExp('09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}');
      // let isPhone = regex.test(this.registerPhoneNumber);
      // if (isPhone && this.registerPhoneNumber.length == 11) {
      if (this.registerPhoneNumber.length == 11) {
        this.isRegisterPhoneNumberInvalid = false;
        return true;
      } else {
        this.isRegisterPhoneNumberInvalid = true;
        return false;
      }
    },
    validateLoginPhoneNumber() {
      if (this.loginPhoneNumber == '') {
        this.isLoginPhoneNumberInvalid = true;
        return false;
      }

      /* CHECK REGEX FOR "ALL" TYPE OF NUMBERS */
      // let regex = new RegExp('09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}');
      // let isPhone = regex.test(this.loginPhoneNumber);
      // if (isPhone && this.loginPhoneNumber.length == 11) {
      if (this.loginPhoneNumber.length == 11) {
        this.isLoginPhoneNumberInvalid = false;
        return true;
      } else {
        this.isLoginPhoneNumberInvalid = true;
        return false;
      }
    },
    validateGrade() {
      let gradeId = this.selectedGrade ? this.selectedGrade.gradeId : -1;
      if (gradeId === -1 || gradeId === 1 || gradeId === 2 || gradeId === 3) {
        this.isMajorVisible = false;
      } else {
        this.isMajorVisible = true;
      }

      if (this.selectedGrade == null) {
        this.isGradeEmpty = true;
        return false;
      } else {
        this.isGradeEmpty = false;
        return true;
      }
    },
    validateMajor() {
      if (!this.isMajorVisible) {
        return true;
      }

      if (this.selectedMajor == null) {
        this.isMajorEmpty = true;
        return false;
      } else {
        this.isMajorEmpty = false;
        return true;
      }
    },
    validateRegisterForm () {
      let checkPhoneNumber = this.validateRegisterPhoneNumber();
      let checkGrade = this.validateGrade();
      let checkMajor = this.validateMajor();

      if (checkPhoneNumber && checkGrade && checkMajor) {
        return true;
      } else {
        return false;
      }
    },
    validateLoginForm () {
      let checkPhoneNumber = this.validateLoginPhoneNumber();

      if (checkPhoneNumber) {
        return true;
      } else {
        return false;
      }
    },
    validateRegisterVerificationCode() {
      if (this.registerVerificationCode == '') {
        this.isRegisterVerificationCodeEmpty = true;
        return false;
      }
      this.isRegisterVerificationCodeEmpty = false;
      return true;
    },
    validateLoginVerificationCode() {
      if (this.loginVerificationCode == '') {
        this.isLoginVerificationCodeEmpty = true;
        return false;
      }
      this.isLoginVerificationCodeEmpty = false;
      return true;
    },
    toggleRegisterVerificationForm() {
      this.isRegisterSubmited = true;
      this.isRegisterVerifyCountdownStarted = true;
      this.registerCountdown(true);
      setTimeout(() => {
        this.$refs.registerVerificationCode.focus();
      }, 0)
    },
    toggleLoginVerificationForm() {
      this.isLoginSubmited = true;
      this.isLoginVerifyCountdownStarted = true;
      this.loginCountdown(true);
      setTimeout(() => {
        this.$refs.loginVerificationCode.focus();
      }, 0)
    },
    onRegister(e) {
      e.preventDefault()
      if (!this.validateRegisterForm()) {
        return false;
      }
      this.register()
    },
    onLogin(e) {
      e.preventDefault()
      if (!this.validateLoginForm()) {
        return false;
      }
      this.login()
    },
    async register() {
      let params = {
        mobile: this.registerPhoneNumber,
        grade_id: this.selectedGrade.gradeId,
        major_id: this.isMajorVisible ? this.selectedMajor.majorId : this.noMajorId,
      }
      let result = await this.registerUser(params);
      if (result) {
        this.toggleRegisterVerificationForm();
      }
    },
    async login() {
      let params = {
        mobile: this.loginPhoneNumber,
      }
      let result = await this.loginUser(params);
      if (result) {
        this.toggleLoginVerificationForm();
      }
    },
    onVerifyRegister(e) {
      e.preventDefault()
      if (!this.validateRegisterVerificationCode()) {
        return false;
      }
      this.verifyRegister()
    },
    onVerifyLogin(e) {
      e.preventDefault()
      if (!this.validateLoginVerificationCode()) {
        return false;
      }
      this.verifyLogin()
    },
    async verifyRegister() {
      if (!this.validateRegisterVerificationCode()) {
        return false;
      }
      let params = {
        mobile: this.registerPhoneNumber,
        codesms: this.registerVerificationCode,
      }
      let result = await this.verifyUser(params);
      if (result.status) {
        if (!result.isPaid) {
          this.$router.push('/user/purchase');
        } else {
          this.$router.push('/user');
        }
      }
    },
    async verifyLogin() {
      if (!this.validateLoginVerificationCode()) {
        return false;
      }
      let params = {
        mobile: this.loginPhoneNumber,
        codesms: this.loginVerificationCode,
      }
      let result = await this.verifyUserLogin(params);
      if (result.status) {
        if (!result.isPaid) {
          this.$router.push('/user/purchase');
        } else {
          this.$router.push('/user');
        }
      }
    },
    registerCountdown(isStarted) {
      if (isStarted) {
        this.registerTimer = setInterval(() => {
          if (this.regsiterCurrentVerificationTime <= 1) {
            clearInterval(this.registerTimer);
            this.isRegisterVerifyCountdownStarted = false;
          }
          --this.regsiterCurrentVerificationTime
        }, 1000);
      } else {
        clearInterval(this.registerTimer);
        this.regsiterCurrentVerificationTime = this.registerVerificationTime;
      }
    },
    loginCountdown(isStarted) {
      if (isStarted) {
        this.loginTimer = setInterval(() => {
          if (this.loginCurrentVerificationTime <= 1) {
            clearInterval(this.loginTimer);
            this.isLoginVerifyCountdownStarted = false;
          }
          --this.loginCurrentVerificationTime
        }, 1000);
      } else {
        clearInterval(this.loginTimer);
        this.loginCurrentVerificationTime = this.loginVerificationTime;
      }
    },
    registerResendCode()  {
      this.registerCountdown(false);
      this.isRegisterVerifyCountdownStarted = false;
      this.register();
    },
    loginResendCode()  {
      this.loginCountdown(false);
      this.isLoginVerifyCountdownStarted = false;
      this.login();
    },
    registerEditPhone() {
      this.registerCountdown(false);
      this.isRegisterSubmited = false;
      this.isRegisterVerifyCountdownStarted = false;
    },
    loginEditPhone() {
      this.loginCountdown(false);
      this.isLoginSubmited = false;
      this.isLoginVerifyCountdownStarted = false;
    },
    choosePlan(planId) {
      this.setActivePlan(planId);
      this.$refs['modal-register'].show();
    },
    checkZarinpal() {
      window.open("https://www.zarinpal.com/trustPage/"+window.location.hostname, null, "width=450, height=600, scrollbars=no, resizable=no");
    },
  },
  async created () {
    },
  async mounted () {
    await this.getInformations();
    this.plans = this.getPlans;
    this.majors = this.getMajors;
    this.grades = this.getGrades;  
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll);
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/partials/_variables';

.register {
  padding: 16px;

  &__title {
    font-weight: bold;
  }

  &__edit {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 64px;

    &--message {
      color: $gray-color;
    }

    &--phone {
      color: $blue-color;
      cursor: pointer;
    }
  }

  &__countdown {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 64px;

    &--counter {
      color: lighten($blue-color, 20%);
      width: 100%;
      text-align: center;
      text-align: left;
      font-size: 14px;
    }
  }

  &__retry {
    display: flex;
    width: 100%;
    justify-content: space-between;

    &--label {
      color: $gray-color;
    }

    &--button {
      color: $blue-color;
      cursor: pointer;
    }
  }

}

.login {
  padding: 16px;

  &__title {
    font-weight: bold;
  }

  &__edit {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 64px;

    &--message {
      color: $gray-color;
    }

    &--phone {
      color: $blue-color;
      cursor: pointer;
    }
  }

  &__countdown {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 64px;

    &--counter {
      color: lighten($blue-color, 20%);
      width: 100%;
      text-align: center;
      text-align: left;
      font-size: 14px;
    }
  }

  &__retry {
    display: flex;
    width: 100%;
    justify-content: space-between;

    &--label {
      color: $gray-color;
    }

    &--button {
      color: $blue-color;
      cursor: pointer;
    }
  }

}

.landing {
  // background-image: url('/assets/images/hero-curve.svg');
}

.navs {
  background-color: $blue-color;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  transition: all 0.2s ease-in-out;

  &--fixed {
    position: fixed;
    z-index: 1;
    padding-top: 0px;
    padding-bottom: 0px;
    box-shadow: 0 0px 12px 0px rgba($blue-color , $alpha: 0.5);
    font-size: 14px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  &__logo {
    width: 128px;
    transition: all 0.2s ease-in-out;
  }

  &--fixed {

    .navs__logo {
      width: 96px;
    }
  }

  &__menu {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
    width: 100%;
    justify-content: space-between;
    // padding: 0 8px;

    &--item {
      padding: 8px 16px;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: lighten($blue-color, 36%);
      }
    }
    
    &--item:first-child {
      padding-right: 0px;
      margin-right: 0px;
    }

    &--item:last-child {
      padding-left: 0px;
      margin-left: 0px;
    }
  }

  &__login {
    color: $blue-color;
    font-weight: bold;
    margin: 8px;
    cursor: pointer;
    background: #ffffff;
    border-radius: 50px;
    line-height: 30px;
    height: 32px;
    width: 64px;
    text-align: center;

    &--wrapper {
      display: flex;
      justify-content: space-between;
      width: 150px;
      flex-direction: row-reverse;
    }
  }

  &__register {
    color: #fff;
    font-weight: bold;
    margin: 8px;
    cursor: pointer;
    line-height: 30px;
    height: 32px;
    width: 64px;
    text-align: center;
  }

  &__responsive {
    display: flex;
    width: 100%;
    justify-content: center;  
    flex-direction: column;

    &-wrapper {
      // display: flex;
      // justify-content: center;
    }
  }

  &__desktop {
    display: none;
  }

}

.hero {
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  &__wrapper {
    background-color: $blue-color;
    padding-top: 96px;
  }

  &__title {
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 32px;
  }

  &__description {
    color: #fff;
    font-size: 24px;
    margin-bottom: 24px;
  }

  &__button {
    color: $blue-color;
    background-color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 24px;
    border-radius: 4px;
    line-height: 54px;
    border: none;
    width: 200px;
    transition: all 0.2s ease-in-out;

    &:focus {
      outline: none;
    }
  }

  &__image {
    width: 100%;
    max-width: 540px;
    padding: 32px;
  }

  &__footer {
    width: 100%;
    margin-bottom: 2rem;
  }
}

.features {
  margin-bottom: 3rem;

  &__text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 16px;
  }

  &__title {
    font-size: 32px;
    margin-bottom: 24px;
    font-weight: bold;
  }

  &__description {
    font-size: 24px;
    text-align: justify;
  }

  &__image {
    width: 100%;
    max-width: 540px;
    padding: 32px;
  }

}

.price {
  // margin-bottom: 3rem;
  padding-top: 128px;
  padding-bottom: 128px;
  background-color: #fafafa;

  &__wrapper {

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
    margin: 32px;

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
    }
  }

  &__amount {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 24px 0 24px;

    &--number {
      font-size: 32px;
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

.faq {
  margin-bottom: 6rem;
  padding: 16px;
  padding-top: 6rem;
  
  &__wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 32px;
  }

  &__title {
    font-size: 32px;
    margin-bottom: 32px;
    font-weight: bold;
  }

  &__question {
    margin-bottom: 16px;
    background-color: #f7f7f7;
    border-radius: 6px;
    padding: 16px;
    box-shadow: 0 2px 8px -6px #000000;

    &--title {
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: lighten($blue-color, 0%);
      }
    }

    &--icon {
      width: 10px;
      margin-left: 8px;

      &:hover {
        color: lighten($blue-color, 0%);
      }

    }

    &--active {
      transform: rotate(180deg);
    }

    & .not-collapsed {
        color: $blue-color;
    }
  }

  &__answer {
    padding: 24px 16px 0 16px;
    text-align: justify;
  }
}

.collapsed > .when-open {
  display: none;
}

.not-collapsed > .when-closed {
    display: none;
}

.footer {
  background-color: #2F4152;
  color: #fff;
  padding: 60px 0;

  &__wrapper {
    
  }

  &__contact {

    &--title {
      font-size: 32px;
      margin-bottom: 24px;
      font-weight: bold;
    }
    
    &--address {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
    
    &--icon {
      margin-left: 16px;
      width: 20px;
    }
    
    &--email {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
    
    &--socials {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
        
    &--social {
      margin: 0 8px;
      width: 20px;

      &:first-child {
        margin-right: 0;
      }
    }
  }

  &__left {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__right {
    margin-bottom: 64px;
  }

  &__download {
    max-width: 250px;
    width: 100%;
    display: flex;
    background-color: #F4F4F4;
    border-radius: 6px;
    color: #434343;
    font-weight: bold;
    height: 64px;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
    cursor: pointer;
    
    &--icon {
      margin-left: 8px;
      width: 32px;
    }

    &--label {

    }
  }

  &__namad {
    // background-color: #F4F4F4;
    border-radius: 6px;
    max-width: 120px;
    width: 100%;
    cursor: pointer;
  }

}

// Medium devices (tablets, 768px and up)
@media (min-width: 767.98px) {
  .navs {

    &--fixed {
      padding-top: 8px;
      padding-bottom: 8px;
      font-size: 16px;
    }

    &__responsive {
      display: none;
    }

    &__desktop {
      display: flex;
    }

    &__menu--item {
      margin: 0 4px;
      font-size: 16px;
    }

    &__login {
      line-height: 34px;
      height: 36px;
      width: 64px;
      text-align: center;
    }

  }

  .hero {

    &__footer {
      margin-bottom: 6rem;
    }
  }

  .features {

    &--reverse {
      flex-direction: row-reverse;
    }

    &__text {
      padding: 0;
    }

    &:nth-child(even) {
      .features__text {
        margin-left: 96px;
      }
    }

    &:nth-child(odd) {
      .features__text {
        margin-right: 96px;
      }
    }
  }

  .price {
    margin-bottom: 5rem;
    background-color: #fafafa;

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

  .faq {
    
    &__wrapper {
      margin-top: 0px;
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
