<template>
  <div>
    <script 
      :id="id" 
      type="text/plain"></script>
  </div>
</template>
<script>


	export default {
		name: 'yang-editor',
		props: {
			defaultMsg: {
				type: String,
				default:''
			},
			config: {
				type: Object,
				default:()=>null
			},
			id: {
				type: String,
				default:''
			},
		},
		data () {
			return {
				editor: null
			}
		},
		mounted() {
			const _this = this;
			this.editor = UE.getEditor(this.id, this.config); // 初始化UE
			this.editor.addListener("ready", function () {
				_this.setUEContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
			console.log("上传这堆错误不用理会");
		},
		destroyed() {
			this.editor.destroy();
		},
		methods: {
			setUEContent(str){
				return this.editor.setContent(str)
			},
			getUEContent() { // 获取内容方法
				return this.editor.getContent()
			},
			getUEContentTxt() { // 获取纯文本内容方法
				return this.editor.getContentTxt()
			}
		},
	}
</script>

<style scoped>

</style>