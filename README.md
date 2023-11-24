# Next.js ハッシュ外すくん
[github.io](https://pisces2336.github.io/nextjs-hash-remover/)

## 使用イメージ
![image](https://github.com/pisces2336/nextjs-hash-remover/assets/98950347/a7a46062-5ddf-447f-b732-727ded9f57be)

## 機能
- Next.jsからHTMLやCSSを出力した際にクラス名に付けられるハッシュを除去します.
  - \<div class="hello__cgA8n">\</div> ⇒ \<div class="hello">\</div>
  - .hello_eq2LK.world__s1Be_ { width: 100%; } ⇒ .hello.world { width: 100%; }


## 使い方
- 画面左の入力欄にハッシュを除去したいコード (以下 '対象コード' ) をコピペします.
- 画面中央でいくつかの設定をしてください.
  - 対象コードの言語 (現状ではHTMLとCSSに対応しています)
  - 対象コードに含まれる, クラス名とハッシュを繋ぐアンダースコアの数の上下限
  - 対象コードに含まれるハッシュの文字数
- 画面中央下の「ハッシュを外す！」ボタンを押下すると, 画面右側にハッシュを外すが除去されたコードが生成されるので, 適宜コピーして利用してください.

## 備考
- 特に通信は行わないので, セキュリティ的に安心して使えると思います.
  - 不安であればコードを良く読み, ローカルでindex.htmlを開いて使用していただければ良いと思います.