# 项目背景

# 开发环境

# 项目目录

```
.
├── .browserslistrc                            // browserslist配置
├── .env.dev                                   // 开发环境配置
├── .env.sit                                   // 测试环境配置
├── .env.uat                                   // 生产环境配置
├── .eslintrc.json                             // eslint配置
├── .gitignore                                 // git忽略配置
├── .prettierrc.json                           // prettier配置
├── .vscode                                    // vscode工作区配置
│   └── ...
├── README.md
├── babel.config.js                            // babel配置
├── package.json                               // 项目依赖描述文件
├── tsconfig.json                              // typescript配置
├── public                                     // 无需编译文件
│   └── ...
├── src                                        // 源码
│   ├── App.vue                                // 项目根组件
│   ├── assets                                 // 项目静态资源文件
│   │   ├── images                             // 图片资源
│   │   │   └── ...
│   │   └── scss                               // 样式资源
│   │       └── ...
│   ├── components                             // 项目组件文件夹
│   │   └── ...
│   ├── configs                                // 配置、常量文件夹
│   │   └── ...
│   ├── directives                             // 自定义指令
│   │   └── ...
│   ├── main.ts                                // 项目入口
│   ├── models                                 // 数据模型
│   │   └── ...
│   ├── pages                                  // 项目页面
│   │   └── ...
│   ├── router                                 // 路由管理
│   │   └── ...
│   ├── services                               // 项目服务文件夹
│   │   └── ...
│   ├── store                                  // 状态管理
│   │   ├── index.ts                           // 全局状态
│   │   └── modules                            // 状态模块
│   │       └── ...
│   └── utils                                  // 工具
│       └── ...
├── types                                      // typescript声明
│   ├── shims-tsx.d.ts
│   ├── shims-vue.d.ts
│   └── ...
└── vue.config.js                              // webpack配置
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
