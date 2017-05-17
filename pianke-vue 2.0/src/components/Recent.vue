<template>
  <div id="recent">
    <a href="#" v-for="item in recentdata">
      <div class="picturemeng2"></div>
      <div class="picturemeng22">
        <div style="height: 60%;"></div>
        <span>__</span><br>
        {{item.title}}
      </div>
      <img :src="item.cover">
    </a>
  </div>
</template>

<script>

  export default {
    name: 'my-recent',
    props:['recentdata']
  }

</script>


<style>
  #recent {
    width: 100%;
    height: auto;
  }

  #recent a {
    display: inline-block;
    width: 25%;
    height: 232px;
    float: left;
    position: relative;
    overflow: hidden;
    z-index: 101;
  }

  #recent a:nth-child(1) {
    width: 50%;
    height: 463px;
  }

  #recent a img {
    width: 100%;
    height:100%;
    transition: all 0.5s;
    display: block;
  }

  #recent a:hover img {
    transform: scale(1.2);
  }

  #recent a:hover div {
    display: block;
  }

  #recent div:nth-child(4), #pictureArr div:nth-child(5) {
    position: relative;
    top: -5px;
  }

  .picturemeng2 {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.3;
    z-index: 98;
    display: none;
  }

  .picturemeng22 {
    background-image: url(../assets/img/play.png);
    background-repeat: no-repeat;
    background-position-y: 45%;
    background-position-x: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 11;
    font-size: 22px;
    color: white;
    text-align: center;
    z-index: 99;
    display: none;
  }
</style>
