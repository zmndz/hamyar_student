export default () => {
  // <!-- Global site tag (gtag.js) - Google Analytics -->
  // <script async src="https://www.googletagmanager.com/gtag/js?id=G-BZX37NSYF0"></script>
  // <script>
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());
  
  //   gtag('config', 'G-BZX37NSYF0');
  // </script>

  (function() {
    var doc = document;
    var src = doc.createElement("script");
    src.src = "https://www.googletagmanager.com/gtag/js?id=G-BZX37NSYF0";
    src.async = 1;
    doc.getElementsByTagName("head")[0].appendChild(src);
  })();

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BZX37NSYF0');
};
