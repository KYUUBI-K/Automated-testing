import { createApp } from "vue";
import App from "./App.vue";
//1.Імпортуємо файл налаштувань роутера
import router from "./router/index";
//Імпортуємо файл налаштувань стора
import store from "./state/index";

//2.Додаємо роутер дододатку
createApp(App).use(router).use(store).mount("#app");
