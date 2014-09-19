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

