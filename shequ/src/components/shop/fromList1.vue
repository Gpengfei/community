<template>
  <div class="fromList1">
    <div class="box">
      <div class="top-hd">
        <h2 class="title">手机</h2>
        <div class="more">
          <span class="a">
            查看全部<i class="iconfont iconfont-arrow-right-big"></i>
          </span>
        </div>
      </div>
      <div class="box-bd clearfix">
        <div class="row">
          <div class="left">
            <div class="imgWar"  @click="a_go('/shop/index/detial')">
              <img class="img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt="">
            </div>
          </div>
          <div class="right">
            <ul class="ul">
              <li class="li" @click="a_go('/shop/index/detial')">
                <img class="img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt="">
                <p class="title">
                  小米10 青春版 5G
                </p>
                <p class="desc">50倍潜望式变焦 / 轻薄5G手机</p>
                <p class="price">
                  <span class="num">2009</span>
                  <span class="">元</span>
                  <span class="">起</span>
                  <del class="del">
                    <span class="num">
                      333
                    </span>
                    元
                  </del>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fromList1",
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
  .fromList1 {
    margin-bottom: 8px;
    .box {
      .top-hd {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
          margin: 0;
          font-size: 22px;
          font-weight: 200;
          line-height: 58px;
          color: #333;
        }

        .more {
          .a {
            font-size: 16px;
            line-height: 58px;
            color: #424242;
            -webkit-transition: all .4s;
            transition: all .4s;
          }
        }
      }

      .row {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        .left {
          position: relative;
          z-index: 1;
          float: left;
          width: 234px;
          height: 614px;
          /*margin-left: 14px;*/
          margin-bottom: 14px;
          background: #fff;
          -webkit-transition: all .2s linear;
          transition: all .2s linear;
          cursor: pointer;
          .imgWar {
            display: block;
            width: 100%;
            height: 100%;

            .img {
              width: 234px;
              height: 614px;
            }
          }
        }

        .right {
          width: 100%;

          .ul {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-wrap: wrap;

            .li {
              height: 260px;
              padding: 20px 0;
              position: relative;
              z-index: 1;
              float: left;
              width: 234px;
              margin-left: 14px;
              margin-bottom: 14px;
              background: #fff;
              -webkit-transition: all .2s linear;
              transition: all .2s linear;
              cursor: pointer;
              .img {
                display: block;
                width: 160px;
                height: 160px;
                margin: 0 auto 18px auto;
              }
              .title, .desc{
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin: 0 10px 2px;
              }
              .title{
                font-size: 14px;
                font-weight: 400;
                color: #333;

              }
              .desc{
                margin: 0 10px 10px;
                height: 18px;
                font-size: 12px;
                color: #b0b0b0;
              }
              .price{
                margin: 0 10px 10px;
                text-align: center;
                color: $shopColor;
                .del{
                  margin-left: .5em;
                  color: #b0b0b0;
                }
              }
            }
          }

        }
      }
    }
  }
</style>
