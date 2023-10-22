import "./bootstrap";
import VueAxios from "vue-axios";
import { createApp } from "vue"; // Import createApp function from Vue 3
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // Import createRouter and createWebHistory from Vue Router 4
import axios from "axios";
import { routes } from "./routes";

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App);
app.use(router); // Use the router as a plugin
app.use(VueAxios, axios);
app.mount("#app");
