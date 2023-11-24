# Next.js ハッシュ外すくん
[github.io](https://pisces2336.github.io/nextjs-hash-remover/)

## 使用イメージ
![image](https://github.com/pisces2336/nextjs-hash-remover/assets/98950347/fa4155cf-67a7-4f00-a46e-b81d3d23adb5)

## 機能
- Next.jsからHTMLやCSSを出力した際にクラス名に付けられるハッシュを除去します.
  - \<div class="hello__cgA8n">\</div> ⇒ \<div class="hello">\</div>
  - .hello_eq2LK.world__s1Be_ { width: 100%; } ⇒ .hello.world { width: 100%; }


## 使い方
- 画面左側の入力欄にハッシュを除去したいコードを貼り付けます.
- 画面中央の「ハッシュを外す！」ボタンを押下します.
- 画面右側にハッシュが除去されたコードが生成されます.

## 備考
- 通信は行わないので, セキュリティ的には問題ないかと思います.
  - 不安であればコードを良く読み, ローカルでindex.htmlを開いて使用すればより安全かと思います.