// ==UserScript==
// @name        Steam批量点赞脚本
// @namespace   com.wt629.steam.voteup
// @description Steam批量点赞脚本
// @include     http://steamcommunity.com/id/*/home/
// @version     1.0
// @grant       none
// ==/UserScript==


/*
function all_voteup(){
  var thumb_up = jQuery('.thumb_up');
  var num_noclick = 0;
  var num = 0;
  thumb_up.each(function(item){
    // alert(jQuery(this).parent().parent().attr("onclick"));
    var classStr = jQuery(this).parent().parent().attr('class');
    if (classStr != null && classStr.indexOf('active') > 0){
      // console.log('已经点赞过...');
      num_noclick ++;
    }else{
      jQuery(this).parent().parent().click();
      // console.log('点赞...');
      num ++;
    }
  });
  console.log('一共' + thumb_up.length + ' 点赞：' + num + ' 已经点赞过：' + num_noclick);
  alert('一共' + thumb_up.length + ' 点赞：' + num + ' 已经点赞过：' + num_noclick);
};
*/
/*
<div class="btn_grey_white_innerfade btn_small btn_uppercase" id="blotter_statuspost_submit" onclick="">
<span>批量点赞</span>
</div>
*/
var buttonDiv = '&nbsp;&nbsp;<div class="btn_grey_white_innerfade btn_small btn_uppercase" id="blotter_statuspost_submit" onclick="all_voteup();"><span>批量点赞</span></div>&nbsp;&nbsp;'
// 发布按钮ID:blotter_statuspost_submit
jQuery('#blotter_statuspost_submit').parent().prepend(buttonDiv);
var function_all_voteup_str = '<script type="text/javascript">' +
'function all_voteup(){' +
'  var thumb_up = jQuery(\'.thumb_up\');var num_noclick = 0;var num = 0;' +
'  thumb_up.each(function(item){' +
'    var classStr = jQuery(this).parent().parent().attr(\'class\');' +
'    if (classStr != null && classStr.indexOf(\'active\') > 0){' +
'      num_noclick ++;}else{jQuery(this).parent().parent().click();num ++;}' +
'  });' +
"  console.log('一共' + thumb_up.length + ' 点赞：' + num + ' 已经点赞过：' + num_noclick);" +
"  alert('一共' + thumb_up.length + ' 点赞：' + num + ' 已经点赞过：' + num_noclick);" +
'};</script>';
jQuery('body').append(function_all_voteup_str);
