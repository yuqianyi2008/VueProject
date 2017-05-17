<template>
  <div id="app">
    <headers></headers>
    <div id="all">
      <my-recent :recentdata="msg1"></my-recent>
      <component :is="oror[0]" :data="msgoror[0]"></component>
      <my-vision :visiondata="msgvision" ></my-vision>
      <component :is="oror[1]" :data="msgoror[1]"></component>
      <my-insterest :interesteddata="msginterested"></my-insterest>
      <my-more></my-more>
    </div>
    <footers></footers>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Headers from './components/Headers'
  import MyRecent from "./components/Recent";
  import MyArticle from "./components/Article";
  import MyVision from "./components/Vision";
  import MyTing from "./components/Ting";
  import MyInsterest from "./components/Insterest";
  import MyMore from "./components/More";
  import Footers from "./components/Footers";

  export default {
    name: 'app',
    props: ['msg1', 'msgarticle','msgvision','msgting','msginterested','oror','msgoror'],
    components: {
      Footers,
      MyMore,
      MyInsterest,
      MyTing,
      MyVision,
      MyArticle,
      MyRecent,
      Hello,
      Headers
    }

  }
</script>

<style>
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
  * {
    padding: 0;
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  li {
    list-style: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none !important;
  }

  #all {
    width: 70%;
    margin: 0 auto;
    height: auto;
    background-image: url(assets/img/bg.png);
    background-repeat: no-repeat;
    background-size: 100%;
  }

</style>
