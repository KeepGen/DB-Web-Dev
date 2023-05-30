import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
   title: "db-web-dev",
   description: "Web Dev DataBase",
   head: [
      ['link', { rel: "shortcut icon", href: "favicon.ico"}],
   ],
   themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: 'assets/icons/logo.svg',

      nav: [
         {text: 'HTML', link: 'html/'},
         {text: 'CSS', link: 'css/'},
         {text: 'JS', link: 'js/'},
      ],

      sidebar: {
         '/html/': [
            {
               text: 'HTML DataBase',
               items: [
                  {text: 'Markdown Examples', link: '/markdown-examples'},
                  {text: 'Runtime API Examples', link: '/api-examples'}
               ]
            }
         ],
         '/css/': [
            {
               text: 'CSS DataBase',
               items: [
                  {text: 'Markdown Examples', link: '/markdown-examples'},
                  {text: 'Runtime API Examples', link: '/api-examples'}
               ]
            }
         ],
         '/js/': [
            {
               text: 'JavaScript DataBase',
               items: [
                  {text: 'Логические операторы',
                     link: '/js/logical/',
                     collapsed: true,
                     items: [
                        {text: 'Краткое содержание', link: '/js/logical/'},
                        {text: 'Оператор И', link: '/js/logical/and'},
                        {text: 'Оператор ИЛИ', link: '/js/logical/or'},
                        {text: 'Оператор НЕ', link: '/js/logical/not'},
                     ]
                  },
                  {text: 'Условие if/else',
                     link: '/js/if-else/',
                     collapsed: true,
                     items: [
                        {text: 'Краткое содержание', link: '/js/if-else/'},
                     ]
                  },
                  {text: 'Циклы',
                     link: '/js/loops/',
                     collapsed: true,
                     items: [
                        {text: 'Краткое содержание', link: '/js/loops/'},
                        {text: 'Цикл WHILE', link: '/js/loops/while'},
                        {text: 'Цикл DO WHILE', link: '/js/loops/do-while'},
                        {text: 'Цикл FOR', link: '/js/loops/for'},
                     ]
                  },
                  {text: 'Функции',
                     link: '/js/functions/',
                     collapsed: true,
                     items: [
                        {text: 'Краткое содержание', link: '/js/functions/'},
                     ]
                  },
                  {text: 'Объекты',
                     link: '/js/objects/',
                     collapsed: true,
                     items: [
                        {text: 'Краткое содержание', link: '/js/objects/'},
                     ]
                  },
               ]
            }
         ],
      },

      socialLinks: [
         {icon: 'github', link: 'https://github.com/KeepGen/db-web-dev'}
      ],

      footer: {
         message: 'Released under the MIT License.',
         copyright: 'Copyright © 2023-present DB-WEB-DEV'
      }
   }
})
