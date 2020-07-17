<template>
  <div class="fromList2">
    <div class="box">
      <div class="top-hd">
        <h2 class="title">{{lisfromDetial.name}}</h2>
        <!--        <div class="more">-->
        <!--          <ul class="ul">-->
        <!--            <li class="li select">热门</li>-->
        <!--            <li class="li">电视影音</li>-->
        <!--          </ul>-->
        <!--        </div>-->
      </div>
      <div class="box-bd clearfix">
        <div class="row">
          <!--          <div class="left">-->
          <!--            <div class="imgWar" @click="a_go('/shop/index/detial')">-->
          <!--              <img class="img"-->
          <!--                   src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90"-->
          <!--                   alt="">-->
          <!--            </div>-->
          <!--            <div class="imgWar" @click="a_go('/shop/index/detial')">-->
          <!--              <img class="img"-->
          <!--                   src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90"-->
          <!--                   alt="">-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="right">
            <ul class="ul">
              <li class="li" @click="a_go('/shop/index/detial',{id:arr.id})"
                  v-for="(arr,index) in lisfromDetial.goodsList.data"
                  :key="index">
                <img class="img"
                     :src="arr.image"
                     alt="">
                <p class="title">
                  {{arr.title}}
                </p>
                <p class="desc">{{arr.subtitle}}</p>
                <p class="price">
                  <span class="num">{{arr.price}}</span>
                  <span class="">元</span>
                  <span class="">起</span>
                  <del class="del">
                    <span class="num">
                      {{arr.original_price}}
                    </span>
                    元
                  </del>
                </p>
              </li>
              <!--              <li class="liLast">-->
              <!--                <div class="div" @click="a_go('/shop/index/detial')">-->
              <!--                  <img class="img"-->
              <!--                       src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90"-->
              <!--                       alt="">-->
              <!--                  <h3 class="h3">-->
              <!--                    小米小爱触屏音箱-->
              <!--                  </h3>-->
              <!--                  <p class="price"><span class="num">199</span>元</p>-->
              <!--                </div>-->
              <!--                <div class="div" @click="a_go('/shop/index/detial')">-->
              <!--                  <img class="img"-->
              <!--                       src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90"-->
              <!--                       alt="">-->
              <!--                  <div class="more">-->
              <!--                    浏览更多-->
              <!--                    <small class="small">热门</small>-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </li>-->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "fromList2",
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
    props: {
      lisfromDetial: {
        type: Object,
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
  .fromList2 {
    margin-bottom: 8px;

    .box {
      .top-hd {
        position: relative;
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
          position: absolute;
          top: 0;
          right: 0;

          .ul {
            margin: 0;
            padding: 16px 0 0;
            list-style-type: none;
            font-size: 16px;

            .li {
              display: inline-block;
              padding: 0;
              color: #424242;
              border-bottom: 2px solid #f5f5f5;
              border-bottom: 2px solid rgba(0, 0, 0, 0);
              transition: border .3s;
              cursor: pointer;
              margin: 0 0 0 30px;

              &.select {
                color: $shopColor;
                border-bottom: 2px solid $shopColor;
              }

              &:hover {
                color: $shopColor;
                border-bottom: 2px solid $shopColor;
              }
            }
          }

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
          -webkit-transition: all .2s linear;
          transition: all .2s linear;
          cursor: pointer;

          .imgWar {
            display: block;
            margin-bottom: 14px;

            &:hover {
              z-index: 2;
              -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
              box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
              -webkit-transform: translate3d(0, -2px, 0);
              transform: translate3d(0, -2px, 0);
            }

            .img {
              width: 234px;
              height: 300px;
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

              .title, .desc {
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin: 0 10px 2px;
              }

              .title {
                font-size: 14px;
                font-weight: 400;
                color: #333;

              }

              .desc {
                margin: 0 10px 10px;
                height: 18px;
                font-size: 12px;
                color: #b0b0b0;
              }

              .price {
                margin: 0 10px 10px;
                text-align: center;
                color: $shopColor;

                .del {
                  margin-left: .5em;
                  color: #b0b0b0;
                }
              }
            }

            .liLast {
              position: relative;
              z-index: 1;
              -webkit-transition: all .2s linear;
              transition: all .2s linear;
              cursor: pointer;

              .div {
                background-color: #ffffff;
                position: relative;
                z-index: 1;
                width: 234px;
                margin-left: 14px;
                margin-bottom: 14px;
                -webkit-transition: all .2s linear;
                transition: all .2s linear;
                height: 93px;
                padding-top: 50px;

                &:hover {
                  z-index: 2;
                  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                  box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
                  -webkit-transform: translate3d(0, -2px, 0);
                  transform: translate3d(0, -2px, 0);
                }

                .h3 {
                  color: #333;
                  margin: -10px 110px 5px 30px;
                  font-size: 14px;
                  font-weight: 400;
                }

                .price {
                  margin: 0 110px 0 30px;
                  font-size: 12px;
                  color: $shopColor;

                  .num {
                    font-size: 14px;
                  }
                }

                .img {
                  position: absolute;
                  right: 20px;
                  top: 32px;
                  width: 80px;
                  height: 80px;
                }

                .more {
                  display: block;
                  margin: 0 110px 0 30px;
                  font-size: 18px;
                  color: #333;

                  .ul {
                    margin: 0;
                    padding: 16px 0 0;
                    list-style-type: none;
                    font-size: 16px;

                    .li {
                      display: inline-block;
                      padding: 0;
                      margin: 0 15px;
                      color: #424242;
                      border-bottom: 2px solid #f5f5f5;
                      border-bottom: 2px solid rgba(0, 0, 0, 0);
                      -webkit-transition: border .3s;
                      transition: border .3s;
                      cursor: pointer;

                      &.cs {
                        color: $shopColor;
                        border-bottom: 2px solid $shopColor;
                      }
                    }
                  }

                  .small {
                    display: block;
                    font-size: 12px;
                    color: #757575;
                  }
                }
              }
            }
          }

        }
      }
    }

    .li:hover {
      z-index: 2;
      -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
      box-shadow: 0 15px 30px rgba(0, 0, 0, .1);
      -webkit-transform: translate3d(0, -2px, 0);
      transform: translate3d(0, -2px, 0);
    }
  }
</style>
