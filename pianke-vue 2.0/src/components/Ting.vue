<template>
  <div>
    <div class="kong" >
      <div class="diamond"></div>
      <span>Ting</span>
    </div>
    <div class="ting">
      <div class="tinglist" v-for="item in data">
        <a href="#">
          <div class="picturemeng2"></div>
          <div class="picturemeng22" style="background-position-y: 65%;">
            <div style="height: 70%;"></div>
          </div>
          <img :src="item.cover">
        </a>
        <div class="tingbottom">
          <h3 style="text-overflow:ellipsis;height: 35px;">{{item.title}}</h3>
          <span style="display: block;">By / {{item.detail.userinfo.uname}}</span>
          <ul>
            <li>{{(item.detail.views / 1000).toFixed(1) }} k次阅读</li>
            <li>评论:{{item.detail.comments}}</li>
            <li>喜欢:{{item.detail.likes}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="kong">
      <div class="diamond"></div>
      <span>人气片客|Hot Pianker</span>
    </div>
  </div>

</template>
<script>
  export default{
    name: 'my-ting',
    props:['data']
  }
</script>
<style>

  .ting div {
    height: 420px;
    padding: 5px;
    display: inline-block;
  }

  .tinglist {
    width: 32%;
    border: 1px solid lightgrey;
  }

  .tinglist a {
    display: inline-block;
    width: 100%;
    height: 75%;
    position: relative;
    z-index: 101;
    overflow: hidden;
  }

  .tinglist a img {
    width: 100%;
    height: 100%;
    transition: all 0.5s;
  }

  .tinglist a:hover img {
    transform: scale(1.2);
  }

  .tinglist a:hover div {
    display: block;
  }

  .pictureBottom h3:hover {
    color: #57ad68;
  }

  .pictureFooter span:hover {
    color: #57ad68;
  }

  .tingbottom h3 {
    margin: 0 0 15px;
  }

  .tingbottom {
    height: 20% !important;
    position: relative;
  }

  .tingbottom ul li {
    display: inline-block;
    color: gray;
  }

  .tingbottom ul {
    position: absolute;
    width: 296px;
    bottom: 0;
  }

  .tingbottom h3:hover {
    color: #57ad68;
  }

  .tingbottom span:hover {
    color: #57ad68;
  }
</style>
