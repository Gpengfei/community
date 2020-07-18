<template>
  <div class="detialRight">
    <!--标题部分-->
    <h2 class="h2">{{ detail.title }}</h2>
    <p class="dp">{{ detail.subtitle }}
      <!--<span class="span">「6GB+128GB到手价仅1499元；8GB+256GB到手价仅1799元」</span>120Hz高帧率流速屏 / 索尼6400万前后六摄 / 6.67''小孔径全面屏 /
      最高可选8GB+256GB大存储 / 高通骁龙730G处理器 / 3D四曲面玻璃机身 / 4500mAh+27W快充 / 多功能NFC-->
    </p>
    <!--标题部分-->
    <!--店铺-->
    <!--    <p title="自己自愿自营" class="company-info">自营</p>-->
    <!--店铺 end-->
    <!--钱-->
    <div class="linePrice">
      <span class="span">{{ pricem || detail.price }} 元 <del v-if="priceDetm || detail.original_price"
                                                             class="del">{{ priceDetm || detail.original_price }}元</del></span>
    </div>
    <!--钱 end-->
    <div class="line"></div>
    <!--地址-->
    <!--    <div class="address_box">-->
    <!--      <div class="address">-->
    <!--        <div class="con">-->
    <!--          <div class="info">-->
    <!--            <span>内蒙古</span>-->
    <!--            <span>呼和浩特市</span>-->
    <!--            <span>赛罕区</span>-->
    <!--            <span>敕勒川路街道</span>-->
    <!--          </div>-->
    <!--          <a class="edit">修改</a>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--地址ened-->
    <!-- 规格 -->
    <div class="buy-box-child" v-for="(arr, i) in detail.sku" :key="i">
      <div class="option-box">
        <div class="title">{{arr.name}}</div>
        <ul class="ul">
          <li class="li" :class="{active:specificationsArr[i] == j}" @click="active(i,j)"
              v-for="(item, j) in arr.content"
              :key="j">
            <a class="a">{{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 规格 -->
    <div class="line"></div>
    <div class="inputNumber">
      <div class="left">
        购买数量
      </div>
      <el-input-number size="medium" v-model="goods_num" :min="1" :max="maxNumber"></el-input-number>
      <div class="right">
        库存: {{ maxNumber }}
      </div>
    </div>
    <div class="line"></div>
    <!--默认商品图-->
    <div v-show="detailImage">
      <img class="defaultImg" :src="detailImage" alt="">
      <div class="line"></div>
    </div>

    <!--默认商品图end-->

    <!-- 总结价格 -->
    <div class="selected-list">
      <ul class="ul">
        <li class="li"> {{ detail.title }}
          <span class="span">{{ pricem || detail.price }} 元<del
              class="del">{{ priceDetm || detail.original_price }} 元</del>
          </span>
        </li>
      </ul>
      <!-- <ul class="ul">
              <li class="li"> {{ detail.title }} <span class="span">239元</span></li>&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;
            </ul>-->
      <div class="price">总计：{{ pricem || detail.price }}元</div>
    </div>
    <!-- 总结价格end -->
    <!--按钮-->
    <div class="btn_box">
      <div class="sale-btn" @click="purchase()">
        <a class="btn">立即购买</a>
      </div>
      <div class="favorite-btn">
        <a class="btn">
          加入购物车
        </a>
      </div>
    </div>
    <!--按钮 end-->
  </div>
</template>

<script>
  export default {
    name: "detialRight",
    data() {
      return {
        type: this.buyType,
        specificationsArr: [-1, -1],
        /*显示钱*/
        //优惠价格
        pricem: 0,
        //实际价格
        priceDetm: 0,
        //图片
        detailImage: "",
        //对比
        sku_priceStr: "",
        // 选择的商品上位,
        superiorPosition: {},
        //最小数量
        goods_num: 1,
        //最大数量
        maxNumber: 1,
        // 确定规格
        confirmGoodsInfo: {},
      };
    },
    /**
     * 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
     * */
    beforeCreate() {
    },
    /*
   * 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始， 属性目前不可见。
   * */
    created() {
    },
    /**
     * 在挂载开始之前被调用：相关的 render 函数首次被调用。
     * */
    beforeMount() {
    },
    /**
     * el 被新创建的 vm. 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm. 也在文档内。
     * 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm. 替换掉 mounted
     * */
    mounted() {
    },
    /**
     * 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
     * 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。
     * */
    beforeUpdate() {
    },
    /**
     * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
     * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
     * 注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm. 替换掉 updated
     * */
    updated() {
    },
    /**
     * 实例销毁之前调用。在这一步，实例仍然完全可用。
     * 该钩子在服务器端渲染期间不被调用。
     */
    beforeDestroy() {
    },
    /**
     * props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。
     * 你可以基于对象的语法使用以下选项：
     * type: 可以是下列原生构造函数中的一种：String、Number、Boolean、Array、Object、Date、Function、Symbol、任何自定义构造函数、或上述内容组成的数组。会检查一个 prop 是否是给定的类型，否则抛出警告。Prop 类型的更多信息在此。
     * default: any
     * 为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。对象或数组的默认值必须从一个工厂函数返回。
     * required: Boolean
     * 定义该 prop 是否是必填项。在非生产环境中，如果这个值为 truthy 且该 prop 没有被传入的，则一个控制台警告将会被抛出。
     * validator: Function
     * 自定义验证函数会将该 prop 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 falsy 的值 (也就是验证失败)，一个控制台警告将会被抛出。你可以在这里查阅更多 prop 验证的相关信息。*/
    props: {
      detail: {
        type: Object,
        default: () => {
          return {}
        }
      },
      buyType: {
        type: String,
        default: 'sku'
      },
      goodsType: {
        type: String,
        default: 'goods'
      },
      grouponBuyType: {
        type: String,
        default: 'alone'
      },
      grouponId: {
        //参加拼团的时候，传入当前团id;
        type: Number,
        default: 0
      }
    },
    /**
     * 计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
     * 注意如果你为一个计算属性使用了箭头函数，则 this 不会指向这个组件的实例，不过你仍然可以将其实例作为函数的第一个参数来访问。
     * computed: {aDouble: vm => vm.a * 2}
     * 计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。注意，如果某个依赖 (比如非响应式属性) 在该实例范畴之外，则计算属性是不会被更新的。
     * */
    computed: {},
    /**
     * methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例。
     * */
    methods: {
      /**
       * 购买
       * */
      purchase() {
        if (this.confirmSku()) {
          let confirmGoodsList = [];
          confirmGoodsList.push(this.confirmGoodsInfo);
          let datas = {
            goodsList: JSON.stringify(confirmGoodsList),
            from: 'goods',
            orderType: this.goodsType,
            grouponBuyType: this.grouponBuyType,
            grouponId: this.grouponId
          }
          this.$store.commit("change",stat=>{
            stat.settlementObj = datas
          });
          this.a_gop("settlement", datas)
          console.log(datas);
        }
      },
      /**
       * 加入购物车确定
       * */
      confirmCart() {
        let that = this;
        if (this.confirmSku()) {
          let confirmGoodsList = {
            list: [that.confirmGoodsInfo],
            from: 'goods'
          };
        }
      },
      /**
       * 确定规格
       * */
      confirmSku() {
        this.superiorPosition.goods_num = this.goods_num;
        this.confirmGoodsInfo = {
          goods_id: this.superiorPosition.goods_id,
          goods_num: this.superiorPosition.goods_num,
          sku_price_id: this.superiorPosition.id,
          goods_price: this.superiorPosition.price
        };
        if (!this.confirmGoodsInfo.sku_price_id) {
          this.$message.error('请选择规格');
          return false;
        } else {
          return true;
        }
      },
      /*点击规格*/
      active(i, j) {
        this.specificationsArr.splice(i, 1, j);
        if (this.specificationsArr.length > 0 && this.specificationsArr[0] == -1 || this.specificationsArr.indexOf(-1) == 1) {
          console.log("不通过")
          return false;
        }
        console.log("通过");
        this.sku_priceStr = "";
        for (let k = 0; k < this.specificationsArr.length; k++) {
          (this.specificationsArr.length - 1) == k ? this.sku_priceStr += this.detail.sku[k].content[this.specificationsArr[k]].id : this.sku_priceStr += this.detail.sku[k].content[this.specificationsArr[k]].id + ","
        }
        this.contrast(this.sku_priceStr);
      },
      /*对比*/
      contrast(str) {
        console.log("str", str);
        for (let i = 0; i < this.detail.sku_price.length; i++) {
          console.log(this.detail.sku_price[i].goods_sku_ids == str);
          if (this.detail.sku_price[i].goods_sku_ids == str) {
            this.superiorPosition = this.detail.sku_price[i];
            //库存
            if (this.detail.sku_price[i].stock) {
              this.maxNumber = this.detail.sku_price[i].stock
            }
            //优惠价格
            if (this.detail.sku_price[i].price) {
              this.pricem = this.detail.sku_price[i].price;
            }
            //实际价格
            if (this.detail.sku_price[i].original_price) {
              this.priceDetm = this.detail.sku_price[i].original_price;
            }
            //图片
            if (this.detail.sku_price[i].image) {
              this.detailImage = this.detail.sku_price[i].image;
            }
          }
        }
      },
      someMethod() {
        for (let i = 0; i < this.detail.length; i++) {
          this.detail.length.splice(i, 0, -1);
          //优惠价格
          this.pricem = detail.price;
          //实际价格
          this.priceDetm = detail.original_price;
          //
        }
        this.maxNumber = this.detail.stock;
      }
    },
    /**
     * 一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 ()，遍历 watch 对象的每一个属性。
     * */
    watch: {
      buyType(nweVal, oldVal) {
        return newVal;
      },
      detail: {
        handler: 'someMethod',
        deep: true,
        immediate: true
      },
      /*detail() {
        for (let i = 0; i < this.sku.detail.length; i++) {
          this.sku.detail.length.splice(i, 0, -1);
        }
      }*/
    },
    /**
     * 包含 Vue 实例可用指令的哈希表。
     * */
    directives: {},
    /**
     * 包含 Vue 实例可用过滤器的哈希表。
     * */
    filters: {},
    /**
     * 包含 Vue 实例可用组件的哈希表。
     * */
    components: {},
  }
</script>

<style scoped lang="scss">
  @mixin buy_box_child() {
    margin-bottom: 30px;
    position: relative;
    .title {
      font-size: 18px;
      line-height: 1.6;
    }
    .ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;

      .li {
        margin-right: 12px;
        margin-top: 10px;
        line-height: 42px;
        height: 42px;
        position: relative;
        border: 1px solid #e0e0e0;
        list-style: none;
        cursor: pointer;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
        width: 292px;
        font-size: 16px;
        text-align: center;

        &.active, &:hover {
          z-index: 3;
          color: $shopColor;
          border-color: $shopColor;
        }

      }
    }
  }

  @mixin selected_list() {
    background: #f9f9fa;
    padding: 30px;
    margin-bottom: 30px;
    .ul {
      padding: 0;
      margin: 0;

      .li {
        list-style: none;
        line-height: 30px;
        color: #616161;

        .span {
          float: right;

          .del {
            display: inline-block;
            margin-left: 5px;
          }
        }
      }
    }
    .price {
      color: $shopColor;
      font-size: 24px;
      padding-top: 20px;
      line-height: 36px;
    }
  }

  .detialRight {
    font-size: 14px;
    width: 100%;

    .h2 {
      margin: 0;
      padding: 0;
      font-size: 24px;
      font-weight: 400;
      color: #212121;
    }

    .line {
      margin-top: 12px;
      margin-bottom: 12px;
      border-bottom: 1px solid #e0e0e0;
    }

    .address_box {
      margin: 20px 0;

      .address {
        position: relative;
        padding: 30px 50px;
        background: #fafafa;
        border: 1px solid #e0e0e0;

        .con {
          .info {
            display: inline-block;

            span {
              display: inline;
              margin-right: 14px;
            }
          }

          .edit {
            color: $shopColor;
            margin: 0;
            display: inline-block;
          }
        }
      }
    }

    .dp {
      color: #b0b0b0;
      margin: 0;
      padding: 0;
      padding-top: 8px;
      line-height: 1.5;

      .span {
        color: rgb(255, 74, 0);
      }
    }

    .company-info {
      margin-top: 14px;
      color: $shopColor;
      margin-bottom: 0;
    }

    .linePrice {
      @include priceDetial(18px, 14px);
    }

    .buy-box-child {
      @include buy_box_child();
    }

    .selected-list {
      @include selected_list();
    }

    .btn_box {
      margin: 10px 0 20px 0;

      .sale-btn {
        display: inline-block;
        margin-right: 10px;

        .btn {
          @include asd_btn();
          width: 298px;
          height: 52px;
          line-height: 52px;
          font-size: 16px;
          background: $shopColor;
          border-color: $shopColor;
          color: #fff;
        }
      }

      .favorite-btn {
        display: inline-block;
        margin-right: 10px;

        .btn {
          @include asd_btn();
          width: 140px;
          height: 52px;
          line-height: 52px;
          font-size: 16px;
          background: #b0b0b0;
          border-color: #b0b0b0;
          color: #fff;
        }
      }
    }

    .defaultImg {
      width: 200px;
      height: 200px;
      display: block;
    }

    .inputNumber {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .left {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100%;
        font-size: 15px;
        margin-right: 15px;
      }

      .right {
        font-size: 15px;
        display: block;
        float: right;
        height: 100%;
        margin-left: 50px;
      }
    }
  }
</style>
