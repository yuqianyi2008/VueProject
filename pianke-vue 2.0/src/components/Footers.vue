<template>
  <div id="footers">
    <div class="footers">
      <div class="col-md-1">123</div>
      <div class="col-md-4">
        <ul>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">友情链接</a></li>
          <li><a href="#">片刻帮助</a></li>
          <li><a href="#">意见反馈</a></li>
          <li><a href="#">成长记忆</a></li>
        </ul>
        <p>All rights reserved © 2016 pianke.me /蜀ICP备12022689号-1</p>
      </div>
      <div class="col-md-4">
        <ul class="popularize">
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li>
            <div id="dd">
              <div style="position: relative;">
                <div id="jian"></div>
                <div id="dd2"></div>
              </div>
            </div>
          </li>
          <li><a href="#"></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      name:'footers'
  }
</script>
<style>
  .footers{
    height:120px;
    width:80%;
    margin: 0 auto;
    text-align: center;
    line-height: 120px;
    background-color: black;
  }
  .footers>div{
    display: inline-block;
    height:50px;
    margin: 35px 0;
  }
  .footers>div:nth-child(1){
    width:65px;
    height:50px;
    background-image: url(../assets/img/pk1.png);
    background-size: 100% 100%;
    position: relative;
    top: 10px;
    color: black;
  }
  .footers>div:nth-child(2){
    width: 40%;
    height:50px;
  }
  .footers>div:nth-child(2) ul,.footers>div:nth-child(2) p{
    height:30px;
    color: #666;
    line-height: 30px;
    font-size: 12px;
  }
  .footers>div:nth-child(2) ul li{
    display: inline-block;
  }
  .footers>div:nth-child(2) ul li a{
    color: #666;
  }
  .footers>div:nth-child(3) ul li{
    display: inline-block;
  }
  .popularize{
    height: 60px;
  }
  .popularize li{
    cursor:pointer;
    width: 50px;
    margin: 0 7px;
    height:50px;
    border-radius: 50px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .popularize li:nth-child(1){
    background-image: url(../assets/img/phone.png);
  }
  .popularize li:nth-child(2){
    background-image: url(../assets/img/xinlang.png);
  }
  .popularize li:nth-child(3){
    position: relative;
    background-image: url(../assets/img/wechat.png);
  }
  .popularize li:nth-child(4){
    width: 150px;
    margin: 0 5px;
    height:50px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(../assets/img/what.png);
  }
  #dd{
    width: 200px;
    height: 200px;
    position: absolute;
    top:-220px;
    left: -80px;
    display: none;
  }
  .popularize li:nth-child(3):hover #dd{
    display: block;
  }
  .popularize li:nth-child(1):hover{
    background-image: url(../assets/img/cc.png);
  }
  .popularize li:nth-child(3):hover{
    background-image: url(../assets/img/wechat1.png);
  }
  .popularize li:nth-child(2):hover{
    background-image: url(../assets/img/cinlang1.png);
  }
  #jian{
    width: 25px;
    height: 25px;
    background-color: white;
    transform: rotate(45deg);
    position: absolute;
    bottom: -210px;
    left: 90px;
    z-index:5;
  }
  #dd2{
    width: 200px;
    height: 200px;
    background-image: url(../assets/img/code.png);
    background-size: 100% 100%;
    position: absolute;
    z-index:99;
    top:-3px;
  }
</style>
