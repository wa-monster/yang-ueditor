# 测试用，不要下载     yangueditor



```
把ueditor拿到vue上用的一个组件
```

## install
```
npm install yang-ueditor-vue --save
```

### use
```
下载UEditor jsp版本 或者用我提供的 https://github.com/wa-monster/yang-ueditor 的public目录下，放到对应项目的public下

import '../public/UEditor/ueditor.config.js'
import '../public/UEditor/ueditor.all.js'
import '../public/UEditor/lang/zh-cn/zh-cn.js'
import '../public/UEditor/ueditor.parse.min.js'

import yangUEditorVue from 'yang-ueditor-vue'



Vue.use(yangUEditorVue)

<yang-editor
  ref="ue"
  :default-msg="description"
  :config="config"
  id="uEditor"></yang-editor>

  default-msg ：储存编辑器里面的文字
  config ：ueditor的配置
  id ：渲染必须的id

```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
