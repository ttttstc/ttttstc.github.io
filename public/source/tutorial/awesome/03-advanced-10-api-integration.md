# 第10章 API服务集成（绘图/Notion/视频/语音）

> 接入第三方服务，让AI能力更强大

本章将介绍如何将OpenClaw与各种第三方API服务集成，扩展AI的能力边界。重点介绍4个实用场景的配置方法：AI绘图、Notion数据同步、视频生成和语音合成。

💡 **本章重点**：API集成的配置方法和基础使用。详细的实战案例请参考第14章《创意应用探索》。

---

## 10.1 AI绘图服务集成

### 10.1.1 服务选择

OpenClaw支持多种AI绘图服务：

| 服务 | 特点 | 成本 | 推荐场景 |
|------|------|------|----------|
| Gemini图像生成 | 中文好、白板图擅长 | 低（0.05-0.4元/张） | 教程配图、白板图 |
| DALL-E 3 | 质量高、风格多 | 中 | 创意设计 |
| Midjourney | 艺术性强 | 高 | 艺术创作 |
| Stable Diffusion | 开源免费 | 免费（需自建） | 批量生成 |

**推荐：Gemini图像生成**
- ✅ 集成简单（Chat API）
- ✅ 成本低廉
- ✅ 中文支持好
- ✅ 适合教程配图、白板图

### 10.1.2 安装bananapro-image-gen Skill

**方式1：从GitHub安装（推荐）**

```bash
# 克隆技能仓库
git clone https://github.com/xianyu110/awesome-openclaw-tutorial.git

# 复制到OpenClaw的skills目录
cp -r expert-skills-hub/skills/bananapro-image-gen ~/.openclaw/skills/

# 安装依赖
cd ~/.openclaw/skills/bananapro-image-gen
pip3 install -r requirements.txt
```text
**方式2：使用npx命令**

```bash
npx skills add https://github.com/xianyu110/awesome-openclaw-tutorial --skill bananapro-image-gen
```text
**验证安装：**

```bash
ls ~/.openclaw/skills/bananapro-image-gen
# 应该看到：SKILL.md, README.md, scripts/, test.sh 等文件
```text
### 10.1.3 配置API

**步骤1：获取API 密钥**

1. 访问中转API服务商（推荐支持Gemini的服务）
2. 注册并充值（建议10-20元测试）
3. 获取API Key

**步骤2：配置 OpenClaw**

```bash
nano ~/.openclaw/openclaw.json
```text
添加配置：

```json
{
  "api": {
    "gemini": {
      "apiKey": "your-api-key-here",
      "baseUrl": "https://apipro.maynor1024.live",
      "model": "gemini-3-pro-image-preview"
    }
  }
}
```text
**步骤3：测试连接**

```bash
cd ~/.openclaw/skills/bananapro-image-gen
bash test.sh
```text
如果看到生成的图片，说明配置成功！

**成本参考：**
- 生成1张1K图片：约0.05-0.1元
- 生成1张2K图片：约0.1-0.2元
- 生成1张4K图片：约0.2-0.4元

💡 **省钱技巧：** 日常使用1K分辨率即可，只有需要打印或高清展示时才用2K/4K。

### 10.1.4 基础使用教程

安装完成后，你可以直接在OpenClaw中使用绘图功能。

**示例1：生成Logo**

```
你：帮我设计1个Logo，主题是"超级个体"，要求：
- 简洁现代
- 使用蓝色和橙色
- 包含一个人和AI的元素
- 适合用在社交媒体头像
```text
OpenClaw会自动调用绘图Skill，生成Logo并保存到本地。

**示例2：生成白板图**

```
你：生成一张白板图片，手写字体风格，内容是：

标题：OpenClaw核心优势

4大优势：
1. 本地部署 - 保护隐私
2. 文件访问 - 智能搜索  
3. Skills扩展 - 无限可能
4. 多平台支持 - 随时随地

用手写字体，添加箭头、框图等手绘元素
```text
**示例3：生成社交媒体配图**

```
你：生成一张小红书配图，主题是"AI时代的超级个体"，要求：
- 9:16竖版
- 温暖的配色
- 包含文字：一个人 + AI = 无限可能
- 简约风格
```text
### 10.1.5 命令行使用（进阶）

如果你想批量生成图片或集成到自动化脚本中，可以直接使用命令行：

**基础用法：**

```bash
cd ~/.openclaw/skills/bananapro-image-gen

# 生成图片（OpenAI格式）
python3 scripts/generate_image.py \
    --prompt "1个简约的Logo设计，主题是AI助手" \
    --filename output.png \
    --api-format openai

# 生成高清图片（Gemini格式）
python3 scripts/generate_image.py \
    --prompt "一张白板图，手写风格" \
    --filename whiteboard.png \
    --api-format gemini \
    --resolution 2K
```text
**参数说明：**

| 参数 | 说明 | 默认值 | 示例 |
|------|------|--------|------|
| `--prompt` | 图片描述（必填） | - | "1个Logo设计" |
| `--filename` | 输出文件名 | output.png | my_image.png |
| `--api-format` | API格式 | openai | openai/gemini |
| `--resolution` | 分辨率 | 1K | 1K/2K/4K |

**批量生成示例：**

```bash
# 创建批量生成脚本
cat > batch_generate.sh << 'EOF'
#!/bin/bash

# 生成5张不同主题的图片
prompts=(
    "Logo设计：超级个体"
    "白板图：AI工作流"
    "海报：效率提升10倍"
    "配图：知识管理系统"
    "图标：自动化工具"
)

for i in "${!prompts[@]}"; do
    echo "生成第 $((i+1)) 张图片..."
    python3 scripts/generate_image.py \
        --prompt "${prompts[$i]}" \
        --filename "output_$((i+1)).png"
done

echo "批量生成完成！"
EOF

chmod +x batch_generate.sh
./batch_generate.sh
```text
### 10.1.6 提示词技巧

好的提示词是生成高质量图片的关键。以下是一些实用技巧：

**技巧1：明确风格**

```
❌ 不好：生成一张图片
✅ 好：生成一张白板图片，手写字体风格，简约现代
```text
**技巧2：详细描述**

```
❌ 不好：画1个Logo
✅ 好：设计1个Logo，圆形，蓝色渐变，中间是1个抽象的大脑图案，
      周围有数据流动的线条，现代科技感
```text
**技巧3：指定元素**

```
❌ 不好：画一张架构图
✅ 好：画一张系统架构图，包含：
      - 用户端（手机图标）
      - 网关（云图标）
      - 数据库（圆柱图标）
      - 用箭头连接各个组件
      - 添加文字标注
```text
**技巧4：参考风格**

```
✅ 好：生成一张图片，风格类似：
      - 手绘白板风格
      - 扁平化设计
      - 水彩画风格
      - 像素艺术风格
```text
**提示词模板库：**

```bash
# Logo设计模板
"设计1个[主题]Logo，要求：
- 形状：[圆形/方形/抽象]
- 颜色：[主色调]
- 元素：[核心元素]
- 风格：[现代/复古/简约]
- 用途：[社交媒体/网站/名片]"

# 白板图模板
"生成一张白板图片，手写字体风格，内容是：
标题：[标题文字]
核心要点：
1. [要点1]
2. [要点2]
3. [要点3]
用手写字体，添加箭头、框图、下划线等手绘元素"

# 社交媒体配图模板
"生成一张[平台]配图，主题是[主题]，要求：
- 尺寸：[9:16/16:9/1:1]
- 配色：[温暖/冷色/对比]
- 文字：[核心文案]
- 风格：[简约/丰富/创意]"

# 架构图模板
"生成一张[系统名称]架构图，包含：
组件：
- [组件1]：[描述]
- [组件2]：[描述]
- [组件3]：[描述]
连接关系：
- [组件1] → [组件2]
- [组件2] → [组件3]
用框图、箭头、图标等元素，清晰展示系统结构"
```text
### 10.1.7 实战案例

**案例1：为教程生成章节总结图**

场景：你在写一本OpenClaw教程，需要为每章生成一张总结白板图。

```bash
# 使用提供的测试脚本
cd ~/.openclaw/skills/bananapro-image-gen
bash test_chapters.sh
```text
这个脚本会自动生成4张图片：
- `chapter1_summary.png` - 第1章总结
- `architecture.png` - 核心架构图
- `chapter2_deployment.png` - 部署方式对比
- `chapter3_persona.png` - 人设配置

**效果：**
- 时间节省：手动画图需要30分钟/张，AI生成只需1分钟
- 成本：每张约0.1元
- 质量：手写风格，适合教程配图

**案例2：批量生成社交媒体配图**

场景：你是内容创作者，需要为10篇文章生成配图。

```python
# create_social_images.py
import subprocess
import json

# 文章标题列表
articles = [
    "AI时代的超级个体",
    "效率提升10倍的秘密",
    "一个人的无限可能",
    # ... 更多标题
]

for i, title in enumerate(articles, 1):
    prompt = f"""生成一张小红书配图，主题是"{title}"，要求：
    - 9:16竖版
    - 温暖的配色
    - 包含标题文字
    - 简约现代风格
    """
    
    subprocess.run([
        "python3", "scripts/generate_image.py",
        "--prompt", prompt,
        "--filename", f"social_{i}.png",
        "--resolution", "2K"
    ])
    
    print(f"✅ 生成第{i}张配图")

print("🎉 批量生成完成！")
```text
**效果：**
- 生成10张配图：约10分钟
- 成本：约2元（2K分辨率）
- 手动设计：需要5小时+，成本500元+

**案例3：自动化Logo设计**

场景：你需要为多个项目快速生成Logo方案。

```bash
# 创建Logo生成脚本
cat > generate_logos.sh << 'EOF'
#!/bin/bash

# 项目列表
projects=(
    "超级个体:蓝色:现代科技"
    "知识管理:绿色:简约"
    "效率工具:橙色:活力"
)

for project in "${projects[@]}"; do
    IFS=':' read -r name color style <<< "$project"
    
    prompt="设计1个${name}的Logo，要求：
    - 主色调：${color}
    - 风格：${style}
    - 简洁现代
    - 适合用在社交媒体"
    
    python3 scripts/generate_image.py \
        --prompt "$prompt" \
        --filename "logo_${name}.png"
    
    echo "✅ 生成 ${name} Logo"
done
EOF

chmod +x generate_logos.sh
./generate_logos.sh
```text
### 10.1.8 常见问题

**Q1：生成的图片不符合预期怎么办？**

A：优化提示词，增加更多细节描述。可以尝试：
- 添加参考风格
- 明确指定元素
- 调整分辨率
- 多生成几次选最好的

**Q2：如何控制成本？**

A：
- 日常使用1K分辨率（约0.05元/张）
- 批量生成时使用脚本，避免重复生成
- 设置每日预算上限
- 使用中转API，成本更低

**Q3：支持哪些图片格式？**

A：目前支持PNG格式，这是最通用的格式。如需其他格式，可以使用转换工具：

```bash
# 转换为JPG
convert output.png output.jpg

# 转换为WebP（更小的文件）
convert output.png output.webp
```text
**Q4：生成速度慢怎么办？**

A：
- 检查网络连接
- 使用国内中转API
- 降低分辨率（1K最快）
- 避免高峰时段

**Q5：如何集成到自动化工作流？**

A：参考10.1.5的批量生成示例，或者在OpenClaw的自动化任务中调用：

```python
# 在OpenClaw的自动化脚本中
from skills.nano_banana_image_gen import generate_image

# 生成图片
image_path = generate_image(
    prompt="你的提示词",
    filename="output.png",
    resolution="1K"
)

print(f"图片已生成：{image_path}")
```text
### 10.1.9 进阶技巧

**技巧1：使用两种API格式**

Skill支持两种API格式，可以根据需求切换：

```bash
# OpenAI格式（兼容性好）
python3 scripts/generate_image.py \
    --api-format openai \
    --prompt "你的提示词"

# Gemini格式（功能更强）
python3 scripts/generate_image.py \
    --api-format gemini \
    --prompt "你的提示词" \
    --resolution 2K
```text
**技巧2：图片后处理**

生成图片后，可以使用Python进行后处理：

```python
from PIL import Image, ImageDraw, ImageFont

# 打开生成的图片
img = Image.open("output.png")

# 添加水印
draw = ImageDraw.Draw(img)
font = ImageFont.truetype("Arial.ttf", 36)
draw.text((10, 10), "© 2026", fill="white", font=font)

# 调整大小
img = img.resize((800, 600))

# 保存
img.save("output_processed.png")
```text
**技巧3：创建图片模板**

```python
# image_templates.py
TEMPLATES = {
    "logo": """设计1个{theme}Logo，要求：
    - 形状：{shape}
    - 颜色：{color}
    - 风格：{style}
    - 用途：{usage}""",
    
    "whiteboard": """生成一张白板图片，手写字体风格，内容是：
    标题：{title}
    {content}
    用手写字体，添加箭头、框图等手绘元素""",
    
    "social": """生成一张{platform}配图，主题是{theme}，要求：
    - 尺寸：{ratio}
    - 配色：{color_scheme}
    - 文字：{text}
    - 风格：{style}"""
}

def generate_from_template(template_name, **kwargs):
    prompt = TEMPLATES[template_name].format(**kwargs)
    # 调用生成函数
    return generate_image(prompt)

# 使用模板
generate_from_template(
    "logo",
    theme="AI助手",
    shape="圆形",
    color="蓝色渐变",
    style="现代科技",
    usage="社交媒体"
)
```text
---

## 10.2 Notion数据同步封装

Notion是流行的知识管理工具，通过OpenClaw集成Notion API，可以实现自动化的数据同步和内容管理。

![Notion工作空间 - 知识管理和协作平台](https://upload.maynor1024.live/file/1770869312061_image-20260212120817415.png)

### 10.2.1 为什么要集成Notion？

**应用场景：**
- 📝 自动创建笔记：OpenClaw处理的内容自动保存到Notion
- 📊 数据库同步：自动更新Notion数据库
- 📅 任务管理：自动创建和更新任务
- 🔄 双向同步：Notion和OpenClaw数据互通

**效率提升：**
- 手动复制粘贴：5分钟/次
- 自动同步：5秒/次
- 效率提升：98%

### 10.2.2 Notion集成方案

由于 ClawHub 市场上目前没有现成的 Notion Skills，你可以通过以下方式集成 Notion：

**方案1：使用 Notion API（推荐）**

直接使用 Notion 官方 API 进行集成：

```bash
# 安装 Notion SDK
npm install @notionhq/client

# 或使用 Python SDK
pip install notion-client
```text
**方案2：自定义 Skill**

创建自己的 Notion Skill：

```bash
# 创建 Skill 目录
mkdir -p ~/.openclaw/skills/my-notion-skill
cd ~/.openclaw/skills/my-notion-skill

# 创建 skill.json
cat > skill.json << 'EOF'
{
  "name": "my-notion-skill",
  "version": "1.0.0",
  "description": "Custom Notion integration",
  "main": "index.js"
}
EOF

# 安装依赖
npm init -y
npm install @notionhq/client
```text
**方案3：使用 MCP 服务器**

如果你使用的是支持 MCP (Model Context Protocol) 的版本，可以配置 Notion MCP 服务器：

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-notion"],
      "env": {
        "NOTION_API_KEY": "your-api-key"
      }
    }
  }
}
```text
💡 **注意**：由于 ClawHub 市场的 Skills 在不断更新，建议：
1. 访问 https://clawhub.ai 查看最新可用的 Skills
2. 使用 `npx clawhub@latest search notion` 搜索相关 Skills
3. 如果没有现成的 Skill，可以自己创建或使用 API 直接集成

### 10.2.3 Notion API 完整配置指南

要使用 Notion skill，您需要先进行一些设置。这个技能通过 Notion API 来管理页面、数据库和块。

#### 步骤1：创建 Notion Integration

1. **访问集成页面**
   - 打开浏览器，访问 https://www.notion.so/my-integrations
   - 使用你的 Notion 账号登录

2. **创建新集成**
   - 点击页面右上角的 "+ New integration" 按钮
   - 填写集成信息：
     - **Name**：OpenClaw Integration（或你喜欢的名称）
     - **Associated workspace**：选择你要使用的工作区
     - **Logo**：可选，上传1个图标
   
3. **配置权限**
   - 在 "Capabilities" 部分，勾选以下权限：
     - ✅ **Read content**：读取页面和数据库内容
     - ✅ **Update content**：更新现有内容
     - ✅ **Insert content**：创建新页面和数据库条目
     - ✅ **Read comments**：读取评论（可选）
     - ✅ **Insert comments**：添加评论（可选）
   
4. **提交创建**
   - 点击 "Submit" 按钮
   - 系统会生成1个 API 密钥（Secret）

#### 步骤2：获取并保存 API Key

1. **复制 API Key**
   - 在集成详情页面，找到 "Internal Integration Token"
   - 点击 "Show" 按钮显示密钥
   - 点击 "Copy" 按钮复制密钥
   - API 密钥格式通常是：`secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

2. **保存 API Key 到配置文件**

   **方式1：使用 OpenClaw 配置文件**
   ```bash
   # 编辑 OpenClaw 配置
   nano ~/.openclaw/openclaw.json
   ```

   添加 Notion 配置：
   ```json
   {
     "api": {
       "notion": {
         "apiKey": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
         "version": "2022-06-28"
       }
     }
   }
   ```

   **方式2：使用环境变量**
   ```bash
   # 添加到 ~/.bashrc 或 ~/.zshrc
   export NOTION_API_KEY="secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
   export NOTION_VERSION="2022-06-28"
   
   # 重新加载配置
   source ~/.bashrc  # 或 source ~/.zshrc
   ```

   **方式3：使用独立配置文件**
   ```bash
   # 创建 Notion 配置文件
   mkdir -p ~/.openclaw/config
   cat > ~/.openclaw/config/notion.json << 'EOF'
   {
     "apiKey": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "version": "2022-06-28"
   }
   EOF
   
   # 设置文件权限（保护密钥安全）
   chmod 600 ~/.openclaw/config/notion.json
   ```

#### 步骤3：分享页面/数据库给 Integration

这是最关键的一步！即使有了 API Key，Integration 也只能访问明确分享给它的页面和数据库。

**分享单个页面：**

1. 打开你想要 OpenClaw 访问的 Notion 页面
2. 点击页面右上角的 "Share" 按钮
3. 在弹出的对话框中，点击 "Invite" 输入框
4. 搜索你创建的集成名称（例如：OpenClaw Integration）
5. 点击集成名称，然后点击 "Invite"
6. 现在这个页面及其所有子页面都可以被 Integration 访问了

**分享数据库：**

1. 打开你的 Notion 数据库页面
2. 点击右上角的 "..." 菜单
3. 选择 "Connections" → "Connect to"
4. 搜索并选择你的集成（OpenClaw Integration）
5. 点击 "Confirm"

**批量分享（推荐）：**

如果你想让 OpenClaw 访问整个工作区：
1. 在工作区的根页面（通常是 "Workspace" 页面）
2. 点击 "Share" → 连接你的 Integration
3. 这样所有子页面和数据库都会被自动分享

#### 步骤4：获取 Database ID（如需操作数据库）

如果你要让 OpenClaw 操作特定的数据库，需要获取 Database ID。

**方法1：从 URL 获取**

1. 在浏览器中打开 Notion 数据库页面
2. 复制浏览器地址栏的 URL
3. Database ID 是 URL 中的 32 位字符串

示例 URL：
```
https://www.notion.so/workspace/DatabaseName-1234567890abcdef1234567890abcdef?v=...
                                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                                 这部分就是 Database ID
```text
去掉连字符后的格式：
```
1234567890abcdef1234567890abcdef
```text
**方法2：使用 Notion API 查询**

```bash
# 使用 curl 查询所有可访问的数据库
curl -X POST https://api.notion.com/v1/search \
  -H "Authorization: Bearer secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \
  -H "Notion-Version: 2022-06-28" \
  -H "Content-Type: application/json" \
  -d '{
    "filter": {
      "property": "object",
      "value": "database"
    }
  }'
```text
**保存 Database ID：**

```bash
# 添加到 OpenClaw 配置
nano ~/.openclaw/openclaw.json
```text
```json
{
  "api": {
    "notion": {
      "apiKey": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "version": "2022-06-28"
    }
  },
  "notion": {
    "databases": {
      "notes": "1234567890abcdef1234567890abcdef",
      "tasks": "abcdef1234567890abcdef1234567890",
      "projects": "567890abcdef1234567890abcdef1234"
    },
    "defaultDatabase": "notes"
  }
}
```

#### 步骤5：测试连接

**测试1：使用 curl 测试**

```bash
# 设置变量
NOTION_API_KEY="secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
NOTION_VERSION="2022-06-28"

# 测试 API 连接
curl -X GET https://api.notion.com/v1/users/me \
  -H "Authorization: Bearer $NOTION_API_KEY" \
  -H "Notion-Version: $NOTION_VERSION"

# 如果成功，会返回你的用户信息
```text
**测试2：查询数据库**

```bash
# 查询特定数据库
DATABASE_ID="1234567890abcdef1234567890abcdef"

curl -X POST "https://api.notion.com/v1/databases/$DATABASE_ID/query" \
  -H "Authorization: Bearer $NOTION_API_KEY" \
  -H "Notion-Version: $NOTION_VERSION" \
  -H "Content-Type: application/json" \
  -d '{}'

# 如果成功，会返回数据库中的条目
```text
**测试3：创建页面**

```bash
# 在数据库中创建1个测试页面
curl -X POST https://api.notion.com/v1/pages \
  -H "Authorization: Bearer $NOTION_API_KEY" \
  -H "Notion-Version: $NOTION_VERSION" \
  -H "Content-Type: application/json" \
  -d '{
    "parent": {
      "database_id": "'$DATABASE_ID'"
    },
    "properties": {
      "Name": {
        "title": [
          {
            "text": {
              "content": "OpenClaw 测试页面"
            }
          }
        ]
      }
    }
  }'

# 如果成功，会返回新创建页面的信息
```text
**测试4：使用 OpenClaw 测试**

```bash
# 如果安装了 Notion Skill
openclaw notion test

# 或者直接在 OpenClaw 中测试
你：测试 Notion 连接

OpenClaw：正在测试 Notion API 连接...

✅ API 连接成功！

📊 连接信息：
• API 版本：2022-06-28
• 用户名：Your Name
• 工作区：Your Workspace
• 可访问页面：15个
• 可访问数据库：3个

📁 可用数据库：
1. 笔记数据库 (notes)
2. 任务数据库 (tasks)
3. 项目数据库 (projects)

✅ Notion 集成配置完成！
```text
#### 常见问题排查

**问题1：API 调用返回 401 Unauthorized**

原因：API Key 错误或未正确配置

解决方案：
```bash
# 检查 API Key 格式
echo $NOTION_API_KEY
# 应该是：secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# 重新复制 API Key
# 访问 https://www.notion.so/my-integrations
# 重新复制密钥并更新配置
```text
**问题2：API 调用返回 404 Not Found**

原因：页面或数据库未分享给 Integration

解决方案：
1. 确认页面/数据库已分享给 Integration
2. 检查 Database ID 是否正确
3. 确认 Integration 有访问权限

**问题3：无法创建页面**

原因：Integration 缺少 "Insert content" 权限

解决方案：
1. 访问 https://www.notion.so/my-integrations
2. 选择你的 Integration
3. 在 "Capabilities" 中勾选 "Insert content"
4. 保存更改

**问题4：Database ID 找不到**

解决方案：
```bash
# 使用 API 搜索所有数据库
curl -X POST https://api.notion.com/v1/search \
  -H "Authorization: Bearer $NOTION_API_KEY" \
  -H "Notion-Version: $NOTION_VERSION" \
  -H "Content-Type: application/json" \
  -d '{
    "filter": {
      "property": "object",
      "value": "database"
    }
  }' | jq '.results[] | {id: .id, title: .title}'
```text
#### 安全建议

**1. 保护 API Key**
```bash
# 设置配置文件权限
chmod 600 ~/.openclaw/config/notion.json

# 不要将 API Key 提交到 Git
echo "*.json" >> ~/.openclaw/.gitignore
echo "openclaw.json" >> ~/.gitignore
```text
**2. 使用环境变量**
```bash
# 在 ~/.bashrc 或 ~/.zshrc 中设置
export NOTION_API_KEY="secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# 在脚本中使用
NOTION_API_KEY="${NOTION_API_KEY}"
```text
**3. 定期轮换密钥**
```bash
# 每3-6个月更换一次 API Key
# 1. 在 Notion 中创建新的 Integration
# 2. 更新配置文件
# 3. 删除旧的 Integration
```text
**4. 最小权限原则**
- 只授予必要的权限
- 只分享需要访问的页面/数据库
- 定期审查 Integration 的访问权限

#### 完整配置示例

```json
{
  "api": {
    "notion": {
      "apiKey": "secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "version": "2022-06-28",
      "timeout": 30000,
      "retries": 3
    }
  },
  "notion": {
    "databases": {
      "notes": "1234567890abcdef1234567890abcdef",
      "tasks": "abcdef1234567890abcdef1234567890",
      "projects": "567890abcdef1234567890abcdef1234",
      "meetings": "890abcdef1234567890abcdef1234567"
    },
    "defaultDatabase": "notes",
    "autoSync": true,
    "syncInterval": 300,
    "templates": {
      "note": {
        "properties": {
          "Tags": ["学习笔记"],
          "Status": "草稿"
        }
      },
      "task": {
        "properties": {
          "Status": "待办",
          "Priority": "中"
        }
      }
    }
  }
}
```text
完成这些设置后，你就可以通过 OpenClaw 调用 Notion API 来创建、读取和更新 Notion 中的内容了！

### 10.2.4 配置Notion集成

```bash
# 编辑OpenClaw 配置
nano ~/.openclaw/openclaw.json
```text
添加Notion配置：

```json
{
  "api": {
    "notion": {
      "apiKey": "secret_xxxxxxxxxxxxx",
      "version": "2022-06-28"
    }
  },
  "notion": {
    "defaultDatabase": "your-database-id",
    "autoSync": true,
    "syncInterval": 300
  }
}
```text
**配置说明：**

| 参数 | 说明 | 示例 |
|------|------|------|
| apiKey | Notion API 密钥 | secret_xxx |
| version | API版本 | 2022-06-28 |
| defaultDatabase | 默认数据库ID | 32位字符串 |
| autoSync | 自动同步 | true/false |
| syncInterval | 同步间隔（秒） | 300 |

### 10.2.5 基础使用与实战案例

**示例1：自动创建笔记**

```
你：把这篇文章保存到Notion

标题：OpenClaw使用心得
内容：
今天学习了OpenClaw的API集成功能，
主要收获有：
1. 学会了配置Gemini API
2. 成功生成了第一张AI图片
3. 了解了Skills扩展机制

OpenClaw：好的，正在保存到Notion...

📝 【创建Notion页面】

✅ 页面创建成功！

📄 页面信息：
• 标题：OpenClaw使用心得
• 创建时间：2026-02-12 10:30
• 页面ID：abc123...
• 链接：https://notion.so/abc123

📊 内容统计：
• 字数：120字
• 段落：4段
• 列表项：3项

已自动添加：
• 标签：#学习笔记 #OpenClaw
• 分类：技术文档
• 创建日期：2026-02-12

🔗 在Notion中打开：
https://notion.so/abc123
```text
**示例2：批量导入文档**

```
你：把这个文件夹里的所有Markdown文件导入到Notion

文件夹：~/Documents/notes/

OpenClaw：好的，正在扫描文件...

📁 【批量导入Notion】

📊 扫描结果：
• 文件夹：~/Documents/notes/
• 文件数量：15个
• 总大小：2.5MB
• 预计时间：2分钟

⏳ 导入进度：

[████████████████████] 100% (15/15)

✅ 导入完成！

📊 导入统计：
• 成功：15个
• 失败：0个
• 总耗时：1分45秒

📁 Notion结构：
笔记导入/
├── 学习笔记/
│   ├── 学习笔记.md
│   └── 技术文档.md
├── 项目管理/
│   ├── 项目规划.md
│   └── 会议记录.md
└── 产品设计/
    └── 产品需求.md

🔗 在Notion中查看：
https://notion.so/workspace/notes-import
```text
### 10.2.6 进阶技巧

**技巧1：自定义模板**

```bash
# 创建会议记录模板
openclaw notion template create "meeting" \
  --title "会议记录-{date}" \
  --properties "主题,时间,参会人,内容,决策,任务" \
  --database "meetings-db-id"

# 使用模板
你：用会议模板创建今天的会议记录
```text
**技巧2：自动化工作流**

```bash
# 设置自动同步规则
openclaw config set notion.auto-rules '{
  "markdown-to-notion": {
    "watch": "~/Documents/notes/",
    "target": "notes-db-id",
    "trigger": "file-save"
  },
  "task-sync": {
    "watch": "~/Projects/tasks.md",
    "target": "tasks-db-id",
    "trigger": "file-change"
  }
}'
```text
**技巧3：双向同步**

```bash
# 启用双向同步
openclaw config set notion.bidirectional true

# Notion更新会自动同步到本地
# 本地更新会自动同步到Notion
```text
### 10.2.7 常见问题

**Q1：API调用失败怎么办？**

A：检查以下几点：
- API Key是否正确
- Integration是否已分享给页面
- API版本是否匹配
- 网络连接是否正常

```bash
# 测试API连接
openclaw notion test

# 查看错误日志
openclaw logs --filter notion
```text
**Q2：如何处理大量数据？**

A：使用批量操作和分页：

```bash
# 批量导入（自动分批）
openclaw notion import ~/notes/ \
  --batch-size 10 \
  --delay 1000

# 分页查询
openclaw notion query \
  --database "db-id" \
  --page-size 100
```text
**Q3：如何避免重复创建？**

A：使用唯一标识符：

```bash
# 配置去重规则
openclaw config set notion.dedup '{
  "enabled": true,
  "field": "title",
  "action": "skip"
}'
```text
### 10.2.8 效率提升数据

| 任务类型 | 手动操作 | 自动化 | 节省时间 | 提升比例 |
|---------|---------|--------|----------|----------|
| 创建笔记 | 5分钟 | 5秒 | 4分55秒 | 98.3% |
| 更新数据库 | 10分钟 | 10秒 | 9分50秒 | 98.3% |
| 批量导入 | 60分钟 | 2分钟 | 58分钟 | 96.7% |
| 会议记录 | 30分钟 | 1分钟 | 29分钟 | 96.7% |

**成本参考：**
- Notion API：免费（有速率限制）
- OpenClaw Skills：免费
- 总成本：$0/月

---

## 10.3 视频生成服务

AI视频生成是新兴的创意工具，可以将文字脚本自动转换为视频。

### 10.3.1 为什么要集成视频服务？

**应用场景：**
- 🎬 短视频创作：快速生成抖音、快手短视频
- 📺 长视频制作：B站、YouTube教程视频
- 🎥 营销视频：产品介绍、广告宣传
- 🎞️ 教育视频：课程讲解、知识分享

**效率提升：**
- 手动剪辑：2-4小时/视频
- AI生成：10-30分钟/视频
- 效率提升：80-90%

### 10.3.2 推荐的视频生成Skills

根据ClawHub技能市场，以下是推荐的视频生成Skills：

**1. video-agent - HeyGen视频生成**
```bash
# 安装
npx clawhub@latest install video-agent

# 功能
• 使用HeyGen API生成AI头像视频
• 支持多种语言和音色
• 专业级视频质量
• 适合教程和营销视频
```text
**2. sora-video-gen - OpenAI Sora**
```bash
# 安装
npx clawhub@latest install sora-video-gen

# 功能
• 使用OpenAI Sora API
• 文本生成视频
• 高质量视频输出
• 创意视频制作
```text
**3. veo3-video-gen - Google Veo**
```bash
# 安装
npx clawhub@latest install veo3-video-gen

# 功能
• 使用Google Veo 3.x
• 生成和拼接短视频
• 支持多种风格
• 适合短视频创作
```text
**4. tube-cog - YouTube内容创作**
```bash
# 安装
npx clawhub@latest install tube-cog

# 功能
• YouTube内容创作
• 由CellCog提供支持
• 完整视频制作流程
• 自动化发布
```text
**5. video-cog - 长篇视频制作**
```bash
# 安装
npx clawhub@latest install video-cog

# 功能
• 长篇AI视频制作
• 多智能体协作
• 专业级视频输出
• 适合教程和课程
```text
### 10.3.3 配置视频服务

**配置HeyGen（推荐）：**

```bash
# 编辑OpenClaw 配置
nano ~/.openclaw/openclaw.json
```text
添加HeyGen配置：

```json
{
  "api": {
    "heygen": {
      "apiKey": "your-heygen-api-key",
      "baseUrl": "https://api.heygen.com/v1"
    }
  },
  "video": {
    "defaultAvatar": "avatar-id",
    "defaultVoice": "voice-id",
    "quality": "high",
    "format": "mp4"
  }
}
```text
**获取HeyGen API Key：**
1. 访问 https://www.heygen.com
2. 注册并登录账号
3. 进入 API Settings
4. 创建并复制 API Key

**成本参考：**
- HeyGen：$0.5-2/分钟（根据质量）
- Sora：$0.1-0.5/秒
- Veo：$0.05-0.2/秒

### 10.3.4 基础使用

**示例1：生成AI头像视频**

```
你：生成1个30秒的AI头像视频，内容是：

主题：OpenClaw快速入门
脚本：
您好，我是OpenClaw AI助手。
今天介绍如何快速上手OpenClaw。
只需3步：安装、配置、使用。
开始吧！

要求：
- 头像：专业男性
- 音色：温和
- 背景：科技感
- 字幕：中文

OpenClaw：好的，正在生成视频...

🎬 【AI视频生成】OpenClaw快速入门

📊 视频信息：
• 时长：30秒
• 分辨率：1080p
• 格式：MP4
• 大小：约15MB

⏳ 生成进度：

1. 脚本分析 [████████████████████] 100%
2. 头像渲染 [████████████████████] 100%
3. 语音合成 [████████████████████] 100%
4. 视频合成 [████████████████████] 100%
5. 字幕添加 [████████████████████] 100%

✅ 视频生成完成！

📹 视频预览：
[视频缩略图]

📊 视频详情：
• 头像：专业男性（ID: avatar-001）
• 音色：温和男声（ID: voice-cn-male-01）
• 背景：科技蓝色渐变
• 字幕：中文，白色，底部居中

💰 成本：
• 生成费用：$1.00
• 存储费用：$0.01
• 总计：$1.01

📁 文件已保存：
• 视频文件：openclaw_intro.mp4
• 字幕文件：openclaw_intro.srt
• 脚本文件：openclaw_intro.txt

🔗 在线预览：
https://video.openclaw.com/abc123
```text
**示例2：批量生成系列视频**

```
你：批量生成OpenClaw教程系列视频，共5集

第1集：什么是OpenClaw
第2集：如何安装 OpenClaw
第3集：基础配置教程
第4集：Skills扩展使用
第5集：实战案例分享

OpenClaw：好的，正在批量生成...

🎬 【批量视频生成】OpenClaw教程系列

📊 任务信息：
• 视频数量：5集
• 每集时长：3-5分钟
• 总时长：约20分钟
• 预计时间：15分钟

⏳ 生成进度：

第1集：什么是OpenClaw
[████████████████████] 100% ✅

第2集：如何安装 OpenClaw
[████████████████████] 100% ✅

第3集：基础配置教程
[████████████████████] 100% ✅

第4集：Skills扩展使用
[████████████████████] 100% ✅

第5集：实战案例分享
[████████████████████] 100% ✅

✅ 全部生成完成！

📊 生成统计：
• 成功：5集
• 失败：0集
• 总耗时：12分30秒
• 总大小：150MB

📁 文件列表：
1. ✅ 01_什么是OpenClaw.mp4 (30MB)
2. ✅ 02_如何安装 OpenClaw.mp4 (28MB)
3. ✅ 03_基础配置教程.mp4 (32MB)
4. ✅ 04_Skills扩展使用.mp4 (35MB)
5. ✅ 05_实战案例分享.mp4 (25MB)

💰 总成本：
• 生成费用：$15.00
• 存储费用：$0.15
• 总计：$15.15

📦 已打包：
• OpenClaw教程系列.zip (150MB)

🔗 下载链接：
https://video.openclaw.com/series/abc123
```text
### 10.3.5 实战案例

**案例1：自动化短视频创作**

场景：每天自动生成一条知识分享短视频。

```bash
# 创建自动化脚本
cat > daily_video.sh << 'EOF'
#!/bin/bash

# 获取今日主题
topic=$(openclaw ask "推荐1个适合短视频的技术主题")

# 生成脚本
script=$(openclaw ask "为主题'${topic}'生成60秒短视频脚本")

# 生成视频
openclaw video generate \
  --script "$script" \
  --duration 60 \
  --avatar "professional-male" \
  --voice "cn-male-01" \
  --output "daily_$(date +%Y%m%d).mp4"

echo "✅ 今日视频生成完成：${topic}"
EOF

chmod +x daily_video.sh

# 设置定时任务（每天早上9点）
openclaw schedule add "daily-video" \
  --time "09:00" \
  --command "./daily_video.sh"
```text
**案例2：产品介绍视频生成**

场景：为新产品快速生成多语言介绍视频。

```
你：为OpenClaw生成产品介绍视频，需要中英日3个版本

产品特点：
1. 本地部署，保护隐私
2. 文件访问，智能搜索
3. Skills扩展，无限可能
4. 多平台支持，随时随地

OpenClaw：好的，正在生成多语言版本...

🎬 【多语言视频生成】

📊 任务信息：
• 语言版本：3个（中文、英文、日文）
• 视频时长：每个2分钟
• 预计时间：10分钟

⏳ 生成进度：

中文版本：
[████████████████████] 100% ✅

英文版本：
[████████████████████] 100% ✅

日文版本：
[████████████████████] 100% ✅

✅ 全部生成完成！

📁 文件列表：
1. ✅ OpenClaw_Intro_CN.mp4 (40MB)
2. ✅ OpenClaw_Intro_EN.mp4 (38MB)
3. ✅ OpenClaw_Intro_JP.mp4 (39MB)

💰 总成本：$6.00

🔗 在线预览：
• 中文：https://video.openclaw.com/cn/abc123
• 英文：https://video.openclaw.com/en/abc123
• 日文：https://video.openclaw.com/jp/abc123
```text
### 10.3.6 进阶技巧

**技巧1：自定义头像**

```bash
# 上传自定义头像照片
openclaw video avatar upload \
  --photo "my_photo.jpg" \
  --name "my-avatar"

# 使用自定义头像
openclaw video generate \
  --avatar "my-avatar" \
  --script "你的脚本"
```text
**技巧2：视频后期处理**

```bash
# 添加片头片尾
openclaw video edit \
  --input "video.mp4" \
  --intro "intro.mp4" \
  --outro "outro.mp4" \
  --output "final.mp4"

# 添加背景音乐
openclaw video edit \
  --input "video.mp4" \
  --bgm "music.mp3" \
  --volume 0.3 \
  --output "with_music.mp4"
```text
**技巧3：批量处理优化**

```bash
# 并行生成多个视频
openclaw video batch \
  --scripts "scripts/*.txt" \
  --parallel 3 \
  --output "videos/"
```text
### 10.3.7 常见问题

**Q1：视频生成失败怎么办？**

A：检查以下几点：
- API Key是否正确
- 账户余额是否充足
- 脚本是否符合要求
- 网络连接是否稳定

**Q2：如何提高视频质量？**

A：
- 使用高质量模式
- 优化脚本内容
- 选择合适的头像和音色
- 添加背景音乐和特效

**Q3：如何控制成本？**

A：
- 使用标准质量模式
- 批量生成享受折扣
- 复用头像和音色
- 合理规划视频时长

### 10.3.8 效率提升数据

| 任务类型 | 手动制作 | AI生成 | 节省时间 | 提升比例 |
|---------|---------|--------|----------|----------|
| 短视频（1分钟） | 120分钟 | 10分钟 | 110分钟 | 91.7% |
| 中视频（5分钟） | 300分钟 | 30分钟 | 270分钟 | 90.0% |
| 长视频（15分钟） | 600分钟 | 60分钟 | 540分钟 | 90.0% |
| 批量生成（5个） | 1500分钟 | 120分钟 | 1380分钟 | 92.0% |

**成本对比：**
- 人工制作：$50-200/分钟
- AI生成：$0.5-2/分钟
- 成本节省：95-99%

---

## 10.4 语音合成接入

将文字转换为语音，适用于有声读物、视频配音、语音助手等场景。

### 10.4.1 为什么要集成语音服务？

**应用场景：**
- 📚 有声读物：将文章、书籍转换为音频
- 🎙️ 视频配音：为视频添加专业配音
- 🔊 语音助手：实现语音交互功能
- 📻 播客制作：快速生成播客内容

**效率提升：**
- 人工录音：30-60分钟/千字
- AI合成：1-2分钟/千字
- 效率提升：95-98%

### 10.4.2 推荐的语音合成Skills

根据ClawHub技能市场，以下是推荐的语音合成Skills：

**1. elevenlabs - 顶级语音合成**
```bash
# 安装
npx clawhub@latest install elevenlabs

# 功能
• 超自然的语音质量
• 支持多种语言和音色
• 情感表达丰富
• 适合专业配音
```text
**2. azure-tts - 微软语音服务**
```bash
# 安装
npx clawhub@latest install azure-tts

# 功能
• 支持140+语言
• 神经网络语音
• 高质量输出
• 企业级稳定性
```text
**3. google-tts - Google语音**
```bash
# 安装
npx clawhub@latest install google-tts

# 功能
• WaveNet技术
• 自然流畅
• 多语言支持
• 性价比高
```text
**4. openai-tts - OpenAI语音**
```bash
# 安装
npx clawhub@latest install openai-tts

# 功能
• 使用OpenAI TTS API
• 6种高质量音色
• 支持多种语言
• 简单易用
```text
### 10.4.3 支持的语音服务对比

| 服务 | 特点 | 成本 | 音质 | 语言支持 |
|------|------|------|------|----------|
| ElevenLabs | 最自然 | 高 | ⭐⭐⭐⭐⭐ | 29种 |
| Azure TTS | 企业级 | 中 | ⭐⭐⭐⭐⭐ | 140+种 |
| Google TTS | 性价比高 | 中 | ⭐⭐⭐⭐ | 100+种 |
| OpenAI TTS | 简单易用 | 低 | ⭐⭐⭐⭐ | 50+种 |
| 讯飞语音 | 中文好 | 低 | ⭐⭐⭐⭐ | 中文为主 |

### 10.4.4 配置语音服务

**配置ElevenLabs（推荐）：**

```bash
# 编辑OpenClaw 配置
nano ~/.openclaw/openclaw.json
```text
添加ElevenLabs配置：

```json
{
  "api": {
    "elevenlabs": {
      "apiKey": "your-elevenlabs-api-key",
      "baseUrl": "https://api.elevenlabs.io/v1"
    }
  },
  "tts": {
    "defaultVoice": "voice-id",
    "defaultModel": "eleven_multilingual_v2",
    "quality": "high",
    "format": "mp3"
  }
}
```text
**获取ElevenLabs API Key：**
1. 访问 https://elevenlabs.io
2. 注册并登录账号
3. 进入 Profile → API Keys
4. 创建并复制 API Key

**成本参考：**
- ElevenLabs：$0.30/千字符
- Azure TTS：$0.016/千字符
- Google TTS：$0.016/千字符
- OpenAI TTS：$0.015/千字符

### 10.4.5 基础使用

**示例1：文本转语音**

```
你：把这段文字转换为语音：

OpenClaw是1个开源的AI助手框架，
它可以访问本地文件，操作系统应用，
扩展各种功能，让AI真正成为你的助手。

要求：
- 音色：专业男声
- 语速：正常
- 格式：MP3
- 质量：高清

OpenClaw：好的，正在转换...

🔊 【文本转语音】

📝 文本信息：
• 字数：52字
• 语言：中文
• 预计时长：约15秒

⏳ 转换进度：

1. 文本分析 [████████████████████] 100%
2. 语音合成 [████████████████████] 100%
3. 音频处理 [████████████████████] 100%
4. 格式转换 [████████████████████] 100%

✅ 转换完成！

🎵 音频信息：
• 时长：15秒
• 格式：MP3
• 比特率：192kbps
• 大小：360KB

📊 音频详情：
• 音色：专业男声（ID: voice-cn-male-01）
• 语速：正常（1.0x）
• 音量：标准（0dB）
• 质量：高清

💰 成本：
• 转换费用：$0.02
• 存储费用：$0.001
• 总计：$0.021

📁 文件已保存：
• 音频文件：openclaw_intro.mp3
• 文本文件：openclaw_intro.txt

🔗 在线试听：
https://audio.openclaw.com/abc123
```text
**示例2：批量转换文章**

```
你：把这个文件夹里的所有文章都转换为音频

文件夹：~/Documents/articles/

OpenClaw：好的，正在扫描文件...

🔊 【批量文本转语音】

📊 扫描结果：
• 文件夹：~/Documents/articles/
• 文件数量：10篇
• 总字数：25,000字
• 预计时长：约50分钟
• 预计时间：5分钟

⏳ 转换进度：

[████████████████████] 100% (10/10)

✅ 全部转换完成！

📊 转换统计：
• 成功：10篇
• 失败：0篇
• 总耗时：4分30秒
• 总时长：48分钟
• 总大小：115MB

📁 文件列表：
1. ✅ AI时代的超级个体.mp3 (12MB, 5分钟)
2. ✅ 效率提升10倍的秘密.mp3 (10MB, 4分钟)
3. ✅ 一个人的无限可能.mp3 (15MB, 6分钟)
4. ✅ 知识管理系统搭建.mp3 (11MB, 4.5分钟)
5. ✅ 自动化工作流设计.mp3 (13MB, 5.5分钟)
... (共10个)

💰 总成本：
• 转换费用：$7.50
• 存储费用：$0.12
• 总计：$7.62

📦 已打包：
• 有声文章合集.zip (115MB)

🔗 下载链接：
https://audio.openclaw.com/batch/abc123
```text
### 10.4.6 实战案例

**案例1：自动化有声读物制作**

场景：将电子书自动转换为有声读物。

```
你：把这本电子书转换为有声读物

文件：OpenClaw完全指南.pdf
要求：
- 分章节转换
- 每章单独文件
- 添加章节标题语音
- 生成播放列表

OpenClaw：好的，正在处理...

📚 【有声读物制作】

📖 电子书信息：
• 书名：OpenClaw完全指南
• 章节数：16章
• 总字数：80,000字
• 预计时长：约3小时

⏳ 处理进度：

1. PDF文本提取 [████████████████████] 100%
2. 章节分割 [████████████████████] 100%
3. 语音合成 [████████████████████] 100%
4. 音频处理 [████████████████████] 100%
5. 播放列表生成 [████████████████████] 100%

✅ 制作完成！

📁 文件结构：
OpenClaw完全指南_有声版/
├── 00_书名和前言.mp3 (5分钟)
├── 01_第1章_OpenClaw简介.mp3 (10分钟)
├── 02_第2章_快速开始.mp3 (12分钟)
├── 03_第3章_基础配置.mp3 (15分钟)
... (共17个文件)
├── playlist.m3u (播放列表)
└── metadata.json (元数据)

📊 制作统计：
• 总时长：3小时5分钟
• 总大小：450MB
• 音频格式：MP3 192kbps
• 章节数：16章 + 前言

💰 总成本：$24.00

📦 已打包：
• OpenClaw完全指南_有声版.zip (450MB)

🔗 下载链接：
https://audio.openclaw.com/audiobook/abc123
```text
**案例2：多语言配音生成**

场景：为产品介绍视频生成多语言配音。

```
你：为这个视频脚本生成中英日三种语言的配音

脚本：
OpenClaw是1个开源的AI助手框架。
它可以访问本地文件，操作系统应用。
让AI真正成为你的超级助手。

OpenClaw：好的，正在生成多语言配音...

🎙️ 【多语言配音生成】

📊 任务信息：
• 语言版本：3个（中文、英文、日文）
• 脚本字数：52字
• 预计时长：每个约15秒

⏳ 生成进度：

中文配音：
[████████████████████] 100% ✅

英文配音：
[████████████████████] 100% ✅

日文配音：
[████████████████████] 100% ✅

✅ 全部生成完成！

📁 文件列表：
1. ✅ openclaw_intro_cn.mp3 (360KB, 15秒)
2. ✅ openclaw_intro_en.mp3 (380KB, 16秒)
3. ✅ openclaw_intro_jp.mp3 (370KB, 15秒)

📊 配音详情：
• 中文：专业男声，语速正常
• 英文：美式男声，语速正常
• 日文：标准男声，语速正常

💰 总成本：$0.06

🔗 在线试听：
• 中文：https://audio.openclaw.com/cn/abc123
• 英文：https://audio.openclaw.com/en/abc123
• 日文：https://audio.openclaw.com/jp/abc123
```text
### 10.4.7 进阶技巧

**技巧1：自定义音色**

```bash
# 克隆自己的声音（ElevenLabs）
openclaw tts voice clone \
  --samples "voice_samples/*.mp3" \
  --name "my-voice"

# 使用自定义音色
openclaw tts generate \
  --text "你的文本" \
  --voice "my-voice" \
  --output "output.mp3"
```text
**技巧2：情感控制**

```bash
# 添加情感标记
openclaw tts generate \
  --text "这真是太棒了！[excited]" \
  --voice "voice-id" \
  --emotion "excited" \
  --output "excited.mp3"
```text
**技巧3：语速和音调调整**

```bash
# 调整语速和音调
openclaw tts generate \
  --text "你的文本" \
  --voice "voice-id" \
  --speed 1.2 \
  --pitch 1.1 \
  --output "adjusted.mp3"
```text
**技巧4：批量处理优化**

```bash
# 并行转换多个文件
openclaw tts batch \
  --input "texts/*.txt" \
  --voice "voice-id" \
  --parallel 5 \
  --output "audios/"
```text
### 10.4.8 常见问题

**Q1：语音听起来不自然怎么办？**

A：
- 使用更高质量的模型
- 优化文本标点符号
- 调整语速和音调
- 尝试不同的音色

**Q2：如何处理长文本？**

A：
- 自动分段处理
- 使用流式合成
- 批量转换后合并

```bash
# 长文本自动分段
openclaw tts generate \
  --text-file "long_article.txt" \
  --auto-split true \
  --max-length 5000 \
  --output "output.mp3"
```text
**Q3：如何控制成本？**

A：
- 选择性价比高的服务
- 批量处理享受折扣
- 复用常用音色
- 合理控制音频质量

**Q4：支持哪些音频格式？**

A：支持多种格式：
- MP3：通用格式，文件小
- WAV：无损格式，质量高
- OGG：开源格式，压缩好
- AAC：高质量，文件小

```bash
# 指定输出格式
openclaw tts generate \
  --text "你的文本" \
  --format "wav" \
  --output "output.wav"
```text
### 10.4.9 效率提升数据

| 任务类型 | 人工录音 | AI合成 | 节省时间 | 提升比例 |
|---------|---------|--------|----------|----------|
| 短文本（100字） | 10分钟 | 30秒 | 9.5分钟 | 95.0% |
| 中文本（1000字） | 60分钟 | 2分钟 | 58分钟 | 96.7% |
| 长文本（10000字） | 600分钟 | 15分钟 | 585分钟 | 97.5% |
| 批量转换（10篇） | 6000分钟 | 120分钟 | 5880分钟 | 98.0% |

**成本对比：**
- 人工录音：$50-200/千字
- AI合成：$0.015-0.30/千字
- 成本节省：99%+

**质量对比：**
- 人工录音：⭐⭐⭐⭐⭐（最自然，但成本高）
- AI合成（高端）：⭐⭐⭐⭐⭐（接近人工，成本低）
- AI合成（标准）：⭐⭐⭐⭐（质量好，性价比高）

---

## 📦 本章Skills完整安装指南

### ⚠️ 重要说明

在安装 Skills 之前，请注意：

1. **验证 Skill 是否存在**
   ```bash
   # 搜索 Skill
   npx clawhub@latest search <skill-name>
   
   # 查看 Skill 详情
   npx clawhub@latest info <skill-name>
   ```

2. **ClawHub 市场动态变化**
   - Skills 可能被移除、更名或更新
   - 本文档中的某些 Skills 可能不存在
   - 建议访问 https://clawhub.ai 查看最新列表

3. **替代方案**
   - 如果 Skill 不存在，可以使用服务的官方 API
   - 可以自己创建自定义 Skill
   - 可以在 GitHub 搜索社区贡献的 Skills

4. **安全提示**
   - 只安装来自可信来源的 Skills
   - 查看 Skill 的源代码和评价
   - 注意保护 API 密钥等敏感信息

### 安装所有API集成Skills

**方式1：使用提供的批量安装脚本（推荐）**

```bash
# 下载并运行批量安装脚本
curl -O https://raw.githubusercontent.com/xianyu110/awesome-openclaw-tutorial/main/scripts/install_api_skills.sh
chmod +x install_api_skills.sh

# 查看使用帮助
./install_api_skills.sh --help

# 安装特定场景的Skills
./install_api_skills.sh content    # 内容创作者
./install_api_skills.sh video      # 视频UP主
./install_api_skills.sh knowledge  # 知识工作者
./install_api_skills.sh marketing  # 营销人员
./install_api_skills.sh education  # 教育工作者

# 安装所有Skills
./install_api_skills.sh all
```text
**方式2：手动逐个安装**

```bash
# AI绘图服务 Skills（需要先验证是否存在）
# 使用前建议先搜索：npx clawhub@latest search <skill-name>
npx clawhub@latest install fal-ai
npx clawhub@latest install nvidia-image-gen
npx clawhub@latest install pollinations
npx clawhub@latest install venice-ai
npx clawhub@latest install recraft

# Notion集成（目前ClawHub可能没有现成的Skill）
# 建议使用 Notion API 直接集成或自定义 Skill

# 视频生成服务 Skills
npx clawhub@latest install video-agent
npx clawhub@latest install sora-video-gen
npx clawhub@latest install veo3-video-gen
npx clawhub@latest install tube-cog
npx clawhub@latest install video-cog

# 语音合成服务 Skills
npx clawhub@latest install elevenlabs
npx clawhub@latest install azure-tts
npx clawhub@latest install google-tts
npx clawhub@latest install openai-tts
```text
**💡 重要提示**：
- ClawHub 市场的 Skills 在不断更新，某些 Skills 可能不存在或已更名
- 安装前建议先搜索：`npx clawhub@latest search <skill-name>`
- 如果 Skill 不存在，可以：
  1. 使用对应服务的官方 API 直接集成
  2. 自己创建自定义 Skill
  3. 在 GitHub 上搜索社区贡献的 Skills

### 分场景安装建议

**场景1：内容创作者（必装）**
```bash
npx clawhub@latest install fal-ai
npx clawhub@latest install elevenlabs
# Notion 建议使用 API 直接集成
```text
- fal-ai：快速生成配图
- elevenlabs：高质量配音
- Notion：使用官方 API 集成（见 10.2.2 节）

**场景2：视频UP主（推荐）**
```bash
npx clawhub@latest install video-agent
npx clawhub@latest install tube-cog
npx clawhub@latest install elevenlabs
```text
- video-agent：AI头像视频
- tube-cog：YouTube内容创作
- elevenlabs：专业配音

**场景3：知识工作者（推荐）**
```bash
npx clawhub@latest install openai-tts
# Notion 建议使用 API 直接集成
```text
- openai-tts：文档转音频
- Notion：使用官方 API 集成（见 10.2.2 节）

**场景4：营销人员（推荐）**
```bash
npx clawhub@latest install fal-ai
npx clawhub@latest install video-agent
npx clawhub@latest install elevenlabs
```text
- fal-ai：营销素材生成
- video-agent：产品介绍视频
- elevenlabs：广告配音

**场景5：教育工作者（推荐）**
```bash
npx clawhub@latest install fal-ai
npx clawhub@latest install video-cog
npx clawhub@latest install openai-tts
```text
- fal-ai：教学配图
- video-cog：课程视频制作
- openai-tts：有声课件

### 配置优先级

**必装Skills（优先级：⭐⭐⭐⭐⭐）**
- notion - 知识管理（免费）
- openai-tts - 语音合成（性价比高）
- fal-ai - AI绘画（功能全面）

**推荐Skills（优先级：⭐⭐⭐⭐）**
- video-agent - 视频生成（质量高）
- elevenlabs - 语音合成（最自然）
- notion-mcp - Notion高级功能

**可选Skills（优先级：⭐⭐⭐）**
- 根据具体需求选择安装
- 可以先试用再决定

### 成本预算参考

**月度成本估算**：

| 使用场景 | Skills组合 | API成本 | 总成本/月 |
|---------|-----------|---------|----------|
| 轻度使用 | 基础3个 | $5-10 | $5-10 |
| 中度使用 | 推荐6个 | $20-50 | $20-50 |
| 重度使用 | 全部安装 | $50-150 | $50-150 |
| 专业创作 | 高端组合 | $100-300 | $100-300 |

**各服务成本明细**：

| 服务类型 | 轻度使用 | 中度使用 | 重度使用 |
|---------|---------|---------|---------|
| AI绘图 | $2-5 | $10-20 | $30-50 |
| Notion | $0 | $0 | $0 |
| 视频生成 | $5-10 | $20-50 | $50-100 |
| 语音合成 | $2-5 | $10-20 | $20-50 |

**成本优化建议**：
```
✅ 使用国产模型（DeepSeek、Kimi）
✅ 批量处理任务
✅ 复用生成结果
✅ 设置Token限制
✅ 选择合适的质量等级
✅ 利用免费额度
✅ 批量购买享受折扣
```text
### 常见问题

**Q1：Skills 安装失败怎么办？**
```bash
# 检查网络连接
ping github.com

# 使用国内镜像
npm config set registry https://registry.npmmirror.com

# 重试安装
npx clawhub@latest install <skill-name>

# 查看详细错误
npx clawhub@latest install <skill-name> --verbose
```text
**Q2：Skills加载失败怎么办？**
```bash
# 查看Skills列表
openclaw skills list

# 检查Skills状态
openclaw skills check

# 查看Skill详细信息
openclaw skills info <skill-name>

# 重启OpenClaw
openclaw restart
```text
**Q3：API调用失败怎么办？**
```bash
# 检查API配置
openclaw config get api

# 测试API连接
openclaw api test <service-name>

# 查看错误日志
openclaw logs --tail 50 --filter <service-name>

# 验证API 密钥
openclaw api verify <service-name>
```text
**Q4：如何更新Skills？**
```bash
# 更新单个Skill
npx clawhub@latest update <skill-name>

# 更新所有Skills
npx clawhub@latest update --all

# 查看可更新的Skills
npx clawhub@latest list --outdated

# 查看更新日志
npx clawhub@latest changelog <skill-name>
```text
**Q5：如何卸载不需要的Skills？**
```bash
# 卸载单个Skill
npx clawhub@latest uninstall <skill-name>

# 卸载多个Skills
npx clawhub@latest uninstall <skill1> <skill2> <skill3>

# 检查Skills依赖
openclaw skills check
```text
### 最佳实践

**1. 渐进式安装**
```
第1周：安装基础Skills（notion, openai-tts）
      熟悉基本使用，建立工作流程

第2周：添加创作Skills（fal-ai, video-agent）
      根据需求扩展功能

第3周：优化配置和成本
      调整参数，提升效率

第4周：建立自动化工作流
      整合所有Skills，实现自动化
```text
**2. 定期维护**
```bash
# 每周检查更新
npx clawhub@latest list --outdated

# 定期检查Skills状态
openclaw skills check

# 每季度备份配置
openclaw backup create

# 每半年评估使用情况
openclaw stats --period 6m
```text
**3. 性能优化**
```bash
# 只加载需要的Skills
openclaw config set skills.lazy-load true

# 设置并发限制
openclaw config set skills.max-concurrent 3

# 启用缓存
openclaw config set skills.cache.enabled true
openclaw config set skills.cache.ttl 3600

# 设置超时时间
openclaw config set skills.timeout 30000
```text
**4. 成本监控**
```bash
# 查看API使用统计
openclaw stats api --period 1m

# 设置成本预警
openclaw config set cost.alert.enabled true
openclaw config set cost.alert.threshold 100

# 查看成本报告
openclaw cost report --period 1m

# 导出成本数据
openclaw cost export --format csv
```text
### 进阶技巧

**技巧1：使用配置文件管理Skills**
```bash
# 创建内容创作配置
cat > ~/.openclaw/profiles/content-creation.json <<EOF
{
  "skills": ["fal-ai", "video-agent", "elevenlabs", "notion"],
  "description": "内容创作工具集"
}
EOF

# 创建知识管理配置
cat > ~/.openclaw/profiles/knowledge-management.json <<EOF
{
  "skills": ["notion", "notion-mcp", "openai-tts"],
  "description": "知识管理工具集"
}
EOF
```

**技巧2：自定义快捷命令**
```bash
# 创建快捷命令
openclaw alias create "画图" "使用fal-ai生成图片"
openclaw alias create "记笔记" "保存到Notion"
openclaw alias create "配音" "使用elevenlabs转语音"
openclaw alias create "做视频" "使用video-agent生成视频"

# 使用快捷命令
你：画图 1个可爱的小龙虾
你：记笔记 今天学习了API集成
你：配音 这段文字
你：做视频 产品介绍脚本
```text
**技巧3：批量安装脚本**

由于 `clawhub` 一次只能安装1个 Skill，可以创建批量安装脚本：

```bash
# 创建批量安装脚本
cat > install_skills.sh << 'EOF'
#!/bin/bash

# 定义要安装的Skills
skills=(
    "fal-ai"
    "notion"
    "elevenlabs"
    "video-agent"
)

echo "开始批量安装 Skills..."

for skill in "${skills[@]}"; do
    echo "正在安装: $skill"
    npx clawhub@latest install "$skill"
    
    if [ $? -eq 0 ]; then
        echo "✅ $skill 安装成功"
    else
        echo "❌ $skill 安装失败"
    fi
    echo "---"
done

echo "批量安装完成！"
EOF

chmod +x install_skills.sh
./install_skills.sh
```text
```bash
# 批量生成图片
openclaw batch run "fal-ai" \
  --input "prompts.txt" \
  --output "images/" \
  --parallel 3

# 批量转换音频
openclaw batch run "elevenlabs" \
  --input "texts/" \
  --output "audios/" \
  --parallel 5

# 批量导入Notion
openclaw batch run "notion" \
  --input "notes/" \
  --database "db-id" \
  --parallel 2
```

**技巧4：工作流自动化**
```bash
# 创建自动化工作流
openclaw workflow create "daily-content" \
  --trigger "schedule:09:00" \
  --steps "
    1. 生成今日主题（ask）
    2. 生成配图（fal-ai）
    3. 生成视频（video-agent）
    4. 生成配音（elevenlabs）
    5. 保存到Notion（notion）
  "

# 启用工作流
openclaw workflow enable "daily-content"

# 查看工作流状态
openclaw workflow status "daily-content"
```text
### 故障排查

**问题1：Skills无法加载**

可能原因：
- 依赖未安装
- 配置文件错误
- 权限不足

解决方案：
```bash
# 查看Skill依赖
openclaw skills info <skill-name>

# 重新安装依赖
cd ~/.openclaw/skills/<skill-name>
npm install

# 检查配置
openclaw config validate

# 修复权限
chmod -R 755 ~/.openclaw/skills/
```text
**问题2：API调用超时**

可能原因：
- 网络不稳定
- API服务器繁忙
- 超时设置过短

解决方案：
```bash
# 增加超时时间
openclaw config set api.timeout 60000

# 使用代理
openclaw config set api.proxy "http://proxy:port"

# 重试机制
openclaw config set api.retry.enabled true
openclaw config set api.retry.max 3
```text
**问题3：成本超支**

可能原因：
- 使用频率过高
- 质量设置过高
- 未设置限制

解决方案：
```bash
# 设置每日限额
openclaw config set cost.daily-limit 10

# 降低质量设置
openclaw config set image.quality "standard"
openclaw config set video.quality "medium"

# 启用缓存
openclaw config set cache.enabled true

# 查看成本明细
openclaw cost detail --period 1d
```text
---

## 本章小结

本章详细介绍了OpenClaw与第三方API服务的集成方法，涵盖了4个核心应用场景：

### 核心内容回顾

**10.1 AI绘图服务集成** - 效率提升90%+
- 完整的bananapro-image-gen Skill安装和配置教程
- 从基础使用到批量生成的实战案例
- 提示词优化技巧和成本控制方法
- 推荐5个ClawHub市场的AI绘画Skills

**10.2 Notion数据同步** - 效率提升98%+
- 3个推荐的Notion集成Skills（notion, notion-mcp, notion-database）
- 完整的API配置和权限设置流程
- 自动创建笔记、批量导入、会议记录等实战案例
- 自定义模板和自动化工作流配置

**10.3 视频生成服务** - 效率提升90%+
- 5个推荐的视频生成Skills（video-agent, sora-video-gen等）
- HeyGen、Sora、Veo等主流服务的配置方法
- AI头像视频、批量生成、多语言版本等实战案例
- 自定义头像、视频后期处理等进阶技巧

**10.4 语音合成接入** - 效率提升95%+
- 4个推荐的语音合成Skills（elevenlabs, azure-tts等）
- ElevenLabs、Azure、Google等服务的对比和配置
- 文本转语音、有声读物、多语言配音等实战案例
- 自定义音色、情感控制、批量处理等进阶技巧

### 综合效率提升

**平均效率提升**：93%+
**平均成本节省**：95%+
**适用场景**：创作、管理、营销、教育

### 核心价值

**1. 能力扩展**
```
✅ AI绘图：从文字到图像
✅ 知识管理：自动化笔记和数据库
✅ 视频创作：从脚本到成片
✅ 语音合成：从文字到声音
```text
**2. 效率提升**
```
✅ 绘图：30分钟 → 1分钟
✅ 笔记：5分钟 → 5秒
✅ 视频：2小时 → 10分钟
✅ 配音：1小时 → 2分钟
```text
**3. 成本优化**
```
✅ 绘图成本：$50 → $0.1
✅ Notion：免费
✅ 视频成本：$200 → $2
✅ 配音成本：$100 → $0.3
```text
**4. 质量保证**
```
✅ 专业级输出质量
✅ 多语言支持
✅ 批量处理能力
✅ 自动化工作流
```

### 实战技巧总结

**1. Skills选择**
- 根据需求选择合适的Skills
- 优先使用ClawHub市场的成熟Skills
- 关注成本和质量的平衡

**2. 配置优化**
- 正确配置API 密钥和权限
- 设置合理的默认参数
- 启用自动化规则

**3. 成本控制**
- 使用合适的质量等级
- 批量处理享受折扣
- 复用生成结果

**4. 质量提升**
- 优化输入内容（提示词、脚本、文本）
- 使用高质量模型
- 进行后期处理

### 下一步行动

1. **立即开始**：选择1个场景，安装对应的Skills
2. **实践验证**：通过实际案例测试效果
3. **优化流程**：根据使用情况调整配置
4. **扩展应用**：探索更多集成可能性

通过API集成，OpenClaw从1个AI助手升级为全能创作平台。掌握这些集成方法，你将拥有：
- 🎨 AI绘画能力
- 📝 自动化知识管理
- 🎬 视频创作能力
- 🎙️ 语音合成能力

开始使用这些强大的API集成功能，让OpenClaw成为你的超级创作助手！

---

**下一章预告：** 第11章 高级配置（多模型切换/成本优化/性能调优）
