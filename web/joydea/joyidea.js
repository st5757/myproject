
  (function () {
    'use strict';
    var mCardCount = 4;
    var mCards = [];
    var mBtnCount = 9;
    var mBtnWords = new Array();
    var mBtns =[];
    var mCardWords = new Array();
    var mSelected = document.getElementById('selected');


    init();
    function init() {
      //カードの中身定義
      defineCardwords();
      // ボタン群を生成
      createBtnsList(mBtnWords);

    }
    // カードの中身定義
    function defineCardwords() {

      for (var i = 0; i < mCardCount; i++) {
        mCardWords[i] = new Array();
      }
      mCardWords[0][0]="他の使い方はないか？";
      mCardWords[0][1]="本来の目的とは違う使い方がないか？";
      mCardWords[0][2]="転用できないか？";
      mCardWords[0][3]="世の中には「他の使い方」で製品化してるものはないか？";

      mCardWords[1][0]="応用したら使えないか？";
      mCardWords[1][1]="他のところに同じようなアイデアはないか？";
      mCardWords[1][2]="似たような業界はないか？";
      mCardWords[1][3]="真似してみたらどうか？";

      return container;
    }
    // カードをひっくり返す仕組み
    function flipCard(card) {
      if (card.className.indexOf('open') === -1) {
                card.className = 'card open';
            } else {
                return;
            }
    }
    // ボタン群を生成する
    function createBtnsList(btnWords) {

      for (var i = 0; i < mBtnCount; i++) {
        btnWords[i] = new Array();
      }
      btnWords[0][0]="1";
      btnWords[0][1]="PutToOtherUse（転用）";
      btnWords[0][2]="put_to_other_use";
      btnWords[0][3]="fa-refresh";

      btnWords[1][0]="2";
      btnWords[1][1]="Adapt(応用)";
      btnWords[1][2]="adapt";
      btnWords[1][3]="fa-lightbulb-o";

      btnWords[2][0]="3";
      btnWords[2][1]="Modify(修正、変更)";
      btnWords[2][2]="modify";
      btnWords[2][3]="fa-exchange";

      btnWords[3][0]="4";
      btnWords[3][1]="Magnify(拡大)";
      btnWords[3][2]="magnify";
      btnWords[3][3]="fa-expand";

      btnWords[4][0]="5";
      btnWords[4][1]="Minify(縮小)";
      btnWords[4][2]="minify";
      btnWords[4][3]="fa-compress";

      btnWords[5][0]="6";
      btnWords[5][1]="Substitute（代用)";
      btnWords[5][2]="substitute";
      btnWords[5][3]="fa-external-link";

      btnWords[6][0]="7";
      btnWords[6][1]="Rearrange(置換)";
      btnWords[6][2]="rearrange";
      btnWords[6][3]="fa-pencil-square-o";

      btnWords[7][0]="8";
      btnWords[7][1]="Reverse（逆）";
      btnWords[7][2]="reverse";
      btnWords[7][3]="fa-sort-alpha-desc";

      btnWords[8][0]="9";
      btnWords[8][1]="Combine（結合)";
      btnWords[8][2]="conbine";
      btnWords[8][3]="fa-link";

      for (var i = 0; i < mBtnCount; i++) {
        console.log(btnWords[i]);
        mBtns[i] = createBtn(btnWords[i]);
      }
      var i = 1;
      for (var i = 0; i < mBtns.length; i++) {
        var checks = document.getElementById('checks');
        checks.appendChild(mBtns[i]);
      }

    }
    // ボタン生成
    function createBtn(btnWords) {
      var inner,
          btn;

      inner = '<div class="btn"><i class="fa * fa-2x"></i></div>';
      btn = document.createElement('div');
      btn.className = 'btn-container '+ btnWords[1];
      btn.addEventListener('click',function () {
        console.log('click_btn');
        //seletedクラスの子要素の全てを削除
        while (selected.firstChild) selected.removeChild(selected.firstChild)

        selected.appendChild(createSelectIcon(btnWords));

      });
      btn.innerHTML = inner.replace('*',btnWords[2]);
      return btn;
    }

    // 選択した項目表示を生成
    function createSelectIcon(btnWords) {
      var inner,
          icon,
          container;

      inner = '<i class="fa '+
              btnWords[2]+
              ' fa-2x"></i><p>'+
              btnWords[0]+
              '</p>';
      icon = document.createElement('div');
      icon.className = 'icon';
      icon.innerHTML = inner;
      container = document.createElement('div');
      container.className = 'icon-container';
      container.appendChild(icon);
      return container;
    }
  })();
