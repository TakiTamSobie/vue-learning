import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Claim from "@/components/Claim.vue";
import SearchInput from "@/components/SearchInput.vue";
import HeroImage from "@/components/HeroImage.vue";


Vue.config.productionTip = false;

Vue.component("Claim", Claim);
Vue.component("SearchInput", SearchInput);
Vue.component("HeroImage", HeroImage);


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
