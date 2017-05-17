<template>
  <div id="headers">
    <a href="#" id="headLogo"></a>
    <ul id="nav">
      <li v-for="item in msg"><a href="#">{{item}}</a></li>
    </ul>
    <div>
      <div id="login1">
        <img src="../assets/img/pec.png">
      </div>
      <a href="#" id="login2">登录/注册</a>
    </div>
  </div>
</template>

<script>
  import a,{nav} from '../shujv.js';
  export default{
    name:'headers',
    data:function () {
      return {
          msg:nav
      }
    }
  }

</script>

<style>
  #headers{
    width: 80%;
    height: 90px;
    line-height: 90px;
    margin:0 auto;
  }
  #headLogo{
    display: inline-block;
    height: 90px;
    width: 80px;
    margin-right: 10%;
    margin-left: 3%;
    background-image: url(../assets/img/pk.png);
    background-repeat: no-repeat;
    background-position-y: 25px;
    float: left;
  }
  #nav{
    height: 90px;
    width:45%;
    display: inline-block;
    float: left;
  }
  #nav li,#nav li a{
    display: inline-block;
    height:100%;
    line-height: 90px;
    font-size: 16px;
    color: black;
    text-align: center;
  }
  #nav li{
    width:18%;
    transition: all 0.5s;
  }
  #nav li:nth-child(1){
    background-color: #fbfbfb;
    border-bottom: 3px solid black;
  }
  #nav li:hover{
    background-color: #fbfbfb;
  }
  #login1,#login2{
    display: inline-block;
  }
  #login1{
    margin: 20px 20px 0 8%;
    width: 45px;
    height: 45px;
    border: 1px solid #57ad68;
    border-radius: 45px;
    text-align: center;
    background-image: radial-gradient(circle at center center,#57ad68 0px, #57ad68 20px, white 20px,white 25px);
  }
  #login1 img{
    width: 30px;
    height: 30px;
    position: relative;
    top:-15px;
  }
  #login1:hover{
    background-image: radial-gradient(circle at center center,#57ad68 0px, #57ad68 19px, white 19px);
  }
  #login2{
    display: inline-block;
    width: 126px;
    height: 45px;
    border: 1px solid #57ad68;
    border-radius: 45px;
    position: relative;
    top:-23px;
    color: #57ad68;
    text-align: center;
    line-height: 45px;
    transition: 0.5s;
  }
  #login2:hover{
    background-color: #57ad68;
    color: white;
  }
</style>
