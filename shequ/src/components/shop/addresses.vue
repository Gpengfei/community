<template>
  <div class="addresses">
    <div class="con">
      <div class="address-selectd">
        <span class="gray"> {{ provinceDataLabel.label || "选择省份/自治区" }}</span>
        <span class="gray" v-if="provinceDataLabel.label"> {{ cityDataLabel.label || " 选择城市/地区" }}</span>
        <span class="gray" v-if="cityDataLabel.label"> {{ areaDataLabel.label || "选择区县" }}</span>
      </div>
      <ul class="address_list ul" v-if="!provinceDataLabel.label">
        <li class="li" v-for="(arr, i) in provinceData" :key="i" @click="provinceDataClick(arr,i)">
          {{ arr.label }}
        </li>
      </ul>
      <ul class="address_list ul" v-if="provinceDataLabel.label&&!cityDataLabel.label">
        <li class="li" v-for="(arr, j) in cityData[provinceDataLabel.index]" :key="j"
            @click="cityDataClick(arr,j)">
          {{ arr.label }}
        </li>
      </ul>
      <ul class="address_list ul" v-if="cityDataLabel.label&&!areaDataLabel.label">
        <li class="li" v-for="(arr, z) in areaData[provinceDataLabel.index][cityDataLabel.index]" :key="z"
            @click="areaDataClick(arr,z)">
          {{ arr.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "addresses",
    data() {
      return {
        provinceData: [],
        cityData: [],
        areaData: [],
        provinceDataLabel: {},
        cityDataLabel: {},
        areaDataLabel: {}
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
      this.pullArea();
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
      provinceDataClick(arr, index) {
        arr.index = index
        this.provinceDataLabel = arr;
      },
      cityDataClick(arr, index) {
        arr.index = index
        this.cityDataLabel = arr;
      },
      areaDataClick(arr, index) {
        arr.index = index;
        this.areaDataLabel = arr;
        this.$emit("changeAreaGo",{
          provinceDataLabel: this.provinceDataLabel,
          cityDataLabel: this.cityDataLabel,
          areaDataLabel: this.areaDataLabel
        });
      },
      async pullArea() {
        this.a_post("/addons/shopro/address/area", {}, res => {
          console.log("area", res.data.code);
          if (res.data.code) {
            let provinceData = res.data.data.provinceData;
            this.provinceData = []
            for (let i = 0; i < provinceData.length; i++) {
              this.provinceData.splice(i, 0, provinceData[i]);
            }
            let cityData = res.data.data.cityData;
            this.cityData = [];
            for (let i = 0; i < cityData.length; i++) {
              this.cityData.splice(i, 0, cityData[i]);
            }
            let areaData = this.areaData = res.data.data.areaData;
            this.areaData = [];
            for (let i = 0; i < areaData.length; i++) {
              this.areaData.splice(i, 0, areaData[i]);
            }
          }
        });
      }
      ,
    },
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
    components: {}
    ,
  }
</script>

<style scoped lang="scss">
  .addresses {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    padding-top: 15px;
    border: 1px solid $shopColor;
    z-index: 3;

    .address-selectd {
      padding: 6px 0;
      border-bottom: 1px solid #e0e0e0;

      span {
        line-height: 30px;
        margin-right: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: $shopColor;
        cursor: pointer;
      }

      .gray {
        color: #757575;
      }
    }

    .con {
      margin: 0 20px;

      .address_list.ul {

        width: 100%;
        padding: 20px 0 14px;

        .li {
          display: inline-block;
          margin-right: 14px;
          line-height: 30px;
          margin-bottom: 6px;
          color: #333;
          cursor: pointer;

          &:hover {
            color: $shopColor;
          }
        }

      }
    }


  }
</style>
