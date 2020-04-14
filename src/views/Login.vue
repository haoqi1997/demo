<template>
  <div class="login-container">
    <vue-particles
      color="#81C9B9"
      :particleOpacity="0.7"
      :particlesNumber="160"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    ></vue-particles>
    <div class="login-main">
      <el-collapse-transition>
        <div v-show="show">
          <div class="login-header"></div>
          <div class="login-content">
            <ul>
              <li>
                <div>
                  <i class="el-icon-user-solid"></i>
                  <input type="text" v-model="userName" @input="handleInput(1)" autocomplete="off" />
                </div>
                <p>{{ message1 }}</p>
              </li>
              <li>
                <div>
                  <i class="el-icon-unlock"></i>
                  <input
                    type="text"
                    v-model="password"
                    @input="handleInput(2)"
                    autocomplete="off"
                    onfocus="this.type='password'"
                  />
                </div>
                <p>{{ message2 }}</p>
              </li>
              <li>
                <div class="login-valid-input">
                  <div>
                    <i class="el-icon-postcard"></i>
                    <input
                      type="text"
                      autocomplete="off"
                      v-model="validateCode"
                      @input="handleInput(3)"
                    />
                  </div>
                  <img :src="code" alt class="login-valid-img" @click="codeImg()" />
                </div>
                <p>{{ message3 }}</p>
              </li>

              <li>
                <button class="login-btn" @click="commit">登录</button>
              </li>
            </ul>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <!-- <el-form ref="form" :model="form" :rules="rules" style="width:400px;margin:50px auto;">
        <el-form-item prop="userName">
            <el-input v-model="form.userName" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width:100%;" @click="commit">登录</el-button>
        </el-form-item>
    </el-form>-->

    <p class="login-copyright">Copyright © {{ year }} 昊祺个人 版权所有</p>
  </div>
</template>

<script>
// import utils from 'utils/auth'
import utils from "utils";
import { setUserInfo } from "utils/auth";

export default {
  data() {
    return {
      year: new Date().getFullYear(),
      userName: null,
      password: null,
      validateCode: null,
      message1: null,
      message2: null,
      message3: null,
      code: null,
      show: true,
      fullscreenLoading: false
    };
  },
  created() {
    this.codeImg();
    // console.log(apiPreBase)
    let that = this;
    document.onkeypress = function(e) {
      var keycode = document.all ? event.keyCode : e.which;
      if (keycode == 13) {
        that.commit(); // 登录方法名
        return false;
      }
    };
  },
  methods: {
    commit() {
      // alert(4545)
      this.validate(valid => {
        if (valid) {
          this.show = !this.show;
          this.openFullScreen2();
          setTimeout(() => {
            if ((this.userName && this.password) == "admin") {
              setUserInfo(this.userName);
              this.$router.push("/");
            } else {
              this.show = !this.show;
              this.$message.error("账号 或 密码 错误,请重新输入");
            }
          }, 2000);
        }
      });
    },
    //服务遮罩
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: "Loading...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
    // 表单验证
    validate(callback) {
      if (utils.isEmpty(this.userName)) {
        this.message1 = "请输入账号";
      }
      if (utils.isEmpty(this.password)) {
        this.message2 = "请输入密码";
      }
      if (utils.isEmpty(this.validateCode)) {
        this.message3 = "请输入验证码";
      }
      //
      if (
        !utils.isEmpty(this.userName) &&
        !utils.isEmpty(this.password) &&
        !utils.isEmpty(this.validateCode)
      ) {
        callback(true);
      } else {
        callback(false);
      }
    },
    // 表单输入
    handleInput(num) {
      this[`message${num}`] = null;
    },
    codeImg() {
      console.log('apiPreBase')
      this.code = `http://47.99.131.184:8118/apiBase/user/loginValidateCode?t=1585790514653`;
      // this.code = `${apiPreBase}user/loginValidateCode?t=${new Date().getTime()}`
    }
  }
};
</script>
<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>

