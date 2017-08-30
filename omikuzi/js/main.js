(function () {
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
    //確率に偏りを出す
    var n = Math.random();
    if (n < 0.05) {
      this.textContent = '大吉';
    } else if (n < 0.2) {
      this.textContent = '中吉';
    } else {
      this.textContent = '凶';
    }
    /*
    //配列を使う
    var results = ['大吉', '小吉', '凶', '末吉'];
    //var n = Math.floor(Math.random() * 3);
    var n = Math.floor(Math.random() * results.length); //配列の要素数だけ掛ける
    this.textContent = results[n];
    */
/*
switch文の場合
    switch (n) {
      case 0:
        this.textContent = '大吉';
        break;
      case 1:
        this.textContent = '小吉';
        break;
        case 2:
          this.textContent = '凶';
          break;
    }

if文の場合
  if (n === 0) {
    this.textContent = '大吉';
  } else if (n === 1) {
    this.textContent = '小吉';
  } else {
    this.textContent = '凶';
  }
  */
   //this.textContent = n;
  });
  btn.addEventListener('mousedown', function () {
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function () {
    this.className = '';
  });

}) ();
