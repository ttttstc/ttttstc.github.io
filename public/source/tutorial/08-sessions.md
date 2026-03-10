---
title: Session与用户识别
description: OpenClaw完整教程 - Session与用户识别
---

# Session与用户识别

macOS 额外准备

macOS Setup

macOS 用户在安装前需要确保已安装 Xcode Command Line Tools：

xcode-select /-install

如果你需要使用 iMessage 频道或 Apple Notes 技能，这些依赖 macOS 原生的 AppleScript 能力，只有在

macOS 上才能运行。

Windows 用户注意

Windows via WSL2

注意

OpenClaw 官方强烈推荐 Windows 用户通过 WSL2（Windows Subsystem for Linux）运行。直接在

Windows 原生环境下运行可能遇到路径、权限等兼容性问题。

安装 WSL2 后，在 Ubuntu 终端内按 Linux 流程安装即可。

守护进程

Daemon

守护进程让 OpenClaw 在后台持续运行，即使关闭终端也不会中断。不同系统使用不同的进程管理方式：

系统 进程管理 说明

macOS launchd macOS 原生服务管理，开机自启

Linux systemd Linux 标准服务管理， systemctl 控制

安装守护进程后，OpenClaw Gateway 会在 ws://127.0.0.1:18789 持续监听。

## 12 Docker 部署

Docker Deployment

Docker 部署适合需要环境隔离、方便迁移、或在服务器上长期运行的场景。

docker-compose 快速启动

Quick Start

OpenClaw 仓库内置了 docker-compose.yml ，一条命令即可启动：

# 克隆仓库

git clone https://github.com/openclaw/openclaw.git

cd openclaw

# 启动

docker-compose up -d

镜像变体

Image Variants

变体 说明 适用场景

标准镜像 完整功能，包含所有扩展依赖 一般使用，功能全

slim 变体 多阶段构建，体积更小 资源受限环境，CI/CD

sandbox 沙箱环境（Dockerfile.sandbox） 安全隔离，代码执行

sandbox-browser 含浏览器的沙箱 需要浏览器自动化

使用 slim 变体：在 docker-compose.yml 中设置环境变量 OPENCLAW_VARIANT=slim 。v2026.3.7 起支持扩展

依赖预烘焙，容器镜像可预装扩展依赖，减少启动时的安装等待。

挂载目录

Volume Mounts

Docker 部署需要挂载两个关键目录，确保数据持久化：

volumes:

- ~/.openclaw:/root/.openclaw # 配置和状态数据

- ~/openclaw/workspace:/workspace # ⼯作空间（YAML配置⽂件）

重要：不挂载这两个目录，容器重启后所有配置和对话记录都会丢失。 ~/.openclaw 存放运行状态，

workspace 存放 YAML 配置文件。

端口映射

Port Mapping

OpenClaw Gateway 默认监听 18789 端口（WebSocket），Web UI 默认使用 3000 端口。在 docker-

compose.yml 中配置端口映射：

ports:

- "18789:18789" # Gateway WebSocket

- "3000:3000" # Web UI

Podman 兼容

Podman Support

OpenClaw 同样支持 Podman 运行。Podman 是 Docker 的无守护进程替代方案，命令基本兼容：

# 使⽤ Podman 启动

podman-compose up -d

对于需要 rootless 容器运行的环境（如企业安全策略要求），Podman 是更合适的选择。

