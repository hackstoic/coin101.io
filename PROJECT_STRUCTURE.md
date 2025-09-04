# Coin101 项目目录结构

本文档描述了 Coin101 加密货币教育网站的完整项目结构。

## 项目概述

Coin101 是一个基于 Gatsby.js 构建的双语（中英文）加密货币教育网站，提供区块链和加密货币相关的文章和教程。

## 目录结构

```
coin101/
├── .gitignore                    # Git 忽略文件配置
├── LICENSE                       # 项目许可证
├── README.md                     # 项目说明文档
├── package.json                  # Node.js 依赖和脚本配置
├── package-lock.json             # 依赖版本锁定文件
├── gatsby-config.js              # Gatsby 主配置文件
├── gatsby-node.js                # Gatsby 构建时配置
│
├── content/                      # 内容目录（MDX 文章）
│   └── blockchain-basics/        # 区块链基础知识分类
│       ├── index.en.mdx         # 英文版文章
│       └── index.zh.mdx         # 中文版文章
│
├── src/                          # 源代码目录
│   ├── components/               # React 组件目录（当前为空）
│   │
│   ├── images/                   # 图片资源
│   │   └── icon.svg             # 网站图标
│   │
│   ├── pages/                    # 页面组件
│   │   ├── 404.js               # 404 错误页面
│   │   ├── index.js             # 首页（中文界面，包含热门话题导航）
│   │   └── articles.js          # 文章列表页面（支持主题筛选）
│   │
│   └── templates/                # 页面模板
│       └── article.js           # 单篇文章页面模板
│
└── static/                       # 静态资源目录
    └── favicon.ico              # 网站图标
```

## 主要功能模块

### 1. 首页 (src/pages/index.js)
- **功能**: 网站主页，默认显示中文界面
- **特性**: 
  - 响应式设计
  - 热门话题导航卡片（11个主题分类）
  - 现代化 UI 设计
  - 主题筛选链接

### 2. 文章列表页 (src/pages/articles.js)
- **功能**: 显示所有文章并支持按主题筛选
- **特性**:
  - 主题过滤功能（基于 category 字段）
  - URL 参数支持（?topic=xxx）
  - 响应式网格布局
  - 双语文章支持

### 3. 文章模板 (src/templates/article.js)
- **功能**: 单篇文章的显示模板
- **特性**: MDX 内容渲染支持

### 4. 内容管理 (content/)
- **结构**: 按主题分类的目录结构
- **格式**: MDX 文件，支持 frontmatter 元数据
- **双语**: 每个主题包含 .en.mdx 和 .zh.mdx 文件

## 技术栈

- **框架**: Gatsby.js (React-based)
- **样式**: Styled Components
- **内容**: MDX (Markdown + JSX)
- **语言**: JavaScript/JSX
- **部署**: 静态站点生成

## 主题分类

网站支持以下11个主题分类：

1. 监管政策 (regulatory_policy)
2. 应用场景 (application_scenarios) 
3. 实地调研 (field_research)
4. 大咖观点 (expert_opinions)
5. 统计数据 (statistics)
6. 相关公司 (related_companies)
7. 相关工具 (related_tools)
8. 行业报告 (industry_reports)
9. 内容精选 (content_selection)
10. 热点资讯 (hot_news)
11. 基础概念 (basic_concepts)

## 开发说明

### 启动开发服务器
```bash
npm run develop
```

### 构建生产版本
```bash
npm run build
```

### 文章添加流程
1. 在 `content/` 目录下创建新的主题文件夹
2. 添加 `index.en.mdx` 和 `index.zh.mdx` 文件
3. 配置正确的 frontmatter 元数据
4. 确保 category 字段与主题分类匹配

## 配置文件说明

- **gatsby-config.js**: 插件配置、站点元数据
- **gatsby-node.js**: 动态页面生成、路由配置
- **package.json**: 依赖管理、构建脚本

---

*生成时间: $(date)*
*项目版本: Gatsby.js 静态站点*