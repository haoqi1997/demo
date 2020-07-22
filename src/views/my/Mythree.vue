<template >
  <div class="relax">
    <div class="relaxbox">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgSrc" :key="item">
          <img :src="require(item)" />
        </el-carousel-item>
      </el-carousel>
      <h1>猜猜我是谁。</h1>
    </div>
    <div class="relaxbox">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in imgSrc" :key="item">
          <img :src="require(item)" />
        </el-carousel-item>
      </el-carousel>
      <h1>测试</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgSrc: [
        '../../assets/img/1.jpg',
        '../../assets/img/2.jpg',
        '../../assets/img/3.jpg',
        '../../assets/img/4.jpg'
      ]
    }
  }
}
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.relax {
  display: flex;
  justify-content: space-around;
}
.relaxbox {
  width: 31%;
}
img {
  height: 100%;
  width: 100%;
}
</style>
