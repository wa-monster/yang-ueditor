// packages/textarea/index.js

// 导入组件，组件必须声明 name
import Editor from './Editor.vue'

// 为组件添加 install 方法，用于按需引入
Editor.install = function (Vue) {
  Vue.component(Editor.name, Editor)
}

export default Editor

















