# Coin101 - 加密货币教育网站

<p align="center">
  <img alt="Coin101" src="https://img.shields.io/badge/Coin101-Cryptocurrency%20Education-blue" />
  <img alt="Gatsby" src="https://img.shields.io/badge/Built%20with-Gatsby-663399" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green" />
</p>

一个基于 Gatsby.js 构建的双语（中英文）加密货币教育网站，提供全面的区块链和加密货币相关知识内容。

## ✨ 特性

- 🌐 **双语支持**: 完整的中英文内容
- 📱 **响应式设计**: 适配各种设备
- ⚡ **高性能**: 基于 Gatsby.js 的静态站点生成
- 📚 **丰富内容**: 12个主题分类的教育文章
- 🎨 **现代化UI**: 使用 Styled Components 的美观界面
- 🔍 **智能筛选**: 支持按主题筛选文章

## 🚀 快速开始

### 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn

### 安装依赖

```bash
cd coin101
npm install
```

### 启动开发服务器

```bash
npm start
# 或者
npm run develop
```

网站将在 `http://localhost:8000` 启动

### 构建生产版本

```bash
npm run build
```

构建文件将生成在 `public/` 目录中

## 📖 内容主题

网站包含以下12个主题分类的教育内容：

| 主题 | 描述 |
|------|------|
| 🏛️ **监管政策** | 全球加密货币法规和政策分析 |
| 🔧 **应用场景** | 区块链技术的实际应用案例 |
| 🔍 **实地调研** | 行业深度调研和分析报告 |
| 👨‍💼 **专家观点** | 行业专家的见解和预测 |
| 📊 **统计数据** | 市场数据和趋势分析 |
| 🏢 **相关公司** | 重要企业和项目介绍 |
| 🛠️ **相关工具** | 实用的加密货币工具推荐 |
| 📈 **行业报告** | 深度行业研究报告 |
| 📝 **内容精选** | 高质量内容筛选指南 |
| 🔥 **热点资讯** | 最新行业动态和新闻 |
| 📚 **基础概念** | 区块链和加密货币基础知识 |
| 💰 **投资分析** | 投资策略和风险分析 |
| 📊 **技术分析** | 技术指标和分析方法 |

## 🏗️ 项目结构

```
coin101/
├── content/                  # MDX 文章内容
│   ├── application-scenarios/
│   ├── basic-concepts/
│   ├── content-selection/
│   ├── expert-opinions/
│   ├── field-research/
│   ├── hot-news/
│   ├── industry-reports/
│   ├── investment-analysis/
│   ├── regulatory-policy/
│   ├── related-companies/
│   ├── related-tools/
│   ├── statistics/
│   └── technical-analysis/
├── src/
│   ├── components/           # React 组件
│   ├── images/              # 图片资源
│   ├── pages/               # 页面组件
│   │   ├── index.js         # 首页
│   │   ├── articles.js      # 文章列表页
│   │   └── 404.js          # 404页面
│   └── templates/           # 页面模板
│       └── article.js       # 文章模板
├── static/                  # 静态资源
├── gatsby-config.js         # Gatsby 配置
├── gatsby-node.js          # 构建配置
└── package.json            # 项目依赖
```

## 🛠️ 技术栈

- **前端框架**: [Gatsby.js](https://www.gatsbyjs.com/) (React-based)
- **样式方案**: [Styled Components](https://styled-components.com/)
- **内容格式**: [MDX](https://mdxjs.com/) (Markdown + JSX)
- **语言**: JavaScript/JSX
- **部署**: 静态站点生成

## 📝 内容管理

### 添加新文章

1. 在 `content/` 目录下创建新的主题文件夹
2. 添加 `index.en.mdx`（英文）和 `index.zh.mdx`（中文）文件
3. 配置 frontmatter 元数据：

```yaml
---
title: "文章标题"
date: "2024-01-15"
author: "作者名称"
category: "主题分类"
language: "zh" # 或 "en"
slug: "article-slug"
description: "文章描述"
tags: ["标签1", "标签2"]
---
```

### 支持的主题分类

- `regulatory_policy` - 监管政策
- `application_scenarios` - 应用场景
- `field_research` - 实地调研
- `expert_opinions` - 专家观点
- `statistics` - 统计数据
- `related_companies` - 相关公司
- `related_tools` - 相关工具
- `industry_reports` - 行业报告
- `content_selection` - 内容精选
- `hot_news` - 热点资讯
- `basic_concepts` - 基础概念
- `investment_analysis` - 投资分析
- `technical_analysis` - 技术分析

## 🌐 部署

### Netlify 部署

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/coin101)

### 手动部署

1. 构建项目：`npm run build`
2. 将 `public/` 目录部署到任何静态托管服务

## 🤝 贡献

欢迎贡献内容和代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

如有问题或建议，请通过以下方式联系：

- 📧 Email: contact@coin101.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/coin101/issues)

---

<p align="center">
  Made with ❤️ for the cryptocurrency education community
</p>
