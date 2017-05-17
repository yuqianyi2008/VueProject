<template>
  <div >
  <div class="vision" v-for="item in visiondata">
    <img v-for="img in item.detail.images" :src="img">
    <div class="pictureBottom">
      <h3>{{item.title}}</h3>
      <span>{{item.summary}}</span><a href="#">VIEW ALL <img src="../assets/img/green.png"></a>
      <div class="pictureFooter">
        <span>By / {{item.detail.userinfo.uname}}</span>
        <ul>
          <li>{{(item.detail.views/1000).toFixed(1)}} k次阅读</li>
          <li>评论:{{item.detail.comments}}</li>
          <li>喜欢:{{item.detail.likes}}</li>
        </ul>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
  export default {
    name: 'my-vision',
    props:['visiondata']
  }
</script>
<style>

  .vision{
    display: inline-block;
    height:390px;
    width: 45%;
    margin: 0 2%;
    border: 1px solid #f2f2f2;
    padding: 0;
  }
  .vision img:nth-child(1){
    height:60%;
    width:50%;
    float: left;
  }
  .vision img:nth-child(2),.vision img:nth-child(3){
    height:30%;
    width:50%;
    float: left;
  }
  .pictureBottom{
    height:30%;
    padding: 10px;
    position: relative;
    clear: both;
  }
  .pictureBottom span{
    color: #999;
  }
  .pictureBottom a{
    color:#57ad68;
  }
  .pictureBottom a img{
    height:16px !important;
    width:16px !important;
    float: none !important;
  }
  .pictureBottom ul li {
    display: inline-block;
    color:#999;
    padding: 0 5px;
    border-right: 1px solid lightgrey;
  }
  .pictureBottom ul li:nth-child(3){
    border-right: 1px solid white;
  }
  .pictureFooter{
    padding: 5px;
    border-top: 1px solid lightgrey;
    position: absolute;
    bottom: 0;
  }
  .pictureBottom ul{
    display: inline-block;
    margin-top: 30px;
  }
  .pictureFooter span{
    color: black;
  }
</style>
