<template>
  <header :class="{ login: isLogin, 'no-login': !isLogin }">
    <template v-if="!isLogin">
      <h1 class="bigh1">Let's share</h1>
      <p class="bigp">精品博客汇聚</p>
      <div class="btns">
        <el-button>立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>
    <template v-if="isLogin">
      <h1 class="smah1">Let's share</h1>
      <i class="edit el-icon-edit"></i>
      <img
        class="avatar"
        src="http://cn.gravatar.com/avatar/1?s=128&d=identicon"
        alt=""
      />
    </template>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-login {
  padding: 0 12% 30px 12%;
  background: green;
  display: grid;
  justify-items: center;
}

.bigh1 {
  color: #fff;
  font-size: 40px;
  margin: 20px 0 0 0;
  text-transform: uppercase;
}

.bigp {
  margin: 15px 0 0 0;
  color: #fff;
}

.btns {
  margin-top: 20px;
}

button {
  margin: 20px 5px 0;
}

.login {
  display: flex;
  align-items: center;
  background: green;
}

.smah1 {
  margin: 0;
  margin-left: 10px;
  padding: 0;
  color: #fff;
  font-size: 40px;
  text-transform: uppercase;
  flex: 1;
}

.edit {
  color: #fff;
  font-size: 30px;
}

.avatar {
  width: 40px;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-left: 15px;
  margin-right: 15px;
}
</style>