export default [
    {
      path: '/',
      component: ()=>import('@views/headerFooter/HeaderAndFooter.vue'),
      children:[
        {
          path: '/',
          component: ()=>import('@views/headerFooter/CommunityConvenience.vue'),
        },
        {
          path: '/newsLists',
          component: ()=>import('@views/headerFooter/NewsLists.vue'),
        },
        {
          path: '/shop',
          component: ()=>import('@views/headerFooter/Shop.vue'),
        },
        {
          path: '/productDetails',
          component: ()=>import('@views/headerFooter/ProductDetails.vue'),
        },
        {
          path: '/productDetails1',
          component: ()=>import('@views/headerFooter/ProductDetails1.vue'),
        },
        {
          path: '/mine',
          component: ()=>import('@views/mine/Mine.vue'),
          children:[
            {
              path: '/',
              component: ()=>import('@views/mine/NewsLists.vue'),
            },
            {
              path: '/dataAndName',
              component: ()=>import('@views/mine/DataAndName.vue'),
            },
            {
              path: '/vipPrivilege',
              component: ()=>import('@views/mine/VipPrivilege.vue'),
            },
            {
              path: '/coupons',
              component: ()=>import('@views/mine/Coupons.vue'),
            },
            {
              path: '/myOrder',
              component: ()=>import('@views/mine/MyOrder.vue'),
            },
            {
              path: '/healthRecords',
              component: ()=>import('@views/mine/HealthRecords.vue'),
            },
            {
              path: '/myService',
              component: ()=>import('@views/mine/MyService.vue'),
            },
          ]
        },
        {
          path: '/shop/index',
          name:"Index",
          title:"商城首页",
          component: ()=>import('@views/shop/Shop.vue'),
          children:[
            {
              path: '/',
              name:"Index",
              component: ()=>import('@views/shop/Index.vue')
            },
            {
              path: '/shop/index/detial',
              name:"Detial",
              component: ()=>import('@views/shop/ShopDetial.vue')
            },
            {
              path: '/shop/index/evaluate',
              name:"Detial",
              component: ()=>import('@views/shop/Evaluate.vue')
            },
            {
              path: '/shop/shoppingCard',
              name:"Detial",
              component: ()=>import('@views/shop/shoppingCard.vue')
            },
            {
              path: '/shop/settlement',
              name:"settlement",
              meta: {
                title: "商城结算页"
              },
              component: ()=>import('@views/shop/settlement.vue'),
            },
            {
              path: '/shop/OrderSubmission',
              name:"settlement",
              meta: {
                title: "等待付款"
              },
              component: ()=>import('@views/shop/OrderSubmission.vue'),
            },
            {
              path: '/shop/PaymentSuccessful',
              name:"PaymentSuccessful",
              meta: {
                title: "支付完成"
              },
              component: ()=>import('@views/shop/PaymentSuccessful.vue'),
            }
          ]
        },
        {
          path: '/release',
          component: ()=>import('@views/release/Release.vue'),
          children:[
            {
              path:'/',
              component:()=>import('@views/release/ReleaseHousingResources.vue')
            },
            {
              path:'/releaseService',
              component:()=>import('@views/release/ReleaseService.vue')
            },
            {
              path:'/releaseNotice',
              component:()=>import('@views/release/ReleaseNotice.vue')
            }
          ]
        },
      ]
    },
    {
      path: '/login',
      component: ()=>import('@views/Login.vue')
    },
    {
      path: '/register',
      component: ()=>import('@views/Register.vue')
    },
    {
      path: '/retrievePassword',
      component: ()=>import('@views/RetrievePassword.vue')
    },
    {
      path: '/mobilePhoneVerification',
      component: ()=>import('@views/MobilePhoneVerification.vue')
    },

/*    {
      path: '/shop/index',
      title:"商城",
      component: ()=>import('@views/shop/Shop.vue'),
      children:[
        {
          path: '/',
          name:"Index",
          component: ()=>import('@views/shop/Index.vue')
        },
        {
          path: '/',
          name:"Index",
          component: ()=>import('@views/shop/Index.vue')
        },
        {
          path: '/shop/index/detial',
          name:"Detial",
          component: ()=>import('@views/shop/ShopDetial.vue')
        },
      ]
    }*/
  ]
