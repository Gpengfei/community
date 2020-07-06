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
          ]
        },
        {
          path: '/shop/index',
          name:"Index",
          title:"商城首页",
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
    },
    {
      path: '/login',
      component: ()=>import('@views/Login.vue')
    },
    {
      path: '/register',
      component: ()=>import('@views/Register.vue')
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
