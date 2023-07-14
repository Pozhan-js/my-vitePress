/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-07-14 21:40:00
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-07-15 00:27:48
 * @FilePath: /my-vitePress/docs/.vitepress/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'my vitePress', //网站标题
  base: '/my-vitePress/', //将仓库名字改成base
  description: 'frontend docs', //网站描述
  lastUpdated: true,
  lang: 'en-US', //使用语言
  // base: '/Pozhan-js.github.io/',
  head: [  // 配置head
    [
      'link',
      {
        rel: 'icon', //关键字
        type: 'image/x-icon', //图片类型
        href: '/favicon.ico', //图片路径
      },
    ],
  ],

  themeConfig: {
    siteTitle: 'OnePice',
    // search: {
    //   provider: 'local'
    // },
    logo: '/logo.png',  // logo 首页logo
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '技术栈', link: '/vue' },
      { text: '导航页', link: '/guide' },
      {
        text: '菜单页',
        items: [
          { text: '变更日志', link: '/day-text' },
          { text: '贡献', link: '/contribute' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '技术分享', link: '/vue' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Pozhan-js' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present xiumubai',
    },
  }
})
