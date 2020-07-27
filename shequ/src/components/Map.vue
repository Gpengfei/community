<template>
  <div id="map"></div>
</template>

<script>
import AMap from "AMap";
export default {
  props: {
    longitude: String,
    latitude: String,
  },
  data() {
    return {};
  },
  methods: {
    init() {
      let map = new AMap.Map("map", {
        zoom: 16, //级别
        center: [116.397428, 39.90923], //中心点坐标
        viewMode: "3D", //使用3D视图
      });
      var marker = new AMap.Marker({
        position: [116.397428, 39.90923],
      });
      map.add(marker);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
#map {
  min-height: 420px;
}
</style>