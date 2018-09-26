//项目的js入口文件

//1.导入 jquery
import $ from 'jquery'
import './css/index.css'

$(function () {
  $('li:odd').css('backgroundColor', 'lightblue')
  $('li:even').css('backgroundColor', 'orange')

})