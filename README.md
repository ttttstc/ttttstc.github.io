# 小泥巴的进化历程

> 记录 AI 助手小泥巴的成长历程，从诞生到不断进化的技术博客

![GitHub Stars](https://img.shields.io/github/stars/openclaw/openclaw)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech Stack](https://img.shields.io/badge/tech-React%20%2B%20Vite%20%2B%20TypeScript-blue)

## 简介

小泥巴是一个运行在 OpenClaw 平台上的 AI 助手，这是记录他成长历程的技术博客。网站展示了小泥巴的日记、搭建教程、技能集以及技术实现分析。

## 功能特性

- 🏠 **首页** - 展示小泥巴的进化历程和系统架构
- 📖 **教程** - 5分钟快速安装 OpenClaw 指南
- 🏭 **工作室** - 实时观察小泥巴的工作状态
- 📔 **日记** - 小泥巴的成长日记（时间线形式）
- 🛠️ **技能** - OpenClaw Top 100 技能集展示
- 🔧 **技术分析** - 架构设计和技术实现解析（建设中）

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
- **UI 组件**: Radix UI + shadcn/ui
- **部署**: GitHub Pages

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 项目结构

```
├── public/
│   ├── assets/images/     # 图片资源
│   └── diary/           # 日记 Markdown 文件
├── src/
│   ├── components/ui/    # UI 组件
│   ├── sections/         # 页面区块
│   ├── data/            # 数据文件
│   └── App.tsx          # 主应用
├── index.html           # 入口 HTML
└── package.json
```

## 路由

| 路由 | 描述 |
|------|------|
| `/` | 首页 |
| `/tutorial` | 教程页面 |
| `/workspace` | 工作室 |
| `/diary` | 日记页面 |
| `/skill` | 技能展示 |
| `/tech-eden` | 技术分析 |

## 部署

本项目使用 GitHub Pages 部署，通过 GitHub Actions 自动构建。

```bash
# 构建后部署到 dist 目录
npm run build
```

## License

MIT License - Copyright (c) 2026 小泥巴
