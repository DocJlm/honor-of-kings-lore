# 参与共建 & 本地预览

本项目是一份**开放的、粉丝向的《王者荣耀》世界观考据百科**。欢迎任何形式的补充、勘误与扩写。

## 本地预览

本站使用 [MkDocs](https://www.mkdocs.org/) + [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) 构建。

=== "首次准备环境"

    ```bash
    # 克隆仓库后，在项目根目录：
    python3 -m venv .venv
    source .venv/bin/activate          # Windows: .venv\Scripts\activate
    pip install mkdocs-material mkdocs-glightbox
    ```

=== "本地实时预览"

    ```bash
    mkdocs serve
    # 浏览器打开 http://127.0.0.1:8000
    # 修改任意 .md 文件会自动热重载
    ```

=== "构建静态站点"

    ```bash
    mkdocs build          # 产物输出到 site/ 目录
    ```

=== "部署到 GitHub Pages"

    ```bash
    mkdocs gh-deploy       # 自动构建并推送到 gh-pages 分支
    ```

## 目录结构

```text
honor-of-kings-lore/
├─ mkdocs.yml              # 站点配置（主题/导航/扩展）
├─ docs/
│  ├─ index.md             # 首页
│  ├─ worldview/           # 世界观：总览/起源/时间轴/地图/术语
│  ├─ factions/            # 阵营势力
│  ├─ heroes/              # 英雄故事（按阵营归类，含完整背景）
│  ├─ relationships/       # 人物关系网
│  ├─ topics/              # 专题（五虎上将/名剑/联动等）
│  ├─ about/               # 关于本站
│  └─ assets/              # 图片与原创 SVG 配图
└─ README.md
```

## 写作约定

为保持全站风格统一，扩写时请遵循：

- **可考据优先**：以官方剧情、英雄背景故事、官方世界观短片为准；二设/同人内容需明确标注「（同人推测）」。
- **图文表格并茂**：信息型内容尽量用表格；关系/时间线尽量用 [Mermaid](https://mermaid.js.org/) 图；关键设定用 `!!! note` 等提示框强调。
- **交叉链接**：英雄、阵营、事件之间用相对链接互相跳转，方便检索。
- **定位标签**：英雄页顶部用统一的定位标签（坦克/战士/刺客/法师/射手/辅助）。

## 免责声明

详见 [资料来源与版权说明](sources.md)。
