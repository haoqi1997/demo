<template>
  <div>
    <h1>vue-editor</h1>
    <vue-editor
      class="editor"
      v-model="content"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
    ></vue-editor>
    <el-button type="primary" @click="getContent()">内容</el-button>
    <p>{{this.content}}</p>
    <div style="height:200px;">
      <div v-html="content"></div>
    </div>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";

export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    getContent() {
      console.log("content", this.content);
    },
    onEditorBlur($event) {
      console.log("$event", $event);
    },
    onEditorFocus($event) {
      console.log("$event", $event);
    }
  },
  components: { VueEditor }
};
</script>

<style lang="css">
@import "~vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";
</style>