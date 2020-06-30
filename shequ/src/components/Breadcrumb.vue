<template>
  <div class="Breadcrumb">
    <ul>
      <template v-for="(item,index) in lisData">
        <li :key="index" v-if="index!=lisData.length-1">
          <router-link :to="item.url">
            <span>{{item.name}}</span>
          </router-link>

          <i class="iconfont">&#xe7a7;</i>
        </li>
        <li :key="index" v-else>
          <router-link :to="item.url">
            <span>{{item.name}}</span>
          </router-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    lisData: Array
  }
};
</script>

<style lang="scss" scoped>
.Breadcrumb {
  height: 56px;
  line-height: 56px;
  ul {
    width: 100%;
    overflow: hidden;
    li {
      float: left;
      color: #999;
      font-size: 14px;
      &:hover {
        span {
          color: $color;
        }
      }
      span {
        cursor: pointer;
        vertical-align: middle;
      }
      .iconfont {
        vertical-align: middle;
        margin-right: 5px;
        margin-left: 5px;
        font-size: 12px;
      }
    }
  }
}
</style>