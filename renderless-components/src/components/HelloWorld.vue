<template>
  <div class="hello">
    <h3>1.函数式组件和普通组件的渲染速度</h3>
    <el-button size="mini" @click="initData('renderless')" style="margin-bottom:20px;">函数式组件</el-button>
    <el-button size="mini" @click="initData('common')" style="margin-bottom:20px;">普通组件</el-button>
    <div v-if="type==='renderless'">
      <renderlessList v-for="item in listData" :key="item.index" :value="item.text"></renderlessList>
    </div>
    <div v-if="type==='common'">
      <commonList v-for="item in listData" :key="item.index" :value="item.text"></commonList>
    </div>
  </div>
</template>

<script>
import renderlessList from "@/components/renderless/renderless-list.js";
import commonList from "@/components/common-list.js";
export default {
  name: "HelloWorld",
  components: { renderlessList, commonList },
  props: {
    msg: String,
  },
  data() {
    return {
      listData: [],
      value: "",
      startTime: 0,
      endTime: 0,
      type: "",
    };
  },
  beforeUpdate() {
    console.time();
  },
  updated() {
    console.timeEnd();
  },
  methods: {
    initData(type) {
      this.listData = Array.from({ length: 1000 }, (v, i) => {
        return { index: "type" + i, text: Math.random() };
      });
      // if (!this.isRenderLess) {
      //   this.listData = Object.freeze(this.listData);
      // }
      this.type = type;
    },
    init() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
