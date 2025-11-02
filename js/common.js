// ************************************************************
//クリックメニューに応じてフレームの表示を切替
// args [0] iMode : クリックメニュー行位置
// ************************************************************
function select_menu(iMode) {
  //切替ファイル設定
  switch (iMode) {
    case 1:
      strHtml_1 = "main.htm";
      strHtml_2 = "dummy.htm";
      break;
    case 2:
      strHtml_1 = "profile.htm";
      strHtml_2 = "dummy.htm";
      break;
    case 3:
      strHtml_1 = "rx8_main.htm";
      strHtml_2 = "dummy.htm";
      break;
    case 4:
      strHtml_1 = "main.htm";
      strHtml_2 = "dummy.htm";
      break;
    case 5:
      strHtml_1 = "game_xbox.htm";
      strHtml_2 = "dummy.htm";
      break;
    case 6:
      strHtml_1 = "Zakki_Newest.htm";
      strHtml_2 = "Select_Zakki.htm";
      break;
    case 7:
      strHtml_1 = "http://8153.teacup.com/thinktank/bbs";
      strHtml_2 = "dummy.htm";
      break;
  }
  //メインとメニューの表示切替
  parent.frm_Main.location.href = strHtml_1;
  parent.frm_Sel.location.href  = strHtml_2;
}

// ************************************************************
// 雑記の年月指定でメインフレームの雑記切替
// args [0] Frm : セレクタのフレーム(Object)
// ************************************************************
function Zakki_Change(Frm) {
  switch (Frm.list.selectedIndex) {
    case 0:
      strHtml = "Zakki_Newest.htm";
    case 1:
      strHtml = "Zakki_200904.htm";
    case 2:
      strHtml = "Zakki_200903.htm";
  }
  parent.frm_Main.location.href = strHtml;
}

//****************************************
//指定ファイル読込み
// args [0]ファイル名
//****************************************
function getFileCSV( fileName ){
  var ret = '';
  new Ajax.Request( fileName + '?d='+(new Date).getTime(), {
    method:"get", asynchronous : false,
    onSuccess:function(o){ret=o.responseText;}
    });
  return ret;
}
