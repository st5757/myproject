
  (function () {
    'use strict';
    var cards = [];
    var checkLists = [];
    var cardWords = new Array();
    for (var i = 0; i < 4; i++) {
      cardWords[i] = new Array();
    }
    var cardBackgraoundImgs =[];
    var text = document.getElementById('text');
    var btn = document.getElementsByClassName('btn');
    var card_front = document.getElementsByClassName('card-front');

    checkLists[0]="PutToOtherUse（他の使い道）";
    checkLists[1]="Adapt(応用)";
    checkLists[2]="Modify(修正、変更)";
    checkLists[3]="Magnify(拡大)";
    checkLists[4]="Minify(縮小)";
    checkLists[5]="Substitute（代用)";
    checkLists[6]="Rearrange(置換)";
    checkLists[7]="Reverse（逆）";
    checkLists[8]="Combine（結合)";

    cardWords[0][0]="他の使い方はないか？";
    cardWords[0][1]="本来の目的とは違う使い方がないか？";
    cardWords[0][2]="置き換えてみてはどうか？";
    cardWords[0][3]="そこに違うものが当てはまらないか？";

    init();
    function init() {
      cards[0] = createCard(cardWords[0][0]);
      cards[1] = createCard(cardWords[0][1]);
      cards[2] = createCard(cardWords[0][2]);
      cards[3] = createCard(cardWords[0][3]);

      var i = 1;
      while(cards.length){
        var pos = Math.floor(Math.random()*cards.length);
        var resluts = document.getElementById('results');
        //cardsのpos番目の要素を削除してそれを返す
        resluts.appendChild(cards.splice(pos,1)[0]);
        //カードに番号を振る
        var card = resluts.lastChild.lastChild;
        //cardタグの中身を取得して、#を数字に入れ替え
        card.innerHTML = resluts.lastChild.lastChild.innerHTML.replace('#',i);
        i++;
      }
    }
    function createCard(cardWord) {
      var inner,
        card,
        container;

      inner = '<div class="card-back">#</div><div class="card-front">*</div>';
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

    function flipCard(card) {
      if (card.className.indexOf('open') === -1) {
                card.className = 'card open';
            } else {
                return;
            }
    }
  })();
