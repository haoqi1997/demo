import tag from './tag' //路由表


const routes = [{
        path: "/",
        redirect: '/index/hone'
    },

    {
        path: '/login',
        name: "Login",
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/index',
        name: 'Layout',
        component: () =>
            import ('../components/layout'),
        children: [{
                path: 'hone',
                component: () =>
                    import ('views/home'),
            }, {
                path: 'testOne',
                component: () =>
                    import ('views/test/Testone.vue'),
            },
            {
                path: 'testtwo',
                component: () =>
                    import ('views/test/Testtwo.vue'),
            },
            {
                path: 'mythree',
                component: () =>
                    import ('views/my/Mythree.vue'),
            },
            {
                path: 'tagindex',
                component: () =>
                    import ('../views/tag'),
                children: [{
                        path: 'tagone',
                        component: () =>
                            import ('../views/tag/Tagone.vue')

                    },
                    {
                        path: 'tagtwo',
                        name: 'tagtwo',
                        component: () =>
                            import ('../views/tag/Tagtwo.vue')


                    },
                    {
                        path: 'tagthree',
                        name: 'tagthree',
                        component: () =>
                            import ('../views/tag/Tagthree.vue')


                    },
                    {
                        path: 'tagfour',
                        name: 'tagfour',
                        component: () =>
                            import ('../views/tag/Tagfour.vue')


                    },
                    {
                        path: 'tagfive',
                        name: 'tagfive',
                        component: () =>
                            import ('../views/tag/Tagfive.vue')


                    },
                ]
            },
            {
                path: '*',
                redirect: '/index/hone'
            }


        ]
    }, {
        path: '*',
        redirect: '/index/hone'
    }




]

export default routes