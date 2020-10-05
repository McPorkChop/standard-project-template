# 项目背景

# 开发环境

# 项目目录

```
.
├── README.md
├── babel.config.js                        // babel配置
├── package.json                           // 项目依赖描述文件
├── postcss.config.js                      // postcss配置
├── tsconfig.json                          // typescript配置
├── .eslintrc.json                         // eslint配置
├── .prettierrc.json                       // prettier配置
├── .gitignore                             // git忽略配置
├── .vscode                                // vscode工作区配置
│   └── ...
├── public                                 // 无需编译文件
│   └── ...
├── src                                    // 源码
│   ├── App.vue                            // 项目根组件
│   ├── pages.json                         // 项目路由配置文件
│   ├── services                           // 项目服务文件夹
│   ├── main.js                            // 项目入口
│   ├── manifest.json                      // uni-app配置文件，里面包括部分Webpack配置
│   ├── components                         // 项目组件文件夹
│   │   └── ...
│   ├── configs                            // 配置、常量文件夹
│   │   └── ...
│   ├── directives                         // 自定义指令
│   │   └── ...
│   ├── pages                              // 项目页面
│   │   └── ...
│   ├── services                           // 项目服务文件夹
│   │   └── ...
│   ├── static                             // 项目静态资源
│   │   ├── images                         // 图片资源
│   │   │   └── ...
│   │   └── scss                           // 样式资源
│   │       └── ...
│   ├── store                              // 状态
│   │   ├── index.js                       // 全局状态
│   │   └── modules                        // 状态模块
│   │       └── ...
│   ├── uni.scss                           // uni-app 样式变量
│   └── utils                              // 工具
│       └── ...
└── types                                  // typescript声明
    ├── sfc.d.ts                           // vue声明文件
    └── ...
```

# 常用命令

## 项目初始化

```nodejs
npm install
#OR
yarn
```

## 项目启动

```nodejs
npm run serve
#OR
yarn serve
```

## 项目发布

```nodejs
npm run build
#OR
yarn build
```

## 检查格式规范

```nodejs
npm run lint
#OR
yarn lint
```

## 全局格式化代码文件

```nodejs
npm run format
#OR
yarn format
```

# 项目更新记录

| 版本号 |       日期        | 更新内容                  |
| :----: | :---------------: | :------------------------ |
|  1.0   | 20xx 年 x 月 x 日 | 1. xxxxxxxxx<br/>2.xxxxxx |
