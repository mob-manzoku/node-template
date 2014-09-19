# node.jsプロジェクト

## Setup
DockerとFigが動けばOKですが、Ubuntu 14.04を推奨します。

```docker
$ curl -sSL https://get.docker.io/ubuntu/ | sudo sh
```

```fig
$ sudo apt-get install -y python_setuptools
$ sudo easy_install pip
$ sudo pip install fig
```

## ローカル環境
リポジトリのディレクトリに移動し
```
fig up -d
```
で起動します。

## 環境変数
アプリから外部との接続（mysqlなど）には、環境変数から取得した値を使用してください。
