<template>
    <extend-tmpl :tmpl='searchLeft.tmplStr' :extend-data='searchLeft.extendData' ref="extendTmpl"></extend-tmpl>
</template>

<script>
import ExtendTmpl from './common/IRMExtendTmpl.vue';
export default {
  name: "index",
  data() {
    return {
        searchLeft:{
            tmplStr:'<div id="cesiumContainer"></div>',
            extendData:{
                run(){
                    var viewer = new Cesium.Viewer('cesiumContainer');
                }
            }
        }
    };
  },
  mounted() {
      Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZjkwMGRhMC0zNmFlLTRiMGItYTFlMy02YTFhYzUyNDY1ZWYiLCJpZCI6MTQ3MDksInNjb3BlcyI6WyJhc2wiLCJhc3IiLCJhc3ciLCJnYyJdLCJpYXQiOjE1ODE5MDg2Nzl9.9oHr4pHyzYxCCQSwMPJNzvwgqLcPpQ8InfiCo4WfYmM';
      this.$refs.extendTmpl.run();
  },
  methods: {
   
  },
  components: {
      ExtendTmpl,
  }
};
</script>

<style lang="css" scoped>

</style>