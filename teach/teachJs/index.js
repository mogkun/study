// 変数・定数
const a = 1; // 定数
let b = 2; // 変数

// 関数
const c = () => {};
// 配列
const d = [1, 2, 3];
// オブジェクト
const e = { a: 1, b: 2, c: 3 };

// アプリの作り方
// 順次・反復・分岐

// 順次
console.log('順次');
console.log('順次2');
console.log('順次3');

// 分岐
// 比較演算子 https://www.sejuku.net/blog/23942
const hoge = 1;
const fuga = 4;
if (hoge < fuga) {
  console.log('true');
} else {
  console.log('false');
}

// 反復
// ループ
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// falsyな値
// https://developer.mozilla.org/ja/docs/Glossary/Falsy

// 配列について
// const ary2 = ['あ', 'い', 'う'];
// const ary3 = ['あ', 1, 'う']; // 基本やっちゃだめ
// ary[2]; // 一つの要素にアクセスする方法 スズキ

const nameAry = ['佐藤', '高橋', 'スズキ'];

// ループするたびにiに1がたされていく
for (let i = 0; i < nameAry.length; i++) {
  console.log('おはようございます!', nameAry[i]);
}
