const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/stefan",
    proxy({
      target: "http://ws.headless.dev.ecm",
      changeOrigin: true
    })
  );
};
