// ==UserScript==
// @name        Steam�������޽ű�
// @namespace   com.wt629.steam.voteup
// @description Steam�������޽ű�
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
      // console.log('�Ѿ����޹�...');
      num_noclick ++;
    }else{
      jQuery(this).parent().parent().click();
      // console.log('����...');
      num ++;
    }
  });
  console.log('һ��' + thumb_up.length + ' ���ޣ�' + num + ' �Ѿ����޹���' + num_noclick);
  alert('һ��' + thumb_up.length + ' ���ޣ�' + num + ' �Ѿ����޹���' + num_noclick);
};
*/
/*
<div class="btn_grey_white_innerfade btn_small btn_uppercase" id="blotter_statuspost_submit" onclick="">
<span>��������</span>
</div>
*/
var buttonDiv = '&nbsp;&nbsp;<div class="btn_grey_white_innerfade btn_small btn_uppercase" id="blotter_statuspost_submit" onclick="all_voteup();"><span>��������</span></div>&nbsp;&nbsp;'
// ������ťID:blotter_statuspost_submit
jQuery('#blotter_statuspost_submit').parent().prepend(buttonDiv);
var function_all_voteup_str = '<script type="text/javascript">' +
'function all_voteup(){' +
'  var thumb_up = jQuery(\'.thumb_up\');var num_noclick = 0;var num = 0;' +
'  thumb_up.each(function(item){' +
'    var classStr = jQuery(this).parent().parent().attr(\'class\');' +
'    if (classStr != null && classStr.indexOf(\'active\') > 0){' +
'      num_noclick ++;}else{jQuery(this).parent().parent().click();num ++;}' +
'  });' +
"  console.log('һ��' + thumb_up.length + ' ���ޣ�' + num + ' �Ѿ����޹���' + num_noclick);" +
"  alert('һ��' + thumb_up.length + ' ���ޣ�' + num + ' �Ѿ����޹���' + num_noclick);" +
'};</script>';
jQuery('body').append(function_all_voteup_str);
