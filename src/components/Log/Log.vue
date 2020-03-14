<template>
  <div class="log">
    <header>
      <i>
        <img src="http://localhost:8080/img/footer1.png" alt />
      </i>
      <p>{{t}}</p>
    </header>

    <div class="login">
      <div class="user">
        <input type="text" :placeholder="u" />
      </div>
      <div class="pssword">
        <input type="text" :placeholder="m" />
        <span v-show="isShow">获取验证码</span>
      </div>
      <div class="denglu">
        <span @click="btn">
          <a href="javescript:void(0)">{{l}}</a>
        </span>
      </div>
      <div class="login-log">
        <span @click="bbn">{{lefts}}</span>
        <span @click="btnright">{{rights}}</span>
      </div>
    </div>

    <div class="other">
      <div class="img">
        <div class="weChat">
          <img src=" http://localhost:8080/img/QQ.png" alt />
        </div>
        <div class="QQ">
          <img src=" http://localhost:8080/img/WeChat.png" alt />
        </div>
      </div>

      <div class="other-footer">
        <p>
          <img src="http://localhost:8080/img/01.png" alt />
          未注册游侠客账号的手机，登录时将同时注册，登录代表您已同意
          <a href="#">《服务协议》</a>和
          <a href="#">隐私政策</a>
        </p>
      </div>
    </div>

    <!-- <footer>
        体验游侠客微信小程序 <span> >> </span>
    </footer>-->
  </div>
</template>

<script>
let obj = {
  t: ["手机号注册/登录", "账号密码登录"],
  u: ["请输入手机号/邮箱", "请输入手机号"],
  m: ["请输入验证码", "请输入密码"],
  l: ["登录", "一键注册/登录"],
  left1: ["非大陆手机号登录", "手机号登录", "忘记密码"],
  right1: ["验证码登录", "账号密码登录"]
};
export default {
  data() {
    return {
      t: "手机号注册/登录",
      u: "请输入手机号",
      m: "请输入密码",
      l: "一键注册/登录",
      lefts: "非大陆手机号登录",
      rights: "账号密码登录",
      isShow: true
    };
  },
  methods: {
    btn() {
      alert("您以登录成功");
      this.$router.push('/');
    },
    bbn() {
      if (this.lefts == "非大陆手机号登录") {
        this.t = obj.t[1];
        this.u = obj.u[1];
        // this.m= obj.t[1];
        this.l = obj.l[0];
        this.lefts = obj.left1[2];
        this.rights = obj.right1[0];
        this.isShow = false;
      }
    },
    btnright() {
      if (this.rights == "验证码登录") {
        this.t = "手机号注册/登录";
        this.u = "请输入手机号 ";
        this.m = "请输入密码";
        this.l = "一键注册/登录";
        this.lefts = "非大陆手机号登录";
        this.rights = "账号密码登录";
        this.isShow = true;
        console.log(1)
      }
    }
  }
};
</script>

<style scoped>
.log {
  width: 100%;
  height: 100vh;
}
header {
  width: 8rem;
  height: 3.4rem;
  margin: 0.2rem auto;
  text-align: center;
}
header i {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.2rem;
  background-color: #ffd101;
}
header i img {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 1.5rem;
}
header p {
  font-weight: 800;
  color: #333;
  opacity: 1;
  font-size: 0.42rem;
}
.login {
  /* background-color: hotpink; */
  width: 100%;
}
.login .user,
.login .pssword {
  margin: 0.2rem auto;
  width: 8.6rem;
  padding: 0.3rem;
  border-radius: 0.2rem;
  background-color: hsla(0, 0%, 95%, 0.3);
  text-align: center;
}
.login input {
  box-sizing: border-box;
  font-family: 微软雅黑;
  padding-left: 0.2rem;
  width: 8.6rem;
  background-color: hsla(0, 0%, 95%, 0.3);
  line-height: 0.6rem;
  font-size: 0.42rem;
  outline: medium;
  cursor: pointer;
}
.login .user {
}
.login .pssword {
  position: relative;
}
.login .pssword span {
  position: absolute;
  font-size: 0.42rem;
  line-height: 0.6rem;
  color: #ecc927;
  right: 0.2rem;
  cursor: pointer;
}
.login .denglu {
  margin: 0 auto;
  text-align: center;
  width: 8.6rem;
  padding: 0.2rem 0;
  line-height: 0.4rem;
  font-size: 0.52rem;
  font-weight: 400;
  color: #aeaeae;
  background-color: hsla(0, 0%, 95%, 0.3);
}
.login .login-log {
  width: 8.4rem;
  margin: 0.2rem auto;
  color: #aeaeae;
  display: flex;
  font-size: 0.26rem;
  font-weight: 600;
  justify-content: space-between;
}

.log .other {
  height: 8rem;
  width: 8.4rem;
  margin: 0 auto;
  padding: 0.4rem;
  position: relative;
}
.other .img {
  margin-top: 5.5rem;
  display: flex;
  justify-content: space-evenly;
}
.other .weChat,
.QQ {
  width: 1.4rem;
  height: 1.4rem;
  background: #fbfbfb;
  border-radius: 50%;
  text-align: center;
  line-height: 2rem;
}
.weChat img,
.QQ img {
  width: 1rem;
  height: 1rem;
  display: inline-block;
  cursor: pointer;
}

.other-footer {
  height: 0.6rem;
  position: absolute;
  bottom: 0.2rem;
  line-height: 0.6rem;
}
.other-footer img {
  width: 0.3rem;
  height: 0.3rem;
  display: inline;
}
.other p {
  font-family: 微软雅黑;
  color: #aeaeae;
  font-size: 0.28rem;
}

footer {
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.08);
  color: #ecc927;
  font-size: 0.48rem;
  font-weight: 400;
}
footer span:first-child {
  color: #f4e9a9;
}
</style>