<template>
  <div>
    <h1>quill-editor</h1>
    <quill-editor
      class="editor"
      v-model="content"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
    ></quill-editor>
    <el-button type="primary" @click="getContent()">内容</el-button>
    <p>{{this.content}}</p>
    <div style="height:200px;">
      <div class="ql-editor" v-html="content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: '',
      //编辑栏文字提示
      toolbarTips: [
        { Choice: '.ql-bold', title: '加粗' },
        { Choice: '.ql-italic', title: '倾斜' },
        { Choice: '.ql-underline', title: '下划线' },
        { Choice: '.ql-header', title: '段落格式' },
        { Choice: '.ql-strike', title: '删除线' },
        { Choice: '.ql-blockquote', title: '块引用' },
        { Choice: '.ql-code-block', title: '插入代码段' },
        { Choice: '.ql-size', title: '字体大小' },
        { Choice: '.ql-list[value="ordered"]', title: '编号列表' },
        { Choice: '.ql-list[value="bullet"]', title: '项目列表' },
        { Choice: '.ql-header[value="1"]', title: 'h1' },
        { Choice: '.ql-header[value="2"]', title: 'h2' },
        { Choice: '.ql-align', title: '对齐方式' },
        { Choice: '.ql-color', title: '字体颜色' },
        { Choice: '.ql-background', title: '背景颜色' },
        { Choice: '.ql-formats', title: '英文样式' }, //未提示
        { Choice: '.ql-image', title: '图像' },
        { Choice: '.ql-video', title: '视频' },
        { Choice: '.ql-link', title: '添加链接' },
        { Choice: '.ql-formula', title: '插入公式' },
        { Choice: '.ql-clean', title: '清除格式' },
        { Choice: ".ql-script[value='sub']", title: '下标' },
        { Choice: ".ql-script[value='super']", title: '上标' },
        { Choice: '.ql-direction ql-active', title: '光标方向' },

        { Choice: '.ql-indent[value="-1"]', title: '向左缩进' },
        { Choice: '.ql-indent[value="+1"]', title: '向右缩进' },
        { Choice: '.ql-header .ql-picker-label', title: '标题大小' },
        {
          Choice: '.ql-header .ql-picker-item[data-value="1"]',
          title: '标题一'
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="2"]',
          title: '标题二'
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="3"]',
          title: '标题三'
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="4"]',
          title: '标题四'
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="5"]',
          title: '标题五'
        },
        {
          Choice: '.ql-header .ql-picker-item[data-value="6"]',
          title: '标题六'
        },
        { Choice: '.ql-header .ql-picker-item:last-child', title: '标准' },
        {
          Choice: '.ql-size .ql-picker-item[data-value="small"]',
          title: '小号'
        },
        {
          Choice: '.ql-size .ql-picker-item[data-value="large"]',
          title: '大号'
        },
        {
          Choice: '.ql-size .ql-picker-item[data-value="huge"]',
          title: '超大号'
        },
        { Choice: '.ql-size .ql-picker-item:nth-child(2)', title: '标准' },
        { Choice: '.ql-align .ql-picker-item:first-child', title: '居左对齐' },
        {
          Choice: '.ql-align .ql-picker-item[data-value="center"]',
          title: '居中对齐'
        },
        {
          Choice: '.ql-align .ql-picker-item[data-value="right"]',
          title: '居右对齐'
        },
        {
          Choice: '.ql-align .ql-picker-item[data-value="justify"]',
          title: '两端对齐'
        }
      ]
    }
  },
  mounted() {
    //循环加类名 把内容框中的提示信息给去掉了
    document.getElementsByClassName('ql-editor')[0].dataset.placeholder =
      '请编辑内容'
    console.log(
      'mounted -> document.getElementsByClassName(ql-editor)',
      document.getElementsByClassName('ql-editor')
    )
    // 加提示
    for (let item of this.toolbarTips) {
      let tip = document.querySelector('.quill-editor ' + item.Choice)
      if (!tip) continue
      tip.setAttribute('title', item.title)
    }
  },
  methods: {
    getContent() {
      console.log('content', this.content)
    },
    onEditorBlur($event) {
      console.log('$event', $event)
    },
    onEditorFocus($event) {
      console.log('$event', $event)
    }
  },
  components: {}
}
</script>

<style >
.ql-editor {
  min-height: 200px !important;
}
</style>

