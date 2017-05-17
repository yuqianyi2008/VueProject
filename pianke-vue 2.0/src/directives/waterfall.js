/**
 * Created by yuqianyi on 2017/5/16.
 */
var baseWidth = 290;
var stack = [];//堆
var list = [];//数列

//瀑布流方法
function waterfall() {
  //当list数组中有值的时候
  while (list.length > 0) {
    //定义el  el是list数组的第一个元素
    var el = list.shift();
    var index = parseInt(el.getAttribute('data-index'));
    if (index < 4) {
      el.style.left = (baseWidth + 13) * index + 'px';
      el.style.opacity = 1;
      if ($.reset) {
        $.reset = false;
        stack = [];
      }
      stack.push(parseInt(window.getComputedStyle(el).getPropertyValue('height')));
      var maxNum = stack[0];
      for (var i = 1; i < stack.length; i++) {
        if (stack[i] > maxNum) {
          maxNum = stack[i];
        }
      }
      if ($.imgGroup) {
        $.imgGroup.style.height = maxNum + 'px';
      }
    } else {
      var minNum = stack[0];
      var minIndex = 0;
      for (var i = 1; i < 4; i++) {
        if (stack[i] < minNum) {
          minNum = stack[i];
          minIndex = i;
        }
      }
      el.style.left = (baseWidth + 13) * minIndex + 'px';
      el.style.top = minNum + 14 + 'px';
      el.style.opacity = 1;
      stack[minIndex] = minNum + parseInt(window.getComputedStyle(el).getPropertyValue('height')) + 14;
      var maxNum = stack[0];
      for (var i = 1; i < 4; i++) {
        if (stack[i] > maxNum) {
          maxNum = stack[i];
        }
      }
      if ($.imgGroup) {
        $.imgGroup.style.height = maxNum + 'px';
      }
    }
  }
}

var $ = module.exports = {
  inserted(el){
    list.push(el);
    waterfall();
  },
  imgGroup: null,
  run: waterfall,
  reset: false,
};




/** WEBPACK FOOTER **
 ** ./src/directives/waterfall.vue.js
 **/
