<template>
  <div v-scroll="request" :pauseScrollTrigger="pauseScrollTrigger">
    <div style="height: 60px;"></div>
    <a  class="more" @click="clickOn" v-if="flag">查看更多精选内容</a>

    <div class="moreLine" style="text-align: center" v-if="!flag">
      <div class="kong" style="display: inline-block;">
        <div class="diamond"></div>
        <span>往期精选</span>
      </div>
    </div>
<!--开始瀑布流-->
    <!--<div class="ting moreone" v-for="item in data"  v-if="!flag">-->
      <!--<div class="tinglist moreonelist" >-->
        <!--<a href="#">-->
          <!--<img :src="item.cover">-->
        <!--</a>-->
        <!--<div class="tingbottom moreonebottom" style="width:100%;">-->
          <!--<h3 style="text-overflow:ellipsis;height: 35px;">{{item.title}}</h3>-->
          <!--<span style="display: block;">By / {{item.detail.userinfo.uname}}</span>-->
          <!--<ul style="font-size: 14px;width:100%;">-->
            <!--<li>{{(item.view / 1000).toFixed(1) }}  k次阅读</li>-->
            <!--<li>评论:{{item.comments}}</li>-->
            <!--<li>喜欢:{{item.islike}}</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->


      <div class="pb" v-for="item in waterarr"  v-if="!flag">
        <div class="tu"><img :src="item.cover"></div>
        <p class="p"><a href="">{{item.title}}</a></p>
        <hr class="h">
        <span class="wenzi">{{item.summary}}<a href="#">VIEW ALL</a><img src="../assets/img/green.png"></span>
        <div class="information">
          <span class="read">阅读 </span><span class="data">{{(item.detail.views / 1000).toFixed(1)}}  k次阅读  |  评论:{{item.comments}} |  喜欢:{{item.islike}}</span>
        </div>
        <div class="user"><img :src="item.detail.userinfo.icon"><a href="">{{item.detail.userinfo.uname}}</a>

          <div class="heart"></div>
        </div>
      </div>





    <div style="height: 60px;"></div>
    <a href="#" id="up"></a>
  </div>

</template>
<script>
  import Vue from 'vue'
  import  VueResource from 'vue-resource'

  var dateformat = require('dateformat');
  var md5 = require('md5');
  var base64 = require('Base64');

  Vue.use(VueResource);

  //1.获取当前时间
  var time = new Date();
  var h=time.getHours();
  console.log(h);
  //2.根据当前时间进行格式化  yyyymmddHHMMss
  var timestamp = dateformat(time.getTime(), 'yyyymmddHHMMss');
  //3.将字符串0+''+timestamp转成md5  并变成全大写
  var sig = md5('0' + '' + timestamp).toUpperCase();
  //4.获得授权
  //通过base64压缩字符串
  var Authorization = base64.btoa('' + ':' + timestamp);
  //通过base64还原缩字符串
  // var originString=base64.atob(Authorization)

  var day = dateformat(time.getTime(), 'yyyy-mm-dd');


  Vue.config.productionTip = false;


  Vue.use(require('vue-scroll-loading'), {
    threshold: 10
  });



  export default{
    name: 'my-more',
    props:['data'],
    http:{},
    data: function () {
      return {
        flag: true,
        pageNum:1,
        waterarr:[],
        pauseScrollTrigger:true,
        options: {
          params: {
            sig: sig,
            time: time,
            mode: 'day'
          },
          headers: {
            Authorization: Authorization
          }
        }
      }
    },
    methods: {
      clickOn: function () {
        this.flag = !this.flag;
        this.pauseScrollTrigger=false;
        //waterfall
        this.$http.get('/api/version5.0/headline/recent.php?pageSize=10&page=1', this.options).then(function success(res) {
          this.waterarr = res.body.data;
        }, function error(res) {
          console.error('错误');
        });
      },
      request:function () {
        this.pageNum++;
        this.$http.get('/api/version5.0/headline/recent.php?pageSize=10&page='+this.pageNum, this.options).then(function success(res) {
          var oldwaterarr=this.waterarr;
          var newwaterarr = res.body.data;
          this.waterarr=oldwaterarr.concat(newwaterarr);

        }, function error(res) {
          console.error('错误');
        });
      }
    }
  }
</script>
<style>
  .moreone{
    display: inline-block;
    width: 220px;
    margin: 10px;
    overflow: hidden;
  }
  .moreonelist{
    width:100% !important;
  }
  .moreLine {
    background-image: url(../assets/img/line-bg.png);
    background-size: 100% 1%;
    background-position-y: 50%;
    background-repeat: no-repeat;
  }
  #up {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-image: url(../assets/img/bw.png);
    background-size: 100% 100%;
    position: fixed;
    opacity: 0.2;
    top: 70%;
    right: 5%;
    z-index: 1000;
  }

  #up:hover {
    opacity: 1;
    background-image: url(../assets/img/back-topH.png);
  }

  .more {
    display: block;
    width: 185px;
    height: 45px;
    border-radius: 45px;
    padding: 3px;
    border: 1px solid #57ad68;
    line-height: 45px;
    text-align: center;
    margin: 0 auto;
    color: white;
    background-color: #57ad68;
    background-clip: content-box;
    opacity: 0.8;
    font-size: 16px;
  }

  .more:hover {
    opacity: 1;
    color: white;
  }




  .pb{
    width:240px;
    height:auto;
    margin: 5px;
    display: inline-block;
  }
  .tu img{
    width: 100%;
  }
  .p{
    color: #333;
    font-size: 24px;
    padding-left: 10px;
  }
  .p a:hover{
    color:#78bc85;
  }
  .h{
    width: 50px;
    margin-left: 20px;
    margin-top: 20px;
  }

  .wenzi{
    display: block;
    width: 95%;
    height:auto;
    margin-top:5px;
    padding-left: 8px;
    /*border:1px solid red;*/
  }
  .wenzi a{
    padding-left: 8px;
    color:#78bc85;
  }
  .wenzi img{
    width: 8px;
    height:10px;
    margin-left: 8px;
  }

  .information{
    width:95%;
    height:20px;
    padding-top: 10px;
    /*border:1px solid greenyellow;*/
  }
  .read{
    display: block;
    width: 38px;
    height:19px;
    border-radius: 8px;
    border:1px solid rgba(204,204,204,0.5);
    font-size: 12px;
    color: #333;
    /*margin-left: 15px;*/
    /*margin-top: 20px;*/
    text-align: center;
    float: left;

  }
  .read:hover{
    border:1px solid greenyellow;
  }
  .data{
    font-size: 12px;
    /*float: right;*/
    margin-top: 22px;
    /*margin-right: 20px;*/
    color: #ccc;
  }

  .user{
    width: 95%;
    height:48px;
  }
  .user img{
    width: 32px;
    height:32px;
    border-radius: 32px;
    margin-top: 8px;
    margin-left: 10px;
    float: left;
  }

  .user a{
    padding-left: 15px;
    padding-top: 16px;
    font-size: 12px;
    float: left;
  }

  .heart{
    float: right;
    margin-top: 15px;
    width: 30px;
    height:22px;
    /*border:1px solid red;*/
  }
  .heart{
    background-image: url("../assets/kongxin.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .heart:hover{
    background-image: url("../assets/shixin.png");
  }
</style>
