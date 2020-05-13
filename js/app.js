'use strict'

$(function () { //読み込み完了後に実行
  $('#btn').on('click', function () {
    $.ajax({
      url: "http://zipcloud.ibsnet.co.jp/api/search?zipcode=" + $('#zipcode').val(),
      dataType: 'jsonp',
    }).done(function (data) {
      if (data.results) {
 
        setData(data.results[0]); //関数を呼び出す

      } else {
        alert('該当するデータが見つかりませんでした');
      }
    }).fail(function (data) {
      alert('通信に失敗しました');
    });
  });

  // データ取得が成功したときの処理
  function setData(data) { //関数を定義
    // 取得したデータを各HTMLに代入
    // input要素に設定
    $('#prefecture').val(data.address1); //都道府県名
    $('#city').val(data.address2); //市区町村名
    $('#address').val(data.address3); //町域名
    $('#kana1').val(data.kana1); //町域名
  }
});

