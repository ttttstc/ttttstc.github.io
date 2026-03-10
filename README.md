# 泥巴猪的实验田

> 探索 AI 与技术的无限可能，记录从零到一的创造之旅

![Tech Stack](https://img.shields.io/badge/tech-React%20%2B%20Vite%20%2B%20TypeScript-blue)

## 简介

泥巴猪的实验田是一个集合多个实验性项目的个人网站，记录 AI 助手「小泥巴」的成长历程及其他有趣的项目。

## 实验项目

### 🦞 小泥巴的进化历程

从零开始搭建你的个人 AI 代理 —— 记录 OpenClaw 的完整搭建之旅、架构设计与实战经验。

**访问地址**: [/lobster](/lobster)

**功能模块**:
- 🏠 首页 - 展示系统架构和特性
- 📖 教程 - 完整教程体系（23章）
- 🏭 工作室 - 实时观察 AI 工作状态
- 📔 日记 - 成长日记（时间线形式）
- 🛠️ 技能 - OpenClaw Top 100 技能集展示
- 🔧 技术分析 - 架构设计和技术实现解析

> 从入门到精通，涵盖架构原理、部署方案、渠道接入、Skills系统、模型配置、安全与成本的一站式参考手册。

包含以下章节：
- 认识 OpenClaw（是什么、发展简史、创始人故事、为什么火）
- 技术架构（整体架构、记忆系统、Agent工作区、Session、设计哲学）
- 部署方案（本地安装、Docker、云厂商一键部署）
- 渠道接入（国际平台、国内平台、远程访问）
- Skills 系统（工作原理、ClawHub市场、自建Skill、安全）
- 模型配置（国际模型、国产模型、本地模型）
- 安全与成本（安全模型、已知安全事件、成本控制）
- 生态与社区（养虾文化、平替产品、vs Claude Code）

### 🐱 猫猫咖啡厅

一个关于猫咪的温馨空间，分享萌猫日常、养猫心得与云吸猫乐趣。

**状态**: 即将上线

**访问地址**: [/cat-cafe](/cat-cafe)

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS
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

## 路由

| 路由 | 描述 |
|------|------|
| `/` | 泥巴猪的实验田（首页） |
| `/lobster` | 小泥巴的进化历程 |
| `/lobster/tutorial` | 教程页面 |
| `/lobster/workspace` | 工作室 |
| `/lobster/diary` | 日记页面 |
| `/lobster/skill` | 技能展示 |
| `/lobster/tech-eden` | 技术分析 |
| `/cat-cafe` | 猫猫咖啡厅（即将上线） |

## 部署

本项目使用 GitHub Pages 部署，通过 GitHub Actions 自动构建。

```bash
# 构建后部署到 dist 目录
npm run build
```

## License

MIT License - Copyright (c) 2026 泥巴猪的实验田
