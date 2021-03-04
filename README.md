# webpack5+vue2手动配置demo项目；

## 这个是项目基于webpack5配置vue2开发环境，项目使用*webpack5 + vue2 + vuex + vue-router + scss*


项目结构
```
|-- webpack-demo
    |-- .gitignore
    |-- package.json 安装依赖配置文件
    |-- README.md
    |-- webpack.config.js webpack配置文件(内有详细注释)
    |-- dist 文件发布路径(未提交，执行npm run build自动生成)
    |   |-- static js和css发布路径
    |   |-- views html发布路径
    |-- public 静态资源路径
    |   |-- index.html
    |-- src 开发路径
        |-- App.vue 应用程序组件
        |-- main.js 程序入口文件
        |-- router.js 路由文件
        |-- store.js vuex文件
        |-- style.scss 全局样式文件
        |-- components 组件目录(小组件)
        |-- views 视图组件目录
            |-- Detail.vue
            |-- Home.vue
            |-- List.vue
```

```
项目命令：  
    npm run build  发布命令 
    npm run watch  边监听边发布命令
    npm start  启动webpack-dev-server,默认端口8080  
    npm run server 启动node配置服务器(未完成，后续会添加)
```

备注：不会写文档，望原谅，初探webpack，有什么问题，劳您Q(545859297)我，欢迎各位劈头盖脸的指导，小辈一定虚心学习，感谢！


