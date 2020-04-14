
<template>
  <div class="layout" v-loading="fullscreenLoading">
    <Layout :style="{minWidth:'800px'}">
      <audio autoplay="autoplay"  loop="loop" preload="auto"
            	src="../../assets/music/周深 - 大鱼.mp3">
      		你的浏览器版本太低，不支持audio标签
	</audio>
      <Header>
        <Menu mode="horizontal" theme="dark">
          <router-link tag="div" to="/index/hone" class="layout-logo"></router-link>
          <div class="layout-nav">
            <MenuItem name="1" to="/index/tagindex">
              <Icon type="ios-navigate"></Icon>首页
            </MenuItem>
            <MenuItem name="2" to="/index/testtwo">
              <Icon type="ios-keypad"></Icon>Tag
            </MenuItem>
            <MenuItem name="3" to="/index/mythree">
              <Icon type="ios-analytics"></Icon>Tag2
            </MenuItem>

            <MenuItem name="4">
              <div @click="login()">
                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <span style=" vertical-align: middle; margin-left:5px">{{username}}</span>
              </div>
              <!-- <el-button icon="el-icon-full-screen" circle @click="handleFullScreen"></el-button> -->
            </MenuItem>
            <MenuItem name="5">
              <el-button icon="el-icon-full-screen" circle @click="handleFullScreen"></el-button>
            </MenuItem>
          </div>
        </Menu>
      </Header>

      <Content :style="{padding: '20px 50px',minHeight:'100vh'}">
        <div :style="{height: '100%',background:' #fff',padding: '20px 50px '}">
          <router-view></router-view>
          <!-- 二级路由 -->
        </div>
      </Content>

      <Footer class="layout-footer-center">
        <!--  -->
        <div class="divone divfoot">
          <div class="div-title">昊祺</div>A passionate frontend developer <br>按照自己的喜好去做，得不到别人的赞赏也没关系
        </div>

        <div class="divtwo divfoot">
          <div class="div-title">在这里到我</div>

          <ul class="adiv">
            <li>
              <a href='https://weibo.com/575500730' target="_blank" class="weibo"></a>
            </li>
            <li>
              
              <a href="javascript:;" class="dy"></a>
            </li>
            <li>
              <a href="javascript:;" class="wechat"></a>
            </li>
            <li>
              <a href="javascript:;" class="qq"></a>
            </li>
          </ul>
        </div>

        <div class="divthree divfoot">
          <div class="div-title">联系我们</div>
           如果您有优秀的文章希望和大家分享或其它业务需求，请您联系我们<br>
          QQ:571892532 <br>
          Email:liguiqiang626@163.com
        </div>

        <div class="divfour divfoot">
          <div class="div-title">友情链接</div>
        <a href="https://cn.vuejs.org/" target="_blank" class="link">Vue官网</a>
        <a href="http://sevnpeople.com;"  target="_blank" class="link">斯文人</a>
        <!-- <a href="https://cn.vuejs.org/" target="_blank" class="link">Vue官网</a> -->
        </div>
        <!--  -->
      </Footer>
      <div class="divFooter">Copyright © {{ year }} 昊祺个人 版权所有</div>
    </Layout>
  </div>
</template>
<script>
import "iview/dist/styles/iview.css";
import { getUserInfo, setUserInfo } from "utils/auth";
import {
  Avatar,
  Layout,
  Content,
  Header,
  Icon,
  Sider,
  Menu,
  MenuItem,
  Submenu,
  MenuGroup,
  BreadcrumbItem,
  Breadcrumb,
  Card
} from "iview";
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      username: getUserInfo() || "昊祺",
      isCollapsed: false,
      fullscreenLoading: false,
      fullscreen: false // 是否全屏
    };
  },
  created() {
    console.log("路由", this.$router.currentRoute.path);
  },
  methods: {
    handleFullScreen() {
      let element = document.documentElement;
      // 判断是否已经是全屏
      // 如果是全屏，退出
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        console.log("已还原！");
      } else {
        // 否则，进入全屏
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
        console.log("已全屏！");
      }
      // 改变当前全屏状态
      this.fullscreen = !this.fullscreen;
    },
    login() {
      this.$confirm("此操作将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
          }, 2000);

          this.$message({
            type: "success",
            message: "退出成功,正在跳转中"
          });
          this.setCookie("admin_info", "", -1);
        })
        .catch(() => {
          console.log("取消");
        });
    },
    //删除cookies
    setCookie(key, value, t) {
      const _this = this;
      var oDate = new Date();
      oDate.setDate(oDate.getDate() + t);
      document.cookie = key + "=" + value + "; expires=" + oDate.toDateString();
      setTimeout(() => {
        _this.$router.push("/login");
      }, 1000);
    }
  },
  components: {
    Avatar,
    MenuGroup,
    BreadcrumbItem,
    Breadcrumb,
    Card,
    Layout,
    Content,
    Header,
    Sider,
    Menu,
    MenuItem,
    Submenu,
    Icon
  }
};
</script>

<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 317px;
  height: 37px;
  background: no-repeat url("../../assets/img/login-login.png") -19px -29px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 470px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  /* text-align: center; */
  width: 100%;
  min-height: 166px;
  background: #48525e;
  color: #e6e6e6;
  padding: 30px 15px;
  z-index: 999999;
  display: flex;
  justify-content: space-around;
}
.div-title {
  font-size: 18px;
  color: #0097a7;
  font-weight: 700;
  margin-bottom: 10px;
}
.divfoot {
  width: 20%;
}
/* .adiv {
  display: flex;
  flex-wrap: wrap;
} */
.adiv li {
  float: left;
  display: inline;
  list-style: none;
  margin: 0 15px 5px 0;
  text-indent: -9999px;
  opacity: 0.3;
}
.adiv a {
  display: block;
  width: 28px;
  height: 28px;
}
.adiv .weibo {
  background: no-repeat url("../../assets/img/weibo.png");
  transition: all 1s;
}
.adiv .weibo:hover {
  background: no-repeat url("../../assets/img/weibo.png") 0 -38px;
}
.adiv .wechat {
  background: no-repeat url("../../assets/img/wechat.png");
  transition: all 1s;
}
.adiv .wechat:hover {
  background: no-repeat url("../../assets/img/wechat.png") 0 -38px;
}
.adiv .qq {
  background: no-repeat url("../../assets/img/qq.png");
  transition: all 1s;
}
.adiv .qq:hover {
  background: no-repeat url("../../assets/img/qq.png") 0 -38px;
}
.adiv .dy {
  background: no-repeat url("../../assets/img/dy.png");
  transition: all 1s;
}
.adiv .dy:hover {
  background: no-repeat url("../../assets/img/dy.png") 0 -38px;
}
.divFooter {
  width: 100%;
  min-height: 52px;
  background: #3b434c;
  color: #e6e6e6;
  padding: 16px;
  font-size: 12px;
  text-align: center;
}
.ivu-layout {
  height: 100%;
}
.el-avatar {
  vertical-align: middle;
}
.link{
      font-size: 12px;
    color: #e6e6e6;
    text-decoration: none;
    display: inline-block;
    margin-right: 5%;
    width: 40%;
    cursor: pointer;
}
.link:hover{
    color: #0097a7;
  
}
.ivu-layout-header {
  padding: 0;
  height: 60px;
  line-height: 60px;
}
.ivu-menu .ivu-menu-dark .ivu-menu-horizontal {
  height: 100%;
}
</style>
