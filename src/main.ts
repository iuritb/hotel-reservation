import { createApp } from "vue";
import App from "./App.vue";

//Pinia
import pinia from "./store";

//Router
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(pinia).use(router).use(vuetify).mount("#app");
