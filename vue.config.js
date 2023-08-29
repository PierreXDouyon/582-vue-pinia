const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/", //https://router.vuejs.org/guide/essentials/history-mode.html#Example-Server-Configurations
});
