<div align="center">

<img src="docs/assets/img/logo.svg" width="96" alt="logo"/>

# 王者荣耀 · 王者大陆全史

**《王者荣耀》世界观剧情 · 阵营势力 · 英雄故事 · 人物关系 全图鉴**

图文 · 表格 · 关系网 —— 务求全面，越详细越好。

[![docs](https://img.shields.io/badge/阅读-在线文档-f5c542)](https://winbeau.github.io/honor-of-kings-lore/)
[![mkdocs](https://img.shields.io/badge/built%20with-MkDocs--Material-blue)](https://squidfunk.github.io/mkdocs-material/)
![heroes](https://img.shields.io/badge/英雄-120%2B-c8901a)
![factions](https://img.shields.io/badge/阵营-17-7e57c2)

</div>

---

## 📖 如何阅读

本仓库是一座用 [MkDocs-Material](https://squidfunk.github.io/mkdocs-material/) 构建的「**可点击阅读、跳转到页面**」的百科站点。

=== "在线阅读（推荐）"

    部署到 GitHub Pages 后，访问：**https://winbeau.github.io/honor-of-kings-lore/**
    （把 `winbeau` 换成你的用户名；执行 `mkdocs gh-deploy` 即可一键部署。）

=== "本地预览"

    ```bash
    python3 -m venv .venv && source .venv/bin/activate
    pip install mkdocs-material mkdocs-glightbox
    mkdocs serve          # 打开 http://127.0.0.1:8000
    ```

> 下方目录中的「阅读」链接直接指向 `docs/` 中的页面，在 GitHub 上即可点击查看；构建为站点后则获得搜索、深色模式、图片放大、Mermaid 图等完整体验。

---

## 🗺️ 世界观

| 章节 | 阅读 | 简介 |
| :-- | :-- | :-- |
| 世界观总览 | [📖 阅读](docs/worldview/overview.md) | 科幻框架、方舟核心、神明 vs 魔种、等级金字塔 |
| 纪元编年 | [📖 阅读](docs/worldview/eras.md) | 起源／上古／神明／人类／先民等纪元与平行宇宙 |
| 大事年表 | [📖 阅读](docs/worldview/timeline.md) | 从旧地球毁灭到灭世之战的关键事件时间轴 |
| 地理图志 | [📖 阅读](docs/worldview/map.md) | 王者大陆区域示意图与各地风土 |
| 术语词典 | [📖 阅读](docs/worldview/concepts.md) | 方舟、源能、十二奇迹、通天塔等核心概念 |

## ⚔️ 阵营势力

> 总览：[📖 阵营总览](docs/factions/index.md) ｜ 英雄索引：[📖 全英雄图鉴](docs/heroes/index.md)

| 阵营 | 阵营设定 | 英雄故事 | 简介 |
| :-- | :-- | :-- | :-- |
| 长安城 | [📖 设定](docs/factions/changan.md) | [👥 英雄](docs/heroes/changan.md) | 大陆第一雄城，封印的方舟，女帝武则天治下 |
| 稷下学院 | [📖 设定](docs/factions/jixia.md) | [👥 英雄](docs/heroes/jixia.md) | 最高学府，武道·魔道·机关三学派 |
| 墨家机关城·天工坊 | [📖 设定](docs/factions/mojia-jiguan.md) | [👥 英雄](docs/heroes/mojia-jiguan.md) | 机关术造物的圣地 |
| 三分之地·魏国 | [📖 设定](docs/factions/sanfen-wei.md) | [👥 英雄](docs/heroes/sanfen-wei.md) | 魏武挥鞭，武都霸业 |
| 三分之地·蜀国 | [📖 设定](docs/factions/sanfen-shu.md) | [👥 英雄](docs/heroes/sanfen-shu.md) | 仁德义枭与五虎上将 |
| 三分之地·吴国 | [📖 设定](docs/factions/sanfen-wu.md) | [👥 英雄](docs/heroes/sanfen-wu.md) | 江东基业，逐火之翼 |
| 镐京·封神 | [📖 设定](docs/factions/haojing-fengshen.md) | [👥 英雄](docs/heroes/haojing-fengshen.md) | 封神演义具象，帝辛与姜子牙 |
| 上古众神·神话 | [📖 设定](docs/factions/shanggu-shenhua.md) | [👥 英雄](docs/heroes/shanggu-shenhua.md) | 女娲、盘古、后羿等创世诸神 |
| 长城守卫军 | [📖 设定](docs/factions/changcheng.md) | [👥 英雄](docs/heroes/changcheng.md) | 镇守北疆，抵御魔种暗影 |
| 云中漠地·边陲 | [📖 设定](docs/factions/yunzhong-modi.md) | [👥 英雄](docs/heroes/yunzhong-modi.md) | 大漠高原，王者峡谷所在 |
| 蓬莱·东海／海都 | [📖 设定](docs/factions/penglai-donghai.md) | [👥 英雄](docs/heroes/penglai-donghai.md) | 深海之畔，命运家族 |
| 扶桑／血族之地 | [📖 设定](docs/factions/fusang-xuezu.md) | [👥 英雄](docs/heroes/fusang-xuezu.md) | 极东岛屿，血族之乱 |
| 江湖侠客 | [📖 设定](docs/factions/jianghu-xiake.md) | [👥 英雄](docs/heroes/jianghu-xiake.md) | 浪迹大陆的剑客与游侠 |
| 百越·建木 | [📖 设定](docs/factions/baiyue.md) | [👥 英雄](docs/heroes/baiyue.md) | 天生巨木建木，白虎信仰 |
| 魔道·暗影·深渊 | [📖 设定](docs/factions/modao-shadow-abyss.md) | [👥 英雄](docs/heroes/modao-shadow-abyss.md) | 倒悬天之外的暗面力量 |
| 联动英雄 | [📖 设定](docs/factions/liandong-snk.md) | [👥 英雄](docs/heroes/liandong-snk.md) | 跨 IP 联动而来的客将 |
| 上古遗族·多职业 | [📖 设定](docs/factions/yuanchu-shenhua-misc.md) | [👥 英雄](docs/heroes/yuanchu-shenhua-misc.md) | 元流之子等特殊角色 |

## 💞 人物关系

| 章节 | 阅读 | 简介 |
| :-- | :-- | :-- |
| 关系总览 | [📖 阅读](docs/relationships/index.md) | 全局关系网络图与分类导航 |
| 恋人与 CP | [📖 阅读](docs/relationships/lovers.md) | 官配、演义、皮肤 CP 全收录 |
| 血缘与亲属 | [📖 阅读](docs/relationships/kinship.md) | 兄弟姐妹、家族血脉 |
| 师徒与同窗 | [📖 阅读](docs/relationships/mentor.md) | 三贤者门下、稷下同窗 |
| 宿敌与对立 | [📖 阅读](docs/relationships/rivalry.md) | 恩怨、政治宿敌、阵营对立 |
| 战友与团体 | [📖 阅读](docs/relationships/squad.md) | 星之队、长城守卫军等 |

## 🎯 专题

| 专题 | 阅读 | 简介 |
| :-- | :-- | :-- |
| 专题总览 | [📖 阅读](docs/topics/index.md) | 跨阵营的主题式深读 |
| 神魔之争 | [📖 阅读](docs/topics/gods-vs-demons.md) | 世界观核心冲突 |
| 平行宇宙 | [📖 阅读](docs/topics/parallel-worlds.md) | 破晓·琥珀纪元·王者荣耀世界 |
| 三分之地与三国 | [📖 阅读](docs/topics/three-kingdoms.md) | 三国演义的再演绎 |
| 封神演义在王者 | [📖 阅读](docs/topics/fengshen.md) | 封神神话的融入 |
| 神兵·名剑·信物 | [📖 阅读](docs/topics/artifacts.md) | 方舟核心、干将莫邪等器物 |
| 联动宇宙 | [📖 阅读](docs/topics/crossover.md) | SNK 等跨 IP 联动 |
| 王者峡谷的由来 | [📖 阅读](docs/topics/canyon.md) | MOBA 主战场的世界观落点 |

## 📌 关于

- [参与共建 & 本地预览](docs/about/contributing.md)
- [资料来源与版权说明](docs/about/sources.md)

---

> **免责声明**：本项目为非营利的粉丝向二次整理与考据，仅供学习交流；《王者荣耀》世界观、英雄、剧情与图像版权均归
> [腾讯《王者荣耀》](https://pvp.qq.com/) 所有。详见[版权说明](docs/about/sources.md)。
