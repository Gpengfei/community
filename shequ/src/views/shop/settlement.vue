<!--结算页-->
<template>
  <div class="settlement">
    <div class="detail">
      <div class="address">
        <div class="address-header">
          <span class="header-title">收货地址</span>
        </div>
        <!--地址列表-->
        <addressList v-on:addId="addId"/>
        <!--地址列表-->
      </div>
    </div>
    <div class="detail">
      <div class="address">
        <div class="address-header">
          <span class="header-title">商品</span>
        </div>
        <div class="row-list">
          <div class="good-item" v-for="(arr, index) in orderPreList" :key="index">
            <div class="item-desc good-img">
              <img :src="arr.detail.image">
            </div>
            <div class="item-desc good-name">
              <a>
                <span>{{arr.detail.title}} <span> {{arr.detail.current_sku_price.goods_sku_text}}</span></span>
              </a>
            </div>
            <div class="item-desc">
              <div class="special-handling-differentiate">
                <div class="item-desc good-price">￥ {{ arr.detail.price }} 元 x {{ arr.goods_num }}</div>
                <div class="item-desc good-status"></div>
                <div class="item-desc good-total">￥ {{arr.goods_amount}}元</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-options">
        <div class="desc">
          <p class="title">配送方式</p>
        </div>
        <div class="options-desc options-body">
          <div class="options-list">
            <div class="options-item selected">包邮</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="seRowWar">
        <div class="left">

        </div>
        <div class="right">
          <ul class="ul">
            <li class="li">
              <span class="name">商品件数：</span>
              <span class="valur">{{orderPre.goods_number}}件</span>
            </li>
            <li class="li">
              <span class="name">商品总价：</span>
              <span class="valur">￥{{ orderPre.goods_amount || '0.00' }}件</span>
            </li>
            <li class="li">
              <span class="name">运费：</span>
              <span class="valur">￥{{orderPre.dispatch_amount||"0.00" }}元</span>
            </li>
            <li class="li">
              <span class="name">应付总额：</span>
              <span class="valur pm">￥<em>{{ orderPre.total_fee||"0.00" }}</em> 元</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="detail-section footer-detail clearfix">
      <div class="left"></div>
      <div class="handle-action">
        <div class="operating-button">
          <a class="btn btn-primary" @click="GoOrderSubmission">去结算</a>
          <a class="btn btn-return">返回购物车</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import addressList from "@components/shop/addressList"

  export default {
    name: "settlement",
    data() {
      return {
        paramsList: this.$route.params,
        goodsList: [],
        from: "",
        orderType: "",
        grouponBuyType: "",
        grouponId: "",
        addressId: 0,
        couponId: 0,

        /* 商品列表 */
        orderPre: {},
        orderPreList: [],
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
      // this.pullArea();
      let pObj =  this.$store.state.settlementObj || this.$route.params ;
      console.log("pObj", pObj);
      if (JSON.parse(pObj.goodsList).length) {
        this.goodsList = [];
        let pObjList = JSON.parse(pObj.goodsList);
        for (let i = 0; i < pObjList.length; i++) {
          this.goodsList.splice(i, 0, pObjList[i]);
        }
        this.from = pObj.from;
        this.orderType = pObj.orderType;
        this.grouponBuyType = pObj.grouponBuyType;
        this.grouponId = pObj.grouponId;
        this.getPre();
      } else {
        this.a_go("/shop/index");
      }

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
    props: {},
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
      addId(id){
        this.addressId = id;
      },
      GoOrderSubmission(){
        let datas = {
          goods_list: this.goodsList,
          from: this.from,
          address_id: this.addressId,
          coupons_id: this.couponId,
          remark: this.remark,
          dispatch_type: 'express',
          order_type: this.orderType,
          buy_type: this.grouponBuyType,
          groupon_id: this.grouponId
        }
        this.a_post("/addons/shopro/order/createOrder", datas, res => {
          console.log("address", res.data.code);
          if (res.data.code) {
            this.a_go("/shop/OrderSubmission", {id:res.data.data.id});
          }
        });
      },
      // async pullArea() {
      //   this.a_post("/addons/shopro/address/area", {}, res => {
      //     console.log("area", res);
      //   });
      // },
      async getPre() {
        let datas = {
          address_id: this.addressId,
          buy_type: this.grouponBuyType,
          coupons_id: this.couponId,
          dispatch_type: 'express',
          from: this.from,
          goods_list: this.goodsList,
          groupon_id: this.grouponId,
          order_type: this.orderType,
        };

        let deet = {
          address_id: 0,
          buy_type: "alone",
          coupons_id: 0,
          dispatch_type: "express",
          from: "goods",
          goods_list: [{goods_id: 3, goods_num: 1, sku_price_id: 21, goods_price: "178.00"}],
          groupon_id: 0,
          order_type: "goods",
        }
        console.log(datas, deet);
        this.a_post("/addons/shopro/order/pre", datas, res => {
          console.log("/addons/shopro/order/pre", res);
          if (res.data.code == 1) {
            this.orderPreList = [];
            this.orderPre = res.data.data;
            this.orderPre.goods_number = 0;
            for (let i = 0; i < res.data.data.new_goods_list.length; i++) {
              this.orderPreList.splice(i, 0, res.data.data.new_goods_list[i]);
              this.orderPre.goods_number += parseInt(res.data.data.new_goods_list[i].goods_num);
            }
          }
        });
      }
    },
    /**
     * 一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 ()，遍历 watch 对象的每一个属性。
     * */
    watch: {},
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
    components: {
      addressList
    },
  }
</script>

<style scoped lang="scss">
  .settlement {
    /*padding: 40px 0 60px 0;*/
    padding: 40px 0 0 0;
    max-width: 1226px;
    margin: 40px auto;
    background-color: #ffffff;

    .detail {
      position: relative;

      .address {
        position: relative;
        padding: 0 24px;

        .address-header {
          margin: 0 0 20px;

          .header-title {
            color: #333;
            font-size: 18px;
            line-height: 20px;
          }
        }
      }

    }

    .row-list {
      padding: 5px 0;
      border-bottom: 1px solid #e0e0e0;

      .good-item {
        position: relative;
        padding: 10px 0;

        .item-desc {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 30px;
          color: #424242;

          img {
            width: 30px;
            height: 30px;
          }

          .good-price {
            width: 150px;
            text-align: center;
          }

          .good-total {
            width: 190px;
            text-align: center;
            color: #ff6701;
          }
        }

        .good-img {
          width: 30px;
          height: 30px;
          margin: 0 10px 0 0;
        }

        .good-name {
          width: 650px;
        }

      }
    }

    .section {
      position: relative;
      padding: 0 24px;

      .section-options {
        padding: 25px 0;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .desc {
          width: 150px;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          .title {
            color: #333;
            font-size: 18px;
            line-height: 38px;
          }
        }

        .options-desc {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;

          .options-list {
            width: 960px;

            .options-item {
              display: inline-block;
              height: 38px;
              line-height: 38px;
              margin-right: 14px;
              border: 1px solid #fff;
              color: $shopColor;
            }
          }
        }
      }
    }

    .seRowWar {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      .left {
      }

      .right {
        .ul {
          .li {
            line-height: 2;
            text-align: right;

            .name {
              width: 126px;
              white-space: nowrap;
              color: #757575;
            }

            .valur {
              display: inline-block;
              vertical-align: middle;
              min-width: 64px;
              color: $shopColor;

              em {
                font-style: normal;
                font-size: 30px;
                line-height: 1;
              }
            }
          }
        }
      }
    }

    .detail-section {
      padding: 20px 48px;
      border-top: 2px solid #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .handle-action {
        .operating-button {
          .btn {
            display: inline-block;
            width: 158px;
            height: 38px;
            padding: 0;
            margin: 0;
            border: 1px solid #b0b0b0;
            font-size: 14px;
            line-height: 38px;
            text-align: center;
            color: #b0b0b0;
            cursor: pointer;
            -webkit-transition: all .4s;
            transition: all .4s;
          }

          .btn-primary {
            background: $shopColor;
            border-color: $shopColor;
            color: #fff;
          }

          .btn-return {
            float: left;
            margin-right: 30px;
            vertical-align: top;
          }
        }
      }
    }
  }
</style>
