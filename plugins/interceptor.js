import axios from 'axios'
export default function(ctx) {
  let { app, $axios, redirect, store, route, $router, $toast } = ctx
  
  $axios.onRequest(
    (config) => {
      try {
        
        
        let register = localStorage.getItem('registerToken');
        let registerToken = register ? register : null;

        let registerVerification = localStorage.getItem('registerVerificationToken');
        let registerVerificationToken = registerVerification ? registerVerification : null;
        
        config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
        
        if (registerToken) {
          config.headers.Authorization = `Bearer ${registerToken}`;
        }

        if (registerVerificationToken) {
          config.headers.Authorization = `Bearer ${registerVerificationToken}`;
        }



        let login = localStorage.getItem('loginToken');
        let loginToken = login ? login : null;

        let loginVerification = localStorage.getItem('loginVerificationToken');
        let loginVerificationToken = loginVerification ? loginVerification : null;

        config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
        
        if (loginToken) {
          config.headers.Authorization = `Bearer ${loginToken}`;
        }

        if (loginVerificationToken) {
          config.headers.Authorization = `Bearer ${loginVerificationToken}`;
        }


        return config;
      } catch (error) {
      }
    },
    (error) => {
      

      // Promise.reject({ meta: error, data: null });
    }
  )

  $axios.onResponse((res) => {
    if (res.data.meta.code == 405){
      $toast.error(
        'لطفا دوباره وارد شوید'
      )
      localStorage.clear();
      return redirect('302', '/')
    }

  })

  $axios.onError(async error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("response error: ", error.response.data);
      // console.log("response error: ", error.response.status);
      // console.log("response error: ", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log("request error: ", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

    // return error
  })
}
