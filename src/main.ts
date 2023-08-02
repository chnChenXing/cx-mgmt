import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import routes from "./router/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
// 使用element+
app.use(ElementPlus);
app.use(routes);
app.mount("#app");
