<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      offsetWid: '', //手机宽度
      offsetHei: '' //手机宽度
    }
  },
  created() {
    this
  },
  methods: {
    awai() {
      if (/(Android)/i.test(navigator.userAgent)) {
        // 判断是否为Android手机
        console.log('Android')
        this.offsetWid = screen.width
        this.offsetHei = screen.height
      } else if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        // 判断是否为苹果手机
        console.log('iOS')
        this.offsetWid = document.documentElement.clientWidth
        this.offsetHei = document.documentElement.clientHeight
      }
    }
  }
}
</script>
