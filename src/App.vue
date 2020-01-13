<template>
  <div id="app">
    <div>
      <yang-editor
        ref="ue"
        :default-msg="description"
        :config="config"
        :id="uEditor"></yang-editor>
    </div>
    
      <p>{{ description }}</p>
  </div>
</template>

<script>



export default {
  name: 'app',
  data:function () {
    return {
      description:'',
      uEditor:'uEditor',
      config:{
        toolbars:[['undo']],
				autoHeightEnabled: false,
				initialFrameHeight:200,
				initialFrameWidth: '99%',
				wordCount:true,
				maximumWords:1000,
				allHtmlEnabled:false,
				pasteplain:true,
				retainOnlyLabelPasted: true,
        enableAutoSave:false,
        initialStyle:'p{' +
						'font-family: Microsoft YaHei;' +
						'font-size: 14px;' +
					'};',
      }
    }
  },
  mounted(){
  }
}
</script>

<style>
  #app{
    height: 800px;
  }
</style>
