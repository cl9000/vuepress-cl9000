// .vuepress/config.js
module.exports = {
    title: 'Hello VuePress',
    description: 'Just do it',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    markdown: {
        lineNumbers: true
    },
    // 全局配置来向所有页面应用永久链接
    // permalink: "/:year/:month/:day/:slug",
    // theme: 'default',
    themeConfig: {
        logo: '/logo.png',
        // 导航栏
        // navbar: false, // 禁用所有页面的导航栏
        nav: [
          { text: '首页', link: '/' },
          { text: 'iOS', link: '/iOS/', },
          { text: 'iOS-One', link: '/iOS/AAA-one', },
          { text: 'Bar', link: '/bar/', target:'_self' },
          { text: 'Blog', link: 'https://cl9000.github.io/', target:'_blank', rel:''  },
          {
            text: '选择语言',
            ariaLabel: '语言菜单',
            items: [
              { text: '汉语', link: '/language/chinese/' },
              { text: '英语', link: '/language/english/' },
              { text: 'Group1', items: [{ text: '日语', link: '/language/chinese/' } ] },
            ]
          }
        ],
        // 侧边栏
        // sidebar: 'auto', // 自动生成侧栏
        // sidebar: false, // 禁用侧边栏
        sidebar: [
            {
                title: '首页',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: ['/']
            },
            {
                title: 'iOS-Interview',
                children: [
                    '/iOS/', 
                    '/iOS/AAA-one',
                    '/iOS/Data-structure',
                    '/iOS/Arithmetic',
                    '/iOS/Foundation',
                    '/iOS/UIKit',
                    '/iOS/WebView',
                    '/iOS/Memory-management',
                    '/iOS/Message-passing',
                    '/iOS/Network',
                    '/iOS/Data-storage',
                    '/iOS/Multi-thread',
                    '/iOS/Animation',
                    '/iOS/Image-processing',
                    '/iOS/Data-encryption',
                    '/iOS/Runtime',
                    '/iOS/Runloop',
                    '/iOS/Project-organization',
                    '/iOS/Design-patterns',
                    '/iOS/Component-based',
                    '/iOS/Debug-tips',
                    '/iOS/Performance-optimization',
                    '/iOS/Source-code',
                    '/iOS/Code-management',
                    '/iOS/Continuous-integration'
                ]
            },
            {
                title: 'Bar',
                children: ['/bar/']
            },
            {
                title: 'Contact',
                children: ['/contact']
            },
            {
                title: 'About',
                children: ['/about']
            }
        ],
        // {
        //     '/foo/': [
        //       '',     /* /foo/ */
        //       'one',  /* /foo/one.html */
        //     ],
        //     '/bar/': [
        //       '',      /* /bar/ */
        //     ],
        //     // fallback
        //     '/': [
        //       '',        /* / */
        //       'contact', /* /contact.html */
        //       'about'    /* /about.html */
        //     ]
        // },
        // [
        //     '/',
        //     // '/page-a',
        //     // ['/page-b', 'Explicit link text'],
        //     {
        //         title: 'Group 1',   // 必要的
        //         path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //           '/'
        //         ]
        //     }
        // ],
        // displayAllHeaders: true, // 默认值：false 显示所有页面的标题链接
        // activeHeaderLinks: false, // 默认值：true 活动的标题链接
        // search: false, // 禁用默认的搜索框
        // searchMaxSuggestions: 10, // 搜索结果数量
        lastUpdated: 'Last Updated', // string | boolean  最后更新时间
        // // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        // nextLinks: false,
        // // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        // prevLinks: false,
        // 页面滚动 
        smoothScroll: false,
        
        // GitHub
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'cl9000/web-code',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'cl9000/web-code',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页',

        
    }

}