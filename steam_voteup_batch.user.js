// ==UserScript==
// @name        Steam社区批量点赞脚本
// @namespace   com.wt629.steam.voteup.batch
// @description Steam社区批量点赞脚本,在steam动态页面上添加批量点赞按钮.
// @include     http://steamcommunity.com/id/*/home/
// @version     1.3
// ==/UserScript==
var buttonDiv = '&nbsp;&nbsp;<div class="btn_grey_white_innerfade btn_small btn_uppercase" id="blotter_statuspost_submit" onclick="all_voteup();"><span>批量点赞</span></div>&nbsp;&nbsp;'
jQuery('#blotter_statuspost_submit').parent().prepend(buttonDiv);
var function_all_voteup_str = '<script type="text/javascript">' +
'function all_voteup(){' +
'  var thumb_up = jQuery(\'.thumb_up\');var num_noclick = 0;var num = 0;' +
'  thumb_up.each(function(item){' +
'    var classStr = jQuery(this).parent().parent().attr(\'class\');' +
'    if (classStr != null && classStr.indexOf(\'active\') > 0){' +
'      num_noclick ++;}else{jQuery(this).parent().parent().click();num ++;}' +
'  });' +
"  alert('一共' + thumb_up.length + ' 点赞：' + num + ' 已经点赞过：' + num_noclick + '\n请稍等一些时间,直到页面Ajax请求结束...');" +
'};</script>';
jQuery('body').append(function_all_voteup_str);