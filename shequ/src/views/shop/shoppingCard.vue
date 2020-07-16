<!--购物车-->
<template>
  <div class="shoppingCard">
    <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          label="全选"
          width="40">
      </el-table-column>
      <el-table-column
          width="100"
          label="图片">
        <template slot-scope="scope">
          <img class="img" :src="scope.row.sku_price.image" alt="">
        </template>
      </el-table-column>
      <el-table-column label="商品名称"
                       width="500">
        <template slot-scope="scope">
          <p class="pTitle">
            {{ scope.row.goods.title }} <span class="span">{{ scope.row.sku_price.goods_sku_text }}</span>
          </p>
        </template>
      </el-table-column>
      <el-table-column
          prop="sku_price.price"
          label="单价"
      >
      </el-table-column>
      <el-table-column
          prop="address"
          label="数量"
          width="220"
          show-overflow-tooltip>
        <template slot-scope="scope">
          <el-input-number size="medium" @change="inNumber(scope.row.goods_num,scope)" :min="1"
                           :max="scope.row.sku_price.stock" v-model="scope.row.goods_num"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
          prop="good_money"
          label="小计"
          align="center"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="address"
          label="操作"
          width="50"
          show-overflow-tooltip>
        <template>
          <el-button type="text"><i class="el-icon-delete"></i></el-button>
        </template>

      </el-table-column>
    </el-table>
    <div class="cart_war">
      <div class="row">
        <div class="left">
          <span class="cart-total">共 <i >8</i> 件商品，已选择 <i >8</i>件</span>
        </div>
        <span class="right">
          合计：
          <em>144.39</em>
          元
          <a @click="goSettlement" class="a btn">
            去结算
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shoppingCard",
    data() {
      return {
        list: [],
        tableData: [
          {
            "id": 1,
            "user_id": 1,
            "goods_id": 3,
            "goods_num": 2,
            "sku_price_id": 20,
            "goods": {
              "id": 3,
              "type": "normal",
              "title": "极简全棉纯棉床上用品四件套现代简约北欧男床单3三件套床笠被套4",
              "subtitle": "100%纯棉面料 真133*72高密斜纹喷气款 佳品",
              "weigh": 3,
              "category_ids": "19",
              "image": "http://smart.zhuwenyong.xyz/uploads/20200429/4228275afdf8468d80e5d4e5a803175a.jpg",
              "images": [
                "http://smart.zhuwenyong.xyz/uploads/20200429/e0c4d78a0a611e189d44318fce454f8c.jpg",
                "http://smart.zhuwenyong.xyz/uploads/20200429/672628251b41648845fa7e13bbf7adba.jpg",
                "http://smart.zhuwenyong.xyz/uploads/20200429/2e3b4c74d3a74531db1955c8933f371c.jpg"
              ],
              "params": [
                {
                  "title": "品牌: ",
                  "content": "恩兴"
                },
                {
                  "title": "棉种类: ",
                  "content": "棉"
                },
                {
                  "title": "货号: ",
                  "content": "sjt02281054"
                }
              ],
              "content": "<p><img src=\"http://shopro-1253949872.image.myqcloud.com/uploads/20200429/b716634323a2fd73c363daa680c1c1a9.jpg\" alt=\"\" /><img src=\"http://shopro-1253949872.image.myqcloud.com/uploads/20200429/7860eb7ad5d960e5fceeeb2a90ce12c1.jpg\" alt=\"\" /><img src=\"http://shopro-1253949872.image.myqcloud.com/uploads/20200429/ad33bd4aef3f8561d42e0274fc6859b0.jpg\" alt=\"\" /></p>",
              "price": "158",
              "original_price": "236.00",
              "likes": 0,
              "views": 376,
              "sales": 4,
              "show_sales": 0,
              "service_ids": "2,4,1",
              "dispatch_type": "express",
              "dispatch_ids": "3",
              "deletetime": null
            },
            "sku_price": {
              "id": 20,
              "goods_sku_ids": "16,18",
              "goods_id": 3,
              "weigh": 0,
              "image": "http://shopro-1253949872.image.myqcloud.com/uploads/20200429/cb8a30459240899831a9b65778e3c9cd.jpg",
              "stock": 10,
              "sales": 0,
              "sn": "000007",
              "weight": 100000,
              "price": "158.00",
              "goods_sku_text": "L卡昂,1.8M床",
              "status": "up",
              "goods_sku_id_arr": [
                "16",
                "18"
              ]
            }
          }
        ],
        multipleSelection: []
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
      this.getCart();
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
      /*去结算*/
      goSettlement(){
        this.a_go("/shop/settlement");
      },
      /**/
      inNumber(currentValue, scope) {
        console.log(currentValue, scope)
        this.tableData[scope.$index].good_money = this.mmath(this.tableData[scope.$index].goods_num, this.tableData[scope.$index].sku_price.price);
      },
      /* 计算价格*/
      mmath(a, b) {
        return (parseFloat(a) * 100 / 100 * parseFloat(b) * 100 / 100).toFixed(2)
      },
      async getCart() {
        this.a_post("http://smart.zhuwenyong.xyz/addons/shopro/cart", {}, res => {
          console.log("detail", res.data.data);
          this.tableData = [];
          this.list = [];
          for (let i = 0; i < res.data.data.length; i++) {
            res.data.data[i].good_money = this.mmath(res.data.data[i].goods_num, res.data.data[i].sku_price.price);
            this.list.splice(i, 0, res.data.data[i]);
            this.tableData.splice(i, 0, res.data.data[i]);
          }
          console.log(this.tableData);
        });
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection)
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
    components: {},
  }
</script>

<style scoped lang="scss">
  .shoppingCard {
    max-width: 1226px;
    margin: 20px auto;

    .img {
      width: 80px;
      height: 80px;
    }

    .span {
      display: inline-block;
      margin-left: 10px;
      background-color: #f1f1f1;
      padding: 0 3px;
    }

    .cart_war {
      margin-top: 20px;
      height: 50px;
      text-align: right;
      background-color: #fff;
      -webkit-transition: background .3s ease, top .3s ease;
      transition: background .3s ease, top .3s ease;
      box-shadow: 0 -3px 6px rgba(0,0,0,.1);
      position: sticky;
      bottom: 0;
      z-index: 9999;
      .row{
        position: relative;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        .left{
          .cart-total{
            margin-left: 16px;
            padding-left: 16px;
            border-left: 1px solid #eee;
            color: #757575;
            i{
              color: $shopColor;
            }
          }
        }
        .right{
          padding-left: 13px;
          color: $shopColor;
          text-align: center;
          display: flex;
          align-items: center;
          em{
            font-style: normal;
            font-size: 30px;
            vertical-align: unset;
          }
          .a.btn{
            display: inline-block;
            padding: 0;
            text-align: center;
            cursor: pointer;
            -webkit-transition: all .4s;
            transition: all .4s;
            background: $shopColor;
            border-color: $shopColor;
            color: #fff;
            width: 200px;
            height: 48px;
            line-height: 48px;
            font-size: 18px;
            margin-left: 50px;
            vertical-align: top;
          }
        }
      }
    }
  }
</style>
