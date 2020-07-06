import Vue from "vue";
import VueRouter from "vue-router";
import Routes from "./routes";

Vue.use(VueRouter);

const routes = Routes;

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
