export default () => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "52d7a848-1b81-4b4a-98b6-a6fba7d38775";

  (function() {
    var d = document;
    var s = d.createElement("script");

    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
};
