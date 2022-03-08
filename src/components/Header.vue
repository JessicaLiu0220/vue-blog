<template>
  <div class="wrapper">
    <h1>Let's share</h1>
    <p>精品博客汇聚</p>
    <div class="btns">
      <el-button>立即登录</el-button>
      <el-button>注册账号</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  border: 1px solid red;
  background: rgb(78, 163, 82);
  display: grid;
  justify-items: center;
}
h1 {
  color: aliceblue;
  margin-top: 20px;
}
.btns {
  margin: 30px 0px;
}
</style>
