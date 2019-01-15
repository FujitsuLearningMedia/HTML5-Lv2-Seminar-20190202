# HTML5プロフェッショナル認定試験レベル2ポイント解説無料セミナー

### 説明
2019年2月2日開催の**HTML5プロフェッショナル認定試験レベル2ポイント解説無料セミナー**用のサンプルコードです。セミナーで使用したハンズオンを手元で試してみたい方は本リポジトリをダウンロードして使用してください。

### セットアップ手順
1. [Node.js](https://nodejs.org/en/)をインストールする
1. 本ページの「Clone or Download」から、「Download ZIP」を選択する
1. ダウンロードしたzipファイルを解凍する
1. コマンドプロンプトで解答したフォルダに移動する
1. コマンドプロンプトに`npm install`と入力する

### サンプルの動作確認方法
#### 各サンプル共通
1. cmd上でcors-clientフォルダに移動する
1. cmd上で`npm start`コマンドを実行する
1. ブラウザで[http://localhost:3000/](http://localhost:3000/)にアクセスする
1. 別cmd上を立ち上げてcors-serverフォルダに移動する
1. cmd上で`npm start`コマンドを実行する

#### セキュリティ関連サンプル
1. cmdを立ち上げて、`ipconfig`でipアドレスを調べる
1. Chromeを立ち上げて、http://ipアドレス:3000/secにアクセスする
1. **F12**キーを押下し、**console**タブを開く
1. xhrボタンを押下し、エラーが発生することを確認する
1. cors-server\server.jsのL9とL16のコメントを削除する
1. 各サンプル共通の手順4で起動したサーバをctr+cで停止し、手順5を再実行する
1. 再度xhrボタンを押下し、エラーが発生しないことを確認する
1. Geolocationボタンを押下し、エラーが発生することを確認する
1. cors-client\bin\wwwのL30をコメントインし、L31をコメントアウトする
1. 各サンプル共通の手順2で起動したサーバをctr+cで停止し、手順2を再実行する
1. https://ipアドレス:3000/secにアクセスする
1. 再度Geolocationボタンを押下し、エラーが発生しないことを確認する
1. cors-client\views\sec.ejsのL15をコメントインする
1. https://ipアドレス:3000/secを再読み込みし、警告が出ることを確認する

### 参考ページ
- [LPI-Japan告知ページ](https://html5exam.jp/news/event/page2899.html)
- [翔泳社書籍紹介ページ](https://www.shoeisha.co.jp/book/detail/9784798154626)

### ライセンス
[MIT License](LICENSE)

---
*&copy;Fujitsu Learning Media Limited*
