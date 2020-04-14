<template>
  <div>
    <!-- <Breadcrumb :style="{margin: '20px 0'}">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: 'hone_index' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: 'testOne' }">测试1</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: 'testtwo' }">测试2</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: 'mythree' }">我的3</el-breadcrumb-item>
      </el-breadcrumb>
    </Breadcrumb> -->

    <h1>vuex状态改变</h1>
    <el-button type="primary" @click="add">+</el-button>
    <el-button type="danger" @click="subtract">-</el-button>
    <el-button type="info" @click="regress">这是清空</el-button>
    <!--  <el-button type="primary" @click="add">+++</el-button>
    <el-button type="info" @click="subtract">---</el-button>-->
    <el-button type="danger" @click="aa">这是回调</el-button>
    <br />
    <p :style="{color:'red'}">{{this.$store.state.count.num}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    //   console.log(this.$store.dispatch)
  },
  methods: {
    //数字加
    add() {
      //   console.log(this.$store.dispatch)
      this.$store.dispatch("addnum");
    },
    //   数字减
    subtract() {
      //   console.log(this.$store.dispatch)
      this.$store.dispatch("subtractnum");
    },
    //归0
    regress() {
      //   console.log(this.$store.dispatch)
      this.$store.dispatch("regressnum", "0");
    },
    call(a, callback) {
      console.log("a", a);
      if (a != 6) {
        callback();
      }
    },
    pack() {
      console.log("我是后的回调");
    },
    aa() {
      this.call(this.$store.state.count.num, this.pack);
    }
  }
};
</script>
<style >
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>