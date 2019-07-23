module.exports = {
    title: '李瑞清',
    description: '李瑞清',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '爱代码工具箱',
                link: 'http://www.wicode.cn/'
            },
            //   {text:'前端导航',link:'http://www.wicode.cn/'},
            //   {text:'每日分享',link:'http://www.wicode.cn/'},
            //   {text:'关于',link:'/about'},
            {
                text: '分享',
                items: [{
                        text: '技术',
                        link: '/jishu/'
                    },
                    {
                        text: '工具',
                        link: '/fx/'
                    }
                ]
            },
            //下拉列表显示分组
            {
                text: '学习',
                items: [{
                        text: '前端',
                        items: [{
                                text: 'HTML',
                                link: '/html/'
                            },
                            {
                                text: 'CSS',
                                link: '/css/'
                            },
                            {
                                text: 'JS',
                                link: '/js/'
                            }


                        ]
                    },
                    {
                        text: '后端',
                        items: [{
                                text: 'nodejs',
                                link: '/nodejs/'
                            },
                         //{text:'java',link:'/java/'}
                        ]
                    },
                ]
            },
            {
                text: 'GitHub',
                link: 'https://github.com/lrqnew'
            }
        ],
        sidebarDepth: 3,
        lastUpdated: 'Last Updated',
        sidebar: {
            '/fx/': [
                '',
                'fx1',
                'fx2'
            ],
            '/js/': [
                '',
                'jscore',
                'questions',
                'english'
            ],
            '/jishu/':[
                '',
                'web',
                'back'
            ]
            //   '/css/':[
            //       '',
            //       'css1',
            //       'css2'
            //   ],
            //   '/nodejs/':[
            //       '',
            //       'nodejs1',
            //       'nodejs2'
            //   ],
            //   '/java/':[
            //       '/java/',//java文件夹的readme.md 不是下拉框形式
            //       {
            //           title:'java标题',
            //           children:[
            //               '/java/java1',//以docs为根目录来查找文件
            //               '/java/java2'
            //           ]
            //       }
            //   ]
        }
    }
}