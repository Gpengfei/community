// import Vue from "vue";

export function go(url, data = {}) {
  this.$router.push({ path: url, query: data });
}
export default {
  install: Vue => {
    Vue.prototype.a_go = go;
  }
};
