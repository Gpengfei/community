import Vue from "vue";
import axios from "axios";
import qs from "qs";
/* post请求 */
export function post(url, data, callbacks) {
  data.token = process.env.NODE_ENV === 'production' ? this.$store.state.token : "47aea37e-801e-49be-b3b9-e7dca09a1eaa";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      // "platform":"H5"
    },
    baseURL:
        process.env.NODE_ENV == "production"
            ? "http://smart.zhuwenyong.xyz/"
            : "http://smart.zhuwenyong.xyz/",
    data: qs.stringify(data),
    xhrFields: {
      withCredentials: true
    },
    url
  };
  axios(options)
      .then(res => {
        console.log(url, res);
        callbacks(res);
      })
      .catch(err => {
        console.log(url, err);
      });
}
/* get 请求 */
export function get(url, data) {
  data.token = process.env.NODE_ENV === 'production' ? this.$store.state.token : "47aea37e-801e-49be-b3b9-e7dca09a1eaa";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
    xhrFields: {
      withCredentials: true
    },
    url
  };
  axios(options);
}
export function go(url, data = {}) {
  this.$router.push({ path: url, query: data });
}

export default {
  install: Vue => {
    Vue.prototype.a_post = post;
    Vue.prototype.a_get = get;
    Vue.prototype.a_go = go;
  }
};
