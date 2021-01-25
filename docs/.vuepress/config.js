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
        ],
        [
             '@vuepress-reco/vuepress-plugin-bulletin-popover', {
                title: '消息提示',
                body: [
                  {
                    type: 'title',
                    content: '欢迎加入QQ交流群 🎉🎉🎉',
                    style: 'text-aligin: center;'
                  },
                  {
                    type: 'text',
                    content:'QQ群：527677005',
                    style: 'text-aligin: center;color:#3eaf7c;font-size:24px'
                  }
                ],
                footer: [
                  {
                    type: 'button',
                    text: '打赏',
                    link: '/donate'
                  },
                ]
              }
        ],
        [
            'vuepress-plugin-sponsor',
            {
                theme: 'simple',
                alipay: '/sponsor-qrcode/qrcode-alipay.png',
                wechat: '/sponsor-qrcode/qrcode-wechat.png',
                qq: '/sponsor-qrcode/qrcode-qq.png',
                paypal: 'https://www.paypal.me/yokefellow',
                duration: 2000
            },
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
            ],
            '/donate':[
                ''
            ]
        },
        type: 'blog',
        // 博客设置
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