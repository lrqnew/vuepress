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
                alipay: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b1ebbd3c-ca49-405b-957b-effe60782276/686a8516-8e4c-4cc0-b4e0-a69841228543.JPG',
                wechat: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b1ebbd3c-ca49-405b-957b-effe60782276/0d50c5a8-f7a5-4136-8a7f-631653024b97.JPG',
                qq: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b1ebbd3c-ca49-405b-957b-effe60782276/001bfe79-3c62-4774-9416-041cd5964406.JPG',
                duration: 2000
            },
        ],
        [
            '@vuepress-reco/comments',
            {
              solution: 'valine',
              options: {
                appId: 'eIcNrJFttbPXObD23yQHVRa9-gzGzoHsz',
                appKey: 'qWx1PB2naAAQ048hxxvMTNzP',
              }
            }
          ]
     
    ],
    theme: 'reco',
    themeConfig: {
        // valineConfig: {
        //     appId: 'eIcNrJFttbPXObD23yQHVRa9-gzGzoHsz',// your appId
        //     appKey: 'qWx1PB2naAAQ048hxxvMTNzP', // your appKey
        //     path: '<%- frontmatter.commentid || frontmatter.permalink %>'
        //   },
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
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