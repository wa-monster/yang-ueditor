import Vue from 'vue'
import Editor from './Editor.vue'

const yangEditor = {}

yangEditor.install = function(Vue, options){
  Vue.prototype.$msg = 'yangEditor'
  Vue.prototype.$yangEditor = function(arr){
    console.log('12312312')
  }

}

Vue.component(Editor.name, Editor)

export default yangEditor

















