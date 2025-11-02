// ****************************************
// CSV読込み
// args [0]テーブルヘッダ 0:なし,1:あり
//      [1]CSVファイル
//      [2]書き出し先ID
// ****************************************
function read_csv(CsvFile, TargetID) { 
  var html ='<table id="MyTbl" class="tbl_1">', buf, data, fd=[],css;
  //CSV読込み
  if(buf = getFileCSV(CsvFile)) {
    //改行区切り
    data = buf.split("\n");
    
    var iCnt = 0;
    var i = 0;
    Max = data.length;
    for( var i=0; i<Max; i++){
      //カンマ区切り
      fd = data[i].split(",");
      
      if (iCnt==0) {
        html+='<thead>';
        html+='<tr class="bgclr_aqu h_030">';
      } else {
        html+='<tbody>'
        html+='<tr class="bgclr_pbl h_030">';
      }
      
      //列分割
      for( var j=0,n=fd.length; j<n; j++){
        html+='<td>'+fd[j]+'</td>';
      }
      html+='</tr>';
      if (iCnt==0) {
        html+='</thead>';
      }
      iCnt++;
    }
    html+='</tbody>';
    html+='</table>';
    document.getElementById(TargetID).innerHTML = html;
  }
  //====================
  //Tableソート初期処理
  //====================
  iHeight = 30 * iCnt + 10
  initTableWidget('MyTbl',880,iHeight,Array('S',false,false,false,'S','N','N','N',false,false));
}
