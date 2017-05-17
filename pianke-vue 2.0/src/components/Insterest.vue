<template>
  <div id="insterest">
    <div class="piankerlist" v-for="item in interesteddata">
      <div class="piankerman">
        <a href="#" class="headpicture">
          <img :src="item.icon">
        </a>
        <div class="headunder"></div>
      </div>
      <div class="piankerman">
        <div class="piankermanRight">
          <a href="#">{{item.uname}}</a>
          <h5>____</h5>
          <span>{{item.desc}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-insterest',
    props:['interesteddata']
  }
</script>
<style>
  #insterest{
    text-align:center;
  }
  .piankerlist{
    height: 130px;
    width:20%;
    display: inline-block;
    border: 1px solid lightgrey;
    background-image: url(../assets/img/big.png);
    background-size: 100% 100%;
    padding: 50px 10px;
    margin: 0 1.3%;
  }
  .piankerman{
    width: 50%;
    height: 100%;
    float: left;
  }
  .headpicture{
    display: block;
    margin: 0 auto;
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  .headpicture img{
    width:100%;
    height:100%;
    border-radius: 80px;
  }
  .headunder{
    margin: 0 auto;
    width: 60px;
    height: 20px;
    border-radius: 20px;
    background-image: url(../assets/img/music.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .piankermanRight{
    margin-top: 30px;
  }
  .piankermanRight a{
    display: block;
    color: black;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .piankermanRight span{
    color: gray;
    display: block;
    margin-top: 20px;
    font-size: 14px;
  }
  .piankermanRight a:hover{
    color: #57ad68;
  }
</style>
