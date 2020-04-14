<template >
  <div>
    <h1>燕子学习之路</h1>
    <router-link to="/index/tagindex/tagone">
      <el-button type="primary">UI</el-button>
    </router-link>
    <el-divider direction="vertical"></el-divider>
    <router-link to="/index/tagindex/tagtwo">
      <el-button type="primary">two</el-button>
    </router-link>
    <el-divider direction="vertical"></el-divider>
      <router-link to="/index/tagindex/tagthree">
        <el-button type="primary">Tagthree</el-button>
      </router-link>
    <el-divider direction="vertical"></el-divider>
      <router-link to="/index/tagindex/tagfour">
        <el-button type="primary">tagfour</el-button>
      </router-link>
    <el-divider direction="vertical"></el-divider>
      <router-link to="/index/tagindex/tagfive">
        <el-button type="primary">tagfive</el-button>
      </router-link>
    <div style="margin-top:50px">
    </div>
    <router-view></router-view>
  </div>
</template>

