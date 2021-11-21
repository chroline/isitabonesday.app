const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withPreact = require("next-plugin-preact");

module.exports = withPreact(
  process.env.NODE_ENV === "production" &&
    withPWA({
      pwa: {
        dest: "public",
        runtimeCaching,
      },
    })
);
