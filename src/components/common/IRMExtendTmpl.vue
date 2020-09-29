<script>
import Vue from 'vue'
export default {
  name: "IRMExtendTmpl",
  props: {
   
    tmpl: {
      type: String,
      required:true,
    },
     extendData: {
      type: Object,
    }
  },
  data(){
     return {
     }
  },
  components:{
  },
  methods: {
    //    初始化绑定扩展数据，将extendData中属性，方法绑定到this上
     initExtendData(extendData){
       if(!extendData)return;
      for (var key in extendData) {
        if (extendData.hasOwnProperty(key)) {
            this[key]=extendData[key]
        }
      }
    }
  },
  render: function(h, context) {
      if (!this.tmpl) 
        return;

      try {
         //  初始化绑定扩展数据，
        this.initExtendData(this.extendData);
        var res = Vue.compile(this.tmpl);
        return res.render.call(this);
      } catch (error) {
       alert(error.message)
      }
  }
};
</script>