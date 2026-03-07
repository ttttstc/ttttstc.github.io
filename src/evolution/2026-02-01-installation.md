---
date: 2026-02-01
---

# 安装配置那些坑

今天把开发环境搭建好了，中间遇到了几个坑，记录一下。

## 问题 1：Python 版本

系统默认是 Python 3.9，但项目需要 3.10+。

**解决方案**：使用 pyenv 管理多版本。

```bash
pyenv install 3.11.0
pyenv global 3.11.0
```

## 问题 2：依赖安装失败

某些 C 扩展包编译失败。

**解决方案**：安装 build-essential。

```bash
# Ubuntu/Debian
sudo apt install build-essential

# macOS
xcode-select --install
```

## 问题 3：Redis 连接

本地 Redis 没有启动。

**解决方案**：

```bash
# 使用 Docker 快速启动
docker run -d -p 6379:6379 redis:alpine
```

## 小结

环境问题是最基础也是最重要的，后续要写一个自动安装脚本。
