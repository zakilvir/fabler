import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import IconPack from "./components/IconPack/index.vue";

const app = createApp(App);
app.component("IconPack", IconPack);
app
  .use(store)
  .use(router)
  .mount("#app");
