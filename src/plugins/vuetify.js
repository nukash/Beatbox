// import "@mdi/js"; // Ensure you are using css-loader
import "@mdi/font/css/materialdesignicons.min.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
});
