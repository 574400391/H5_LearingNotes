//项目的js入口文件

//1.导入 jquery
import $ from 'jquery'

$(function(){
  $('li:odd').css('backgroundColor','lightblue')
  $('li:even').css('backgroundColor','yellow')

})