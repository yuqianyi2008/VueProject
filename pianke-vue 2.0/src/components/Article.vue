<template>
  <div>
    <div class="kong">
      <div class="diamond"></div>
      <span>阅读 | Read</span>
    </div>
    <div class="list" v-for="item in data">
      <div class="listLeft">
        <h3>{{item.title}}</h3>
        <p>By /{{item.detail.userinfo.uname}}</p>
        <div>____</div>
        <br>
        <span>{{item.summary}}</span>
        <i>VIEW ALL <img src="../assets/img/green.png"></i>
        <ul>
          <li>{{(item.detail.views / 1000).toFixed(1)}} k次阅读</li>
          <li>评论:{{item.detail.comments}}</li>
          <li>喜欢:{{item.detail.likes}}</li>
        </ul>

      </div>
      <div class="listRight">
        <img :src="item.cover">
      </div>
    </div>
    <div class="kong">
      <div class="diamond"></div>
      <span>图片 | Picture</span>
    </div>
  </div>


</template>
<script>
  export default {
    name: 'my-article',
    props:['data']
  }
</script>
<style>
  .kong {
    padding: 50px 0;
    clear: both;
    font-size: 18px;
  }

  .diamond {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: black;
    margin-right: 10px;
  }

  .title {
    height: 130px;
    line-height: 130px;
    font-size: 18px;
  }

  .list {
    height: 216px;
    border: 1px solid #f2f2f2;
    background-color: white;
    position: relative;
    margin-bottom: 20px;
    padding: 0;
  }

  .listLeft {
    display: inline-block;
    width: 58%;
    padding: 20px;
  }

  .listLeft h3 {
    margin-top: 0;
    width: 90%;
    line-height: 25px;
    margin-bottom: 20px;
  }

  .listLeft h3:hover {
    color: #57ad68;
  }

  .listLeft p:hover {
    color: #57ad68;
  }

  .listLeft p {
    margin-bottom: 0;
  }

  .listLeft ul li {
    display: inline-block;
    padding: 0 5px;
    border-right: 1px solid #999;
    color: #999;
  }

  .listLeft ul li:nth-child(3) {
    border-right: 1px solid white;
  }

  .listLeft ul {
    position: absolute;
    bottom: 20px;
    left: 15px;
  }

  .listLeft span {
    color: #999;
  }

  .listLeft i {
    color: #57ad68;
  }

  .listLeft i img {
    height: 16px;
  }

  .listRight {
    position: absolute;
    right: 0;
    top: 0;
    width: 40%;
    height: 100%;
  }

  .listRight img {
    width: 100%;
    height: 100%;
  }
</style>
