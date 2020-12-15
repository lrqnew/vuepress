module.exports = {
    title: '老李讲码',
    description: '老李讲码',
    head: [
        [
            'link', {
                rel: 'icon',
                href: ''
            },
            'meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }
        ]
    ],
    plugins: [
        [
            "vuepress-plugin-boxx",
            'vuepress-plugin-sponsor',
            {
                theme: 'simple',
                alipay: '/sponsor-qrcode/qrcode-alipay.png',
                wechat: '/sponsor-qrcode/qrcode-wechat.png',
                qq: '/sponsor-qrcode/qrcode-qq.png',
                paypal: 'https://www.paypal.me/yokefellow',
                duration: 2000
            },
            '@vuepress-reco/vuepress-plugin-bulletin-popover', {
                width: '300px', // 默认 260px
                title: '消息提示',
                body: [
                  {
                    type: 'title',
                    content: '欢迎加入QQ交流群 🎉🎉🎉',
                    style: 'text-aligin: center;'
                  },
                  {
                    type: 'image',
                    src: '/rvcode_qq.png'
                  }
                ],
                footer: [
                  {
                    type: 'button',
                    text: '打赏',
                    link: '/donate'
                  },
                  {
                    type: 'button',
                    text: '打赏',
                    link: '/donate'
                  }
                ]
              }
         ]
    ],
    theme: 'reco',
    themeConfig: {
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        valineConfig: {
            appId: 'eIcNrJFttbPXObD23yQHVRa9-gzGzoHsz',// your appId
            appKey: 'qWx1PB2naAAQ048hxxvMTNzP', // your appKey
          },
        //导航栏
        nav: [{
            text: '首页',
            link: '/'
        },
        
        //下拉列表显示分组
        // {
        //     text: '学习',
        //     items: [{
        //         text: '前端',
        //         items: [{
        //             text: 'web',
        //             link: '/web/'
        //         },
        //         {
        //             text: 'CSS',
        //             link: '/css/'
        //         },
        //         {
        //             text: 'JS',
        //             link: '/js/'
        //         }
        //     ]
        //     },
        //     {
        //         text: '后端',
        //         items: [{
        //             text: 'nodejs',
        //             link: '/nodejs/'
        //         },
        //         ]
        //     },
        //     ]
        // },
        {
            text: '时间轴',
            link: '/timeline/',
            icon: 'reco-date'
        },
        {
            text: 'GitHub',
            link: 'https://github.com/lrqnew'
        }
        ],
        sidebarDepth: 2,
        lastUpdated: '最后更新时间',
        sidebar: {
            '/js/': [
                '',
                'jscore',
                'questions',
                'english'
            ],
            '/jishu/': [
                '',
                'jwt',
                'code'
            ],
            '/web/': [
                '',
                'textBased',
                'createLink'
            ]
        },
        type: 'blog',
        // // 博客设置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认 “标签”
            }
        },
        startYear: '2019'
    }
}