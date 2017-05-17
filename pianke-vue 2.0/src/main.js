// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App :msg1="msg1" :msgarticle="msgarticle" :msgvision="msgvision" :msgting="msgting" :msginterested="msginterested" :oror="oror" :msgoror="msgoror" />',
  components: {App},
  http: {},
  data: {
    oror:[],
    msgoror:[],
    msginterested:[],
    // waterarr:[],
    msg1: [],
    msgarticle: [],
    msgvision: [],
    msgting: [],
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
  },
  mounted: function () {
    if(h>=6&&h<19){
      this.options.params.mode='day';
      this.oror=['my-article','my-ting'];
    }else {
      this.options.params.mode='night';
      this.oror=['my-ting','my-article']
    };
    this.$http.get('/api/version5.0/headline/day.php', this.options).then(function success(res) {
      if(this.options.params.mode=='day'){
        this.msgarticle = res.body.data[2].data;
        this.msgvision = res.body.data[3].data;
        this.msgting = res.body.data[5].data;
        this.msgvision.forEach(function (item) {
          cut(3,item.detail.images);
        });
        this.msgoror=[this.msgarticle,this.msgting];
      }else {
        this.msgarticle = res.body.data[4].data;
        this.msgvision = res.body.data[3].data;
        this.msgting = res.body.data[1].data;
        this.msgvision.forEach(function (item) {
          cut(3,item.detail.images);
        })
      }
      this.msgoror=[this.msgting,this.msgarticle];
    }, function error(res) {
      console.error('错误');
    });
    this.$http.get('/api/version5.0/headline/recent.php', this.options).then(function success(res) {
      this.msg1 = res.body.data;
      this.msg1.splice(5,this.msg1.length-1);
    }, function error(res) {
      console.error('错误');
    });
    this.$http.get('/api/version5.0/pub/interested.php?pageSize=4', this.options).then(function success(res) {
      this.msginterested = res.body.data;
    }, function error(res) {
      console.error('错误');
    });
    // //waterfall
    // this.$http.get('/api/version5.0/headline/recent.php?pageSize=10&page=1', this.options).then(function success(res) {
    //   this.waterarr = res.body.data;
    // }, function error(res) {
    //   console.error('错误');
    // });
  },
  directives:{

  }
});
function cut(index,arr) {
  arr.splice(index,arr.length-1);
  return arr
}
