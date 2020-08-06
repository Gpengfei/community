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
    init(longitude, latitude) {
      let map = new AMap.Map("map", {
        zoom: 16, //级别
        center: [longitude, latitude], //中心点坐标
        viewMode: "3D", //使用3D视图
      });
      var marker = new AMap.Marker({
        position: [longitude, latitude],
      });
      map.add(marker);
    },
  },
  mounted() {
    console.log(this.longitude, this.latitude);
    this.init(this.longitude, this.latitude);
  },
  watch: {
    longitude(val) {
      this.init(this.longitude, this.latitude);
    },
    latitude(val) {
      this.init(this.longitude, this.latitude);
    },
  },
};
</script>

<style lang="scss" scoped>
#map {
  min-height: 420px;
}
</style>