# 项目背景

# 开发环境

# 项目目录

```
.
├── README.md                                    // 项目说明文档
├── build                                        // 项目发布配置
│   ├── webpack.analysis.js                      // 性能分析配置
│   ├── webpack.app-dev.js                       // 移动端测试环境配置
│   ├── webpack.app-prod.js                      // 移动端生产环境配置
│   ├── webpack.comon.js                         // 基础发布配置
│   ├── webpack.dev.js                           // 测试环境配置
│   └── webpack.prod.js                          // 生产换进配置
├── package.json                                 // 依赖配置文件
├── public                                       // 静态资源文件夹
├── src
│   ├── assets                                    // 资源文件夹
│   ├── components                                // 通用组件
│   ├── config                                    // 配置文件
│   ├── data                                      // json数据
│   ├── index.css                                 // 入口css
│   ├── index.js                                  // 入口jsx
│   ├── layout                                    // 通用布局模板
│   ├── models                                    // 通用数据模型
│   ├── mobile                                    // 移动端
│   │   ├── components                            // 移动端组件
│   │   ├── layout                                // 移动端布局模板
│   │   ├── models                                // 移动端数据模型
│   │   ├── page                                  // 移动端页面
│   │   └── services                              // 移动端服务
│   ├── pc                                        // PC端
│   │   ├── components                            // PC端组件
│   │   ├── layout                                // PC端布局模版
│   │   ├── models                                // PC端数据模型
│   │   ├── page                                  // PC端页面
│   │   └── services                              // PC端服务
│   └── utils                                     // 工具文件夹
├── tsconfig.json                                 // typescript 配置文件
├── types                                         // typescript 类型声明文件夹
│   └── source.d.ts                               // 资源模块声明
└── dist                                          // 打包输出文件夹
    ├── pc                                        // PC端
    └── mobile                                    // 移动端
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
npm run eslint
#OR
yarn eslint
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
