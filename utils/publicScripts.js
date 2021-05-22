export function execute(method, resource, data, params) {
  return window.$nuxt
    .$axios({
      method,
      url: resource,
      data,
      params
    })
    .then((res) => {
        if (res) {
          return res.data
        } else {
          return false;
        }
    })
    .catch((err)=>{
      console.log('err: ', err)
    })
}

export function setCacheData(title, data) {
  localStorage.setItem(title, data);
}

// export function getCacheData(title) {
//   let cachedData = JSON.parse(localStorage.getItem(title));
//   return cachedData;
// }

export function clearCacheData(title, data) {
  localStorage.clear();
}
