# react-init

React + BABEL + Webpack + SCSSな開発環境生成

（まだまだわからないことだらけなので、何があっても泣かない、振り返らない）

# 使い方

## クローンする

フォルダ名を react とかそういう名前にしちゃうと名前が被って使えないので違う名前にしよう

```
mkdir react-folder

cd react-folder

git clone https://github.com/syakegon/react-init
```

## Webサーバ起動

何かとWebサーバで確認したほうが使い勝手が良いじゃろうので。

```
npm start
```

### Windows環境でエラーが出るかも

Macにて作ったものなので、差異があるようで `npm start`にてエラーが出る時があるようです。その場合は、以下のコードをたたいて見てください。

```
npm install

npm rebuild node-sass
```

起動できたら、`http://localhost:8080/`をブラウザで開いて、表示されたらめでたしめでたし。デベロッパーツールで動きをかくにんできて便利ー。
