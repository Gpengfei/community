import axios from "axios";
import qs from "qs";

/* post请求 */
export function post(url, data, callbacks) {
  data.token = process.env.NODE_ENV === 'production' ? this.$store.state.token : "259ccffe-836c-41ba-b6e0-45cdbbfbfd9a";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      // "platform":"H5"
    },
    baseURL:
        process.env.NODE_ENV == "production"
            ? "http://zt.shenyueyun.com/"
            : "http://zt.shenyueyun.com/",
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

export function card(callbacks) {
  console.log("card");
  post("/addons/shopro/cart", {}, ress => {
    callbacks(ress);
    this.$store.commit("change", stat => {
      let num = 0;
      for (let i = 0; i < ress.data.data.length; i++) {
        num += parseInt(ress.data.data[i].goods_num);
      }
      stat.shopCar = num;
    })
  })
}

export function go(url, data = {}) {
  this.$router.push({path: url, query: data});
}

export function gop(url, data = {}) {
  this.$router.push({name: url, params: data});
}

export function transformTime(time) {
  let date = new Date(time * 1000);
  let YY = date.getFullYear() + '-';
  let MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  let mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  let ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  // return YY + MM + DD + " " + hh + mm + ss;
  return YY + MM + DD;
}

export default {
  install: Vue => {
    Vue.prototype.a_post = post;
    Vue.prototype.a_get = get;
    Vue.prototype.a_go = go;
    Vue.prototype.a_gop = gop;
    Vue.prototype.a_card = card;
    Vue.prototype.a_transformTime = transformTime;
  }
};
