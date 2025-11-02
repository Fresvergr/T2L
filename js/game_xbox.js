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
        html+='<td>No</td>';
      } else {
        /*
        html+='<tbody class="scrollingContent">'
        */
        html+='<tbody>'
        var bgclr = "";
        switch (Number(fd[0])) {
          case 0:
            cls = "bgclr_pbl h_040";
            break;
          case 1:
            cls = "bgclr_khk h_040";
            break;
          case 2:
            cls = "bgclr_gyl h_040";
            break;
          case 3:
            cls = "bgclr_vio h_040";
            break;
          default:
            continue;  
        }
        html+='<tr class="'+cls+'">';
        html+='<td>'+iCnt+'</td>';
      }
      
      //列分割
      for( var j=1,n=fd.length; j<n; j++){
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
  iHeight = 40 * iCnt
  initTableWidget('MyTbl',810,iHeight,Array('N','S','S','N','S','S',false,'S'));
}
