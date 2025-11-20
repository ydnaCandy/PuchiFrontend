# PuchiFrontend


## 環境設定


```bash
# Vite + React プロジェクト作成
npm create vite@latest .

# 必要パッケージのインストール
npm install

# 開発サーバー起動
npm run dev
```


## js版のデプロイ

dockerコンテナ使ってデプロイ

### ディレクトリ構成

```bash
project-root/
├── docker-compose.yml
├── nginx.conf
└── apps/
    ├── app1/         
    │   ├── index.html
    │   ├── js/
    │   │   └── main.js
    │   └── css/
    │       └── style.css
    └── app2/         
        ├── index.html
        ├── js/
        │   └── main.js
        └── css/
            └── style.css
```

### nginx

```
server {
    listen 80;

    # app1
    location /app1/ {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri /index.html;
    }
}

```



### compose.yml


```yml
version: "3.9"

services:
  web:
    image: nginx:alpine
    container_name: nginx
    ports:
      - "10080:80"
    volumes:
      - ./app:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    restart: always


```


### コンテナの起動

```bash
docker compose up -d
```