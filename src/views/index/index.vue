<template>
  <div>
  <img src="../../assets/logo.png">
  <div>{{msg}}</div>
    <div @click="test" style="padding:10px;color:red;cursor: pointer;border:1px solid green;">点我</div>
  </div>
</template>

<script>
import http from "../../utils/http"

export default {
  name: "index",
  data () {
    return {
      swUrl:"/spkability/spk",
      msg: 'Welcome to Your Vue.js App',
      testData:[
        {"name":"小南","head":"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png","text":"您好!我是小南"},
        {"name":"小南","head":"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png","text":"您好!我是小南"},
      ]
    }
  },
  created () {

  },
  methods:{
    test(){
      let url = "/spkability/spk"
      let params = {
        "jsonrpc": "2.0", "method": "deal_request", "id": 1, "params": { "cmd": "ssb", "spk_type": 2, "uid":"xxxxxxxx", "team":"xxxxxxxx", "type":1 }
      }
     var res =  http.post(url,params).then(res=>{
       console.log(res)
     }).catch(err=>{
       console.log(err)
     });

    }
  }
}
</script>

<style scoped>

</style>
