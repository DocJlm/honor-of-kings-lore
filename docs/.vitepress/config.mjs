import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import container from 'markdown-it-container'
import { sidebar } from './sidebar.mjs'

// 部署到 GitHub Pages 等子路径时由 CI 注入 VITEPRESS_BASE=/honor-of-kings-lore/
const RAW_BASE = process.env.VITEPRESS_BASE || '/'
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`
const REPO = 'https://github.com/winbeau/honor-of-kings-lore'

export default withMermaid(
  defineConfig({
    title: '王者荣耀 · 王者大陆全史',
    description: '《王者荣耀》世界观剧情、阵营势力、英雄故事与人物关系全图鉴 —— 图文 · 表格 · 关系网',
    lang: 'zh-CN',
    base: BASE,
    cleanUrls: true,
    lastUpdated: true,
    ignoreDeadLinks: false,

    head: [
      ['link', { rel: 'icon', href: `${BASE}favicon.svg` }],
      ['meta', { name: 'theme-color', content: '#c8901a' }],
      ['meta', { property: 'og:title', content: '王者荣耀 · 王者大陆全史' }],
      ['meta', { property: 'og:description', content: '《王者荣耀》世界观、阵营、英雄与人物关系全图鉴' }],
    ],

    markdown: {
      // 注册自定义容器 ::: quote（台词），其余 info/tip/warning/danger/details 为 VitePress 原生
      config: (md) => {
        md.use(container, 'quote', {
          validate: (params) => /^quote(\s|$)/.test(params.trim()),
          render: (tokens, idx) => {
            const t = tokens[idx]
            if (t.nesting === 1) {
              const title = t.info.trim().slice(5).trim() || '台词'
              return `<div class="custom-block quote"><p class="custom-block-title">${md.utils.escapeHtml(title)}</p>\n`
            }
            return '</div>\n'
          },
        })
      },
    },

    themeConfig: {
      logo: '/logo.svg',
      outline: { label: '本页内容', level: [2, 3] },
      docFooter: { prev: '上一篇', next: '下一篇' },
      lastUpdatedText: '最近更新',
      darkModeSwitchLabel: '主题',
      lightModeSwitchTitle: '切换到浅色模式',
      darkModeSwitchTitle: '切换到深色模式',
      sidebarMenuLabel: '菜单',
      returnToTopLabel: '回到顶部',

      nav: [
        {
          text: '🏯 世界观',
          items: [
            { text: '世界观总览', link: '/worldview/overview' },
            { text: '纪元编年', link: '/worldview/eras' },
            { text: '大事年表', link: '/worldview/timeline' },
            { text: '地理图志', link: '/worldview/map' },
            { text: '术语词典', link: '/worldview/concepts' },
          ],
        },
        { text: '⚔️ 阵营', link: '/factions/' },
        { text: '🦸 英雄', link: '/heroes/' },
        { text: '💞 关系', link: '/relationships/' },
        { text: '🎯 专题', link: '/topics/' },
        { text: '关于', link: '/about/contributing' },
      ],

      sidebar,

      socialLinks: [{ icon: 'github', link: REPO }],

      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  displayDetails: '显示详情',
                  footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
                },
              },
            },
          },
        },
      },

      editLink: {
        pattern: `${REPO}/edit/main/docs/:path`,
        text: '在 GitHub 上编辑此页',
      },

      footer: {
        message:
          '非营利粉丝向考据整理，仅供学习交流；版权归 <a href="https://pvp.qq.com/" target="_blank" rel="noopener">腾讯《王者荣耀》</a> 所有。',
        copyright: '内容采用 CC BY-NC-SA 4.0 共享',
      },
    },

    mermaid: {
      theme: 'default',
    },
  })
)
