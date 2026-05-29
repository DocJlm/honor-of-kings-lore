# 参与共建 & 本地预览

本项目是一份**开放的、粉丝向的《王者荣耀》世界观考据百科**。欢迎任何形式的补充、勘误与扩写。

## 本地预览

本站使用 [VitePress](https://vitepress.dev/)（基于 Vite）构建，Mermaid 图由 [vitepress-plugin-mermaid](https://github.com/emersonbottero/vitepress-plugin-mermaid) 渲染。

::: details 首次准备环境（需要 Node ≥ 18）

```bash
# 克隆仓库后，在项目根目录：
npm install
```

:::

::: details 本地实时预览

```bash
npm run dev
# 浏览器打开 http://localhost:5173
# 修改任意 .md 文件会自动热重载
```

:::

::: details 构建静态站点

```bash
npm run build      # 产物输出到 docs/.vitepress/dist
npm run preview    # 本地预览构建产物
```

:::

::: details 部署

推送到 GitHub 后，`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages；也可一键部署到 Netlify / Vercel（仓库已含 `netlify.toml` 与 `vercel.json`）。

:::

## 目录结构

```text
honor-of-kings-lore/
├─ package.json                # 依赖与脚本（dev/build/preview）
├─ docs/
│  ├─ index.md                 # 首页（VitePress home 布局）
│  ├─ .vitepress/
│  │  ├─ config.mjs            # 站点配置（导航/侧边栏/搜索/Mermaid）
│  │  ├─ sidebar.mjs           # 侧边栏（由 manifest 生成）
│  │  └─ theme/                # 主题样式（金色主题 + 卡片 + 标签）
│  ├─ public/                  # 静态资源（logo、大陆地图、金字塔 SVG）
│  ├─ worldview/               # 世界观：总览/纪元/年表/地图/术语
│  ├─ factions/                # 阵营势力
│  ├─ heroes/                  # 英雄故事（按阵营归类，含完整背景）
│  ├─ relationships/           # 人物关系网
│  ├─ topics/                  # 专题
│  └─ about/                   # 关于本站
└─ README.md
```

## 写作约定

为保持全站风格统一，扩写时请遵循：

- **可考据优先**：以官方剧情、英雄背景故事、官方世界观短片为准；二设/同人内容需明确标注「（考据推测）」。
- **图文表格并茂**：信息型内容尽量用表格；关系/时间线尽量用 [Mermaid](https://mermaid.js.org/) 图；关键设定用 `::: tip` / `::: warning` / `::: quote`（台词）等容器强调，折叠内容用 `::: details`。
- **交叉链接**：英雄、阵营、事件之间用相对链接互相跳转（VitePress 已开启 `cleanUrls`，链接英雄写作 `../heroes/<阵营>#英雄名`）。
- **定位标签**：英雄页顶部用统一的定位标签（坦克/战士/刺客/法师/射手/辅助）。

## 免责声明

详见 [资料来源与版权说明](./sources)。
