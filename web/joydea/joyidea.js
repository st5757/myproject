
  (function () {
    'use strict';
    var mCardCount = 4;
    var mCards = [];
    var mBtnCount = 9;
    var mBtnWords = new Array();
    var mBtns =[];
    var mCardWords = new Array();
    var mSelected = document.getElementById('selected');
    var mResluts = document.getElementById('results');


    init();
    function init() {
      //カードの中身定義
      defineCardwords();
      // ボタン群を生成
      createBtnsList(mBtnWords);

    }
    // カードの中身定義
    function defineCardwords() {

      for (var i = 0; i < mBtnCount; i++) {
        mCardWords[i] = new Array();
      }
      mCardWords[0][0]="他の使い方はないか？";
      mCardWords[0][1]="本来の目的とは違う使い方がないか？";
      mCardWords[0][2]="転用できないか？<br>全部を、部品を、メンバーを、資金を";
      mCardWords[0][3]="世の中には「他の使い方」で製品化してるものはないか？";

      mCardWords[1][0]="応用した製品例と同じように考えられないか？";
      mCardWords[1][1]="他のところに同じようなアイデアはないか？";
      mCardWords[1][2]="似たような業界はないか？";
      mCardWords[1][3]="真似してみたらどうか？";

      mCardWords[2][0]="一部を変えてみたらどうか？<br>形を・天気を・時間を・決定を";
      mCardWords[2][1]="変更してみたらどうか？<br>必需品を・季節を・速さを・決まりを";
      mCardWords[2][2]="修正してみたらどうか？<br>価格を・角度を・年齢を・マニュアルを";
      mCardWords[2][3]="いつも修正しないところに目を向けてみたらどうか？";

      mCardWords[3][0]="大きくしてみたらどうか？<br>サイズを・長さを・悪い部分を";
      mCardWords[3][1]="増やしてみたらどうか？<br>コストを・人数を・商品数を";
      mCardWords[3][2]="拡張してみたらどうか？<br>規模を・力を・幅を";
      mCardWords[3][3]="拡大してみたらどうか？<br>地域を・時間を・深さを";

      mCardWords[4][0]="小さくしてみたらどうか？<br>必要だと思ってるものを・範囲を・利害関係を";
      mCardWords[4][1]="減らしてみたらどうか？<br>クオリティを・お客さんを・商品数を";
      mCardWords[4][2]="低くしてみたらどうか？<br>温度を・高さを";
      mCardWords[4][3]="縮小してみたらどうか？<br>地域を・時間を・深さを";

      mCardWords[5][0]="「あの人だったら」代わりに何を使うだろうか？";
      mCardWords[5][1]="代理人はいないか？";
      mCardWords[5][2]="全く違う用途のもので近い材料や人材はないか？";
      mCardWords[5][3]="違う業界で似たものを使っていないか？";

      mCardWords[6][0]="入れ替えてみたらどうか？<br>順番を・メンバーを・世代を";
      mCardWords[6][1]="置き換えてみたらどうか？<br>別の言葉で・別のジャンルで・思いついた業界で";
      mCardWords[6][2]="アレンジし直してみたらどうか？<br>仕組みを・揃えた物を・階層を・良いと思っているものを";
      mCardWords[6][3]="いつも入れ替えない部分に目を向けてみたらどうか？";

      mCardWords[7][0]="逆にしてみたらどうか？<br>向きを・その「上下」を・お客さんを気持ちを";
      mCardWords[7][1]="裏や反対は使えないか？<br>意見の・善悪の・地位の・あなたの意思の";
      mCardWords[7][2]="転倒させられないか？<br>感情を・行動を・決定を・今までのストーリーを";
      mCardWords[7][3]="くつがえすことはできないか？";

      mCardWords[8][0]="組み合わせてみたらどうか？<br>敵を・異なる業界を・上下か、左右かに";
      mCardWords[8][1]="兼ねることはできないか？<br>技を・ジャンルを・知識を・あの人とあの人を";
      mCardWords[8][2]="結びつけてみたらどうか？<br>人を・決定を・行動を";
      mCardWords[8][3]="足すだけではなく、倍増させるという考え方はできないか？";

    }
    // ボタン群を生成する
    function createBtnsList(btnWords) {

      for (var i = 0; i < mBtnCount; i++) {
        btnWords[i] = new Array();
      }
      btnWords[0][0]="1";
      btnWords[0][1]="PutToOtherUse（ 転用できない？ ）";
      btnWords[0][2]="put_to_other_use";
      btnWords[0][3]="fa-refresh";

      btnWords[1][0]="2";
      btnWords[1][1]="Adapt　(　応用してみたらどうか？　)";
      btnWords[1][2]="adapt";
      btnWords[1][3]="fa-lightbulb-o";

      btnWords[2][0]="3";
      btnWords[2][1]="Modify　(　修正してみたらどうか？　)";
      btnWords[2][2]="modify";
      btnWords[2][3]="fa-exchange";

      btnWords[3][0]="4";
      btnWords[3][1]="Magnify　(　拡大できないだろうか？　)";
      btnWords[3][2]="magnify";
      btnWords[3][3]="fa-expand";

      btnWords[4][0]="5";
      btnWords[4][1]="Minify　(　縮小できないだろうか？　)";
      btnWords[4][2]="minify";
      btnWords[4][3]="fa-compress";

      btnWords[5][0]="6";
      btnWords[5][1]="Substitute　（　代用してみたら？　)";
      btnWords[5][2]="substitute";
      btnWords[5][3]="fa-external-link";

      btnWords[6][0]="7";
      btnWords[6][1]="Rearrange　(　置き換えられないか？　)";
      btnWords[6][2]="rearrange";
      btnWords[6][3]="fa-pencil-square-o";

      btnWords[7][0]="8";
      btnWords[7][1]="Reverse　（　逆にしたらどうか？　）";
      btnWords[7][2]="reverse";
      btnWords[7][3]="fa-sort-alpha-desc";

      btnWords[8][0]="9";
      btnWords[8][1]="Combine　（　結びつけてみたら？　)";
      btnWords[8][2]="conbine";
      btnWords[8][3]="fa-link";

      for (var i = 0; i < mBtnCount; i++) {
        mBtns[i] = createBtn(btnWords[i]);
      }
      var i = 1;
      for (var i = 0; i < mBtns.length; i++) {
        var checks = document.getElementById('checks');
        checks.appendChild(mBtns[i]);
      }

    }

    // ボタン生成
    function createBtn(btnWord) {
      var inner,
          btn;

      inner = '<div class="btn"><i class="fa * fa-2x"></i></div>';
      btn = document.createElement('div');
      btn.className = 'btn-container '+ btnWord[2];
      btn.addEventListener('click',function () {
        console.log('click_btn');
        console.log(btnWord);
        //seletedクラスの子要素の全てを削除
        while (selected.firstChild) selected.removeChild(selected.firstChild);
        //カードを削除
        while(mResluts.firstChild) mResluts.removeChild(mResluts.firstChild);

        // 選択したボタンをアイコンで表示
        selected.appendChild(createSelectIcon(btnWord));
        selected.appendChild(createSelectIconText(btnWord));

        // カード群を生成
        createCardsList(btnWord);
        $('.card').hide();
        $('.card').show(800);

      });
      btn.innerHTML = inner.replace('*',btnWord[3]);
      return btn;
    }

    // 選択した項目表示を生成
    function createSelectIcon(btnWord) {
      var inner,
          icon,
          container;
      // 選択したボタンのアイコン
      inner = '<i class="fa '+
              btnWord[3]+
              ' fa-2x"></i>';
      icon = document.createElement('div');
      icon.className = 'icon';
      icon.innerHTML = inner;

      container = document.createElement('div');
      container.className = 'icon-container';
      container.appendChild(icon);

      return container;
    }
    //選択した項目テキストを生成
    function createSelectIconText(btnWord) {
      var inner,
          icon_text,

          // アイコンの説明テキスト
          inner = '<p>'+btnWord[1]+'</p>'
          icon_text = document.createElement('div');
          icon_text.className='icon_text';
          icon_text.innerHTML = inner;

          return icon_text;
    }

    // カード群を生成する
    function createCardsList(btnWord) {

      for (var i = 0; i < mCardCount; i++) {
        mCards[i] = createCard(mCardWords[btnWord[0]-1][i]);
      }
      var i = 1;
      while(mCards.length){
        var pos = Math.floor(Math.random()*mCards.length);
        //mCardsのpos番目の要素を削除してそれを返す
        mResluts.appendChild(mCards.splice(pos,1)[0]);
        //カードに番号を振る
        var card = mResluts.lastChild.lastChild;
        //cardタグの中身を取得して、#を数字に入れ替え
        card.innerHTML = mResluts.lastChild.lastChild.innerHTML.replace('#',i);
        i++;
      }

    }

    // カード生成
    function createCard(cardWord) {
      var inner,
          card,
          container;

      inner = '<div class="card-back">#</div><div class="card-front"><div class="card-front-inner">*</div></div>';
      card = document.createElement('div');
      card.className = 'card';
      card.addEventListener('click',function () {
        console.log('click');
        flipCard(this);
      });
      card.innerHTML =inner.replace('*',cardWord);

      container =document.createElement('div');
      container.className = 'card-container';
      container.appendChild(card);

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
})();
