<template>
  <div class="PaymentSuccessful">
    <div class="container pay-success-box clearfix">
      <div class="succ"><h2 class="title">支付成功</h2>
        <p class="price">
          <em>144.39</em>元
        </p>
        <a class="btn">查看订单详情</a>
        <p class="state">商城不会以任何理由要求您提供银行卡信息或支付额外费用<br>请谨防钓鱼链接或诈骗电话。
          <!--          <a target="_blank">了解详情&gt;</a>-->
        </p>
      </div>
      <div class="info">
        <ul class="ul">
          <li class="clearfix">
            <div class="label">订单编号：</div>
            <div class="content">
              5200716474403419
            </div>
          </li>
          <li class="clearfix">
            <div class="label">收货信息：</div>
            <div class="content">
              安厦 151****6690<br>
              内蒙古 呼和浩特市
              新城区
              迎新路街道
              内蒙古工行干校家属院别墅区2-2
              <p style="color: rgb(255, 103, 0); margin: 0px;">* 在“订单详情页”你可以确认收货地址或者更改收货地址</p></div>
          </li>
          <li class="clearfix">
            <div class="label">商品名称：</div>
            <div class="content">
              <div>小米水质TDS检测笔 白色
              </div>
              <div>小米巨能写 黑色 10支装
              </div>
              <div>小米中性笔 10支装 白色
              </div>
              <div>米家金属签字笔 金色
              </div>
              <div>米家金属签字笔专用笔芯 纯白色
              </div>
              <div>小米记事本 3本装（1黑1灰1蓝）
              </div>
            </div>
          </li>
          <li class="clearfix">
            <div class="label">发票信息：</div>
            <div class="content">
              电子普通发票 个人
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PaymentSuccessful",
    data() {
      return {};
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
    methods: {},
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
    components: {},
  }
</script>

<style scoped lang="scss">
  .PaymentSuccessful {
    position: relative;
    width: 1226px;
    margin: 38px auto;
    font-size: 14px;

    .pay-success-box {
      background-color: #8bc34a;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      .succ {
        width: 506px;
        height: 400px;
        text-align: center;

        .title {
          font-size: 48px;
          color: #fff;
          line-height: 1;
          margin-top: 70px;
          margin-bottom: 10px;
          font-weight: 400
        }

        .sub {
          margin: 0;
          color: #fff;
        }

        .price {
          margin: 20px 0 30px;
          color: #ff0;

          em {
            font-style: normal;
            font-size: 24px
          }
        }

        .state {
          font-size: 12px;
          color: #333;

          a {
            color: #ff0
          }
        }

        .btn {
          margin-bottom: 30px;
          border-color: #fff;
          background: none;
          color: #fff;
        }
      }

      li, ul {
        margin: 0;
        padding: 0
      }

      li {
        list-style: none
      }
      .info {
        width: 660px;
        min-height: 400px;
        padding-left: 60px;
        font-size: 12px;
        background-color: #fff;
        position: relative;
        ul {
          width: 480px;
          padding-top: 50px;
          padding-bottom: 50px;
          font-size: 14px;
        }
        li {
          line-height: 24px;
          margin-bottom: 8px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          .app-code {
            position: absolute;
            right: 40px;
            bottom: 25px;
            text-align: center;
            img {
              display: block;
              width: 86px;
              height: 86px;
              margin: 0 auto 10px
            }
          }
          .label {
            color: #b0b0b0;
            min-width: 72px;
          }
          .content {
            color: #757575;
            .beta {
              cursor: pointer;
              color: #b0b0b0
            }
          }
          a {
            color: #ff6700
          }
        }
      }
    }


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
  }
</style>
