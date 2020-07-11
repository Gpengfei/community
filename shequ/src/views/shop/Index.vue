<template>
  <div class="Index">
    <div class="cont">
      <!--轮播-->
      <swiperSe :list="indexList.home[1].content.list"/>
      <!--轮播end-->
      <!--形式1-->
      <fromList1/>
      <!--形式1 end-->
      <!--形式2-->
      <fromList2/>
      <!--形式3 end-->
    </div>
  </div>
</template>

<script>
  import swiperSe from "@components/shop/swiperSeTop"
  import fromList1 from "@components/shop/fromList1"
  import fromList2 from "@components/shop/fromList2"

  export default {
    name: "Index",
    data() {
      return {
        indexList: {
          "home": [
            {
              "id": 1149,
              "type": "search",
              "category": "home",
              "name": "搜索",
              "content": "搜索商品",
              "decorate_id": 4
            },
            {
              "id": 1150,
              "type": "banner",
              "category": "home",
              "name": "轮播图",
              "content": {
                "name": "",
                "style": 1,
                "list": [
                  {
                    "name": "",
                    "bgcolor": "",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/cadf6cacca55467f3b81933267dd65e2.png",
                    "path": "/pages/goods/list?id=17",
                    "path_name": "商城-商品列表-居家生活",
                    "path_type": 1
                  },
                  {
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/493f643b7873e8038323882e0dce9b25.png",
                    "path": "/pages/goods/list?id=39",
                    "path_type": 1,
                    "name": "",
                    "bgcolor": "",
                    "path_name": "商城-商品列表-厨房用品"
                  }
                ]
              },
              "decorate_id": 4
            },
            {
              "id": 1151,
              "type": "menu",
              "category": "home",
              "name": "菜单组",
              "content": {
                "name": "",
                "style": 4,
                "list": [
                  {
                    "name": "每日签到",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/29ea4acebbf99e7eaf6f85af2b6d79ae.png",
                    "path": "/pages/user/sign/index",
                    "path_name": "通用-签到中心",
                    "path_type": 1
                  },
                  {
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/b0344c148141b50d68db9722708ea49e.png",
                    "path": "/pages/activity/seckill/list",
                    "name": "限时秒杀",
                    "path_name": "活动-限时秒杀",
                    "path_type": 1
                  },
                  {
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/bfb8458d3535e3c91b7a166632812df3.png",
                    "path": "/pages/app/score/list",
                    "name": "积分商城",
                    "path_name": "应用-积分商城",
                    "path_type": 1
                  },
                  {
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/62ac09d2914d36c65b9b59d2147d809a.png",
                    "path": "/pages/activity/groupon/list",
                    "name": "超值拼团",
                    "path_name": "活动-今日必拼",
                    "path_type": 1
                  },
                  {
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/dbfcac89dc65a481a671f9ea71fa23b3.png",
                    "path": "/pages/goods/list?id=17",
                    "name": "海产馆",
                    "path_name": "商城-商品列表-居家生活",
                    "path_type": 1
                  },
                  {
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/9de11fafe5859136b63be19d5e783ba1.png",
                    "path": "/pages/goods/list?id=39",
                    "name": "水果馆",
                    "path_name": "商城-商品列表-厨房用品",
                    "path_type": 1
                  },
                  {
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/e62c07e5ae905c47c6f0ebdd68296e11.png",
                    "path": "/pages/goods/list?id=22",
                    "name": "肉禽蛋品",
                    "path_name": "商城-商品列表-家居饰品",
                    "path_type": 1
                  },
                  {
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/1a85bfce0d706360d31df47bac24d5b0.png",
                    "path": "/pages/goods/list?id=6",
                    "name": "乳品冷饮",
                    "path_name": "商城-商品列表-数码家电",
                    "path_type": 1
                  }
                ]
              },
              "decorate_id": 4
            },
            {
              "id": 1152,
              "type": "coupons",
              "category": "home",
              "name": "优惠券",
              "content": {
                "ids": "1",
                "name": ""
              },
              "decorate_id": 4
            },
            {
              "id": 1153,
              "type": "groupon",
              "category": "home",
              "name": "拼团",
              "content": {
                "id": 12,
                "name": "",
                "groupon_name": "7.4拼团"
              },
              "decorate_id": 4
            },
            {
              "id": 1154,
              "type": "seckill",
              "category": "home",
              "name": "秒杀",
              "content": {
                "id": 11,
                "name": "限时秒杀",
                "seckill_name": "7.4秒杀"
              },
              "decorate_id": 4
            },
            {
              "id": 1155,
              "type": "live",
              "category": "home",
              "name": "小程序直播",
              "content": {
                "style": 1,
                "ids": "",
                "name": ""
              },
              "decorate_id": 4
            },
            {
              "id": 1156,
              "type": "adv",
              "category": "home",
              "name": "广告魔方",
              "content": {
                "list": [
                  {
                    "name": "",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/019f2c02697b47e6fd1e149cd1fa09cf.png",
                    "path": "/pages/index/index",
                    "path_name": "商城-首页",
                    "path_type": 1
                  }
                ],
                "name": "",
                "style": 1
              },
              "decorate_id": 4
            },
            {
              "id": 1157,
              "type": "title-block",
              "category": "home",
              "name": "标题栏",
              "content": {
                "name": "为你推荐",
                "color": "#000000",
                "image": "http://shopro.7wpp.com/imgs/title2.png"
              },
              "decorate_id": 4
            },
            {
              "id": 1158,
              "type": "goods-list",
              "category": "home",
              "name": "自定义商品",
              "content": {
                "ids": "6,5,4,3",
                "image": "https://shopro-1253949872.file.myqcloud.com",
                "name": ""
              },
              "decorate_id": 4
            }
          ],
          "user": [
            {
              "id": 1161,
              "type": "user",
              "category": "user",
              "name": "用户卡片",
              "content": {
                "name": "用户卡片",
                "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/d545655aa27c1f6f5b156c9c84188479.jpg",
                "style": 2,
                "color": "#eeeeee"
              },
              "decorate_id": 4
            },
            {
              "id": 1162,
              "type": "order-card",
              "category": "user",
              "name": "订单卡片",
              "content": [],
              "decorate_id": 4
            },
            {
              "id": 1163,
              "type": "wallet-card",
              "category": "user",
              "name": "资产卡片",
              "content": [],
              "decorate_id": 4
            },
            {
              "id": 1164,
              "type": "nav-list",
              "category": "user",
              "name": "列表导航",
              "content": {
                "name": "",
                "list": [
                  {
                    "name": "邀请好友",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200709/f01e60fd4c947c968ebf40748ca586dd.png",
                    "path": "/pages/public/poster/index",
                    "path_name": "通用-海报",
                    "path_type": 1
                  },
                  {
                    "name": "常见问题",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/555ef0a1151e83014610b288e53827c2.png",
                    "path": "/pages/public/faq",
                    "path_name": "通用-常见问题",
                    "path_type": 1
                  },
                  {
                    "name": "我的拼团",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/5d53a6e7f940c5ef925f63c1810c8429.png",
                    "path": "/pages/activity/groupon/my-groupon",
                    "path_name": "活动-我的拼团",
                    "path_type": 1
                  },
                  {
                    "name": "积分商城",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/ab05b484afd9e2a21977adc79d0c456e.png",
                    "path": "/pages/app/score/list",
                    "path_name": "应用-积分商城",
                    "path_type": 1
                  },
                  {
                    "name": "浏览足迹",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/46db4a0d958fe1a8897f288a569e239f.png",
                    "path": "/pages/user/log",
                    "path_name": "用户-浏览足迹",
                    "path_type": 1
                  },
                  {
                    "name": "系统设置",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/b523a9dade0e1948abb369295a8ee22e.png",
                    "path": "/pages/user/set",
                    "path_name": "通用-系统设置",
                    "path_type": 1
                  }
                ]
              },
              "decorate_id": 4
            }
          ],
          "tabbar": [
            {
              "id": 1160,
              "type": "tabbar",
              "category": "tabbar",
              "name": "底部导航",
              "content": {
                "style": 1,
                "color": "#000",
                "activeColor": "#35A404",
                "list": [
                  {
                    "name": "首页",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/7df5962ddf9a2dfb209ade429352580a.png",
                    "activeImage": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/1957748af0be2f2805189075ca1fec79.png",
                    "path": "/pages/index/index",
                    "path_name": "商城-首页",
                    "path_type": 1
                  },
                  {
                    "name": "分类",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/759b5203edc27ca5a3d3b03d151fae6e.png",
                    "activeImage": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/1734f0cde44bf7dded17ea4f1f6077ec.png",
                    "path": "/pages/index/category",
                    "path_name": "商城-分类",
                    "path_type": 1
                  },
                  {
                    "name": "购物车",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/672ec325a350b6a010e67028535e7c9d.png",
                    "activeImage": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/efd7a82b27ad7c54db54df528e5e9519.png",
                    "path": "/pages/index/cart",
                    "path_name": "商城-购物车",
                    "path_type": 1
                  },
                  {
                    "name": "我的",
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/374bbea7f51786423a96a5590b4326a2.png",
                    "activeImage": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/1b0e001cbdef01bc9ab1ba57da3fc7eb.png",
                    "path": "/pages/index/user",
                    "path_name": "用户-我的",
                    "path_type": 1
                  }
                ],
                "isshow": true
              },
              "decorate_id": 4
            }
          ],
          "popup": [
            {
              "id": 1159,
              "type": "popup",
              "category": "popup",
              "name": "弹窗提醒",
              "content": {
                "list": [
                  {
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/9136ecddcddf6607184fab689207e7e3.png",
                    "path": "/pages/app/coupon/list",
                    "path_name": "优惠券-优惠劵中心",
                    "page": [
                      "/pages/index/index"
                    ],
                    "page_name": [
                      "商城-首页"
                    ],
                    "path_type": 1,
                    "style": 1
                  }
                ]
              },
              "decorate_id": 4
            }
          ],
          "float-button": [
            {
              "id": 1165,
              "type": "float-button",
              "category": "float-button",
              "name": "悬浮按钮",
              "content": {
                "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/f6b9c9d20d21df541ac52e9548486e1a.png",
                "list": [
                  {
                    "name": "关注",
                    "style": 1,
                    "image": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/ff3fba3ef6a402aa770bde5a60e7f49f.png",
                    "btnimage": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/875dd6d2b1980dbccbec0895f757cdff.png",
                    "path": "",
                    "path_name": "",
                    "path_type": 1,
                    "page": [
                      "/pages/index/index",
                      "/pages/index/category",
                      "/pages/index/cart",
                      "/pages/index/user",
                      "/pages/goods/list",
                      "/pages/goods/detail/index",
                      "/pages/activity/groupon/list",
                      "/pages/activity/seckill/list",
                      "/pages/activity/groupon/my-groupon",
                      "/pages/app/coupon/list",
                      "/pages/app/coupon/detail",
                      "/pages/app/score/list",
                      "/pages/order/list",
                      "/pages/public/richtext",
                      "/pages/public/feedback",
                      "/pages/public/forgot",
                      "/pages/public/login",
                      "/pages/public/register",
                      "/pages/public/poster/index",
                      "/pages/public/faq",
                      "/pages/user/log",
                      "/pages/user/sign/index",
                      "/pages/user/address/list",
                      "/pages/user/set",
                      "/pages/user/edit-password",
                      "/pages/user/favorite",
                      "/pages/user/info",
                      "/pages/user/edit-phone",
                      "/pages/user/wallet/index",
                      "/pages/user/wallet/bind-bank",
                      "/pages/user/wallet/log",
                      "/pages/user/wallet/score-balance"
                    ],
                    "page_name": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                      "13",
                      "14",
                      "15",
                      "16",
                      "17",
                      "18",
                      "19",
                      "20",
                      "21",
                      "22",
                      "23",
                      "24",
                      "25",
                      "26",
                      "27",
                      "28",
                      "29",
                      "30",
                      "31",
                      "32"
                    ]
                  },
                  {
                    "name": "购物车",
                    "style": 2,
                    "image": "",
                    "btnimage": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/c72f2c4f452d72e4ad82f38c72911ce4.png",
                    "path": "/pages/index/cart",
                    "path_name": "商城-购物车",
                    "path_type": 1,
                    "page": [
                      "/pages/index/index",
                      "/pages/index/category",
                      "/pages/index/cart",
                      "/pages/index/user",
                      "/pages/goods/list",
                      "/pages/goods/detail/index",
                      "/pages/activity/groupon/list",
                      "/pages/activity/seckill/list",
                      "/pages/activity/groupon/my-groupon",
                      "/pages/app/coupon/list",
                      "/pages/app/coupon/detail",
                      "/pages/app/score/list",
                      "/pages/order/list",
                      "/pages/public/richtext",
                      "/pages/public/feedback",
                      "/pages/public/forgot",
                      "/pages/public/login",
                      "/pages/public/register",
                      "/pages/public/poster/index",
                      "/pages/public/faq",
                      "/pages/user/log",
                      "/pages/user/sign/index",
                      "/pages/user/address/list",
                      "/pages/user/set",
                      "/pages/user/edit-password",
                      "/pages/user/favorite",
                      "/pages/user/info",
                      "/pages/user/edit-phone",
                      "/pages/user/wallet/index",
                      "/pages/user/wallet/bind-bank",
                      "/pages/user/wallet/log",
                      "/pages/user/wallet/score-balance"
                    ],
                    "page_name": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                      "13",
                      "14",
                      "15",
                      "16",
                      "17",
                      "18",
                      "19",
                      "20",
                      "21",
                      "22",
                      "23",
                      "24",
                      "25",
                      "26",
                      "27",
                      "28",
                      "29",
                      "30",
                      "31",
                      "32"
                    ]
                  },
                  {
                    "name": "活动",
                    "style": 2,
                    "image": "",
                    "btnimage": "https://shopro-1253949872.file.myqcloud.com/uploads/20200704/8153f1d85f462b277d024baf812814a6.png",
                    "path": "/pages/activity/groupon/list",
                    "path_name": "活动-今日必拼",
                    "path_type": 1,
                    "page": [
                      "/pages/index/index",
                      "/pages/index/category",
                      "/pages/index/cart",
                      "/pages/index/user",
                      "/pages/goods/list",
                      "/pages/goods/detail/index",
                      "/pages/activity/groupon/list",
                      "/pages/activity/seckill/list",
                      "/pages/activity/groupon/my-groupon",
                      "/pages/app/coupon/list",
                      "/pages/app/coupon/detail",
                      "/pages/app/score/list",
                      "/pages/order/list",
                      "/pages/public/richtext",
                      "/pages/public/feedback",
                      "/pages/public/forgot",
                      "/pages/public/login",
                      "/pages/public/register",
                      "/pages/public/poster/index",
                      "/pages/public/faq",
                      "/pages/user/log",
                      "/pages/user/sign/index",
                      "/pages/user/address/list",
                      "/pages/user/set",
                      "/pages/user/edit-password",
                      "/pages/user/favorite",
                      "/pages/user/info",
                      "/pages/user/edit-phone",
                      "/pages/user/wallet/index",
                      "/pages/user/wallet/bind-bank",
                      "/pages/user/wallet/log",
                      "/pages/user/wallet/score-balance"
                    ],
                    "page_name": [
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                      "10",
                      "11",
                      "12",
                      "13",
                      "14",
                      "15",
                      "16",
                      "17",
                      "18",
                      "19",
                      "20",
                      "21",
                      "22",
                      "23",
                      "24",
                      "25",
                      "26",
                      "27",
                      "28",
                      "29",
                      "30",
                      "31",
                      "32"
                    ]
                  }
                ]
              },
              "decorate_id": 4
            }
          ]
        }
      }
    },
        /**
         * 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
         * */
        beforeCreate() {
        }
        ,
        /*
       * 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始， 属性目前不可见。
       * */
        created() {
          this.getInstall();
        }
        ,
        /**
         * 在挂载开始之前被调用：相关的 render 函数首次被调用。
         * */
        beforeMount() {
        }
        ,
        /**
         * el 被新创建的 vm. 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm. 也在文档内。
         * 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm. 替换掉 mounted
         * */
        mounted() {
        }
        ,
        /**
         * 数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
         * 该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。
         * */
        beforeUpdate() {
        }
        ,
        /**
         * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
         * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。
         * 注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm. 替换掉 updated
         * */
        updated() {
        }
        ,
        /**
         * 实例销毁之前调用。在这一步，实例仍然完全可用。
         * 该钩子在服务器端渲染期间不被调用。
         */
        beforeDestroy() {
        }
        ,
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
          getShopInit() {
            this.a_post("/addons/shopro/index/template", res => {
              console.log(res);
              this.getInstall();
            });
          }
          ,
          getInstall() {
            this.a_post("/addons/shopro/index/template", res => {
              console.log(res);
            });
          }
        }
        ,
        /**
         * 一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 ()，遍历 watch 对象的每一个属性。
         * */
        watch: {}
        ,
        /**
         * 包含 Vue 实例可用指令的哈希表。
         * */
        directives: {}
        ,
        /**
         * 包含 Vue 实例可用过滤器的哈希表。
         * */
        filters: {}
        ,
        /**
         * 包含 Vue 实例可用组件的哈希表。
         * */
        components: {
          swiperSe,
          fromList1,
          fromList2
        },
      }
</script>

<style scoped lang="scss">
  .Index {
    background: #f5f5f5;

    .cont {
      width: 1226px;
      max-width: 1226px;
      margin: 0 auto;
    }
  }
</style>
