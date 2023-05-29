import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
   title: "db-web-dev",
   description: "Web Dev DataBase",
   head: [
      ['link', { rel: "shortcut icon", href: "favicon.svg"}],
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
                  {text: 'Markdown Examples', link: '/markdown-examples'},
                  {text: 'Runtime API Examples', link: '/api-examples'}
               ]
            }
         ],
      },

      socialLinks: [
         {icon: 'github', link: 'https://github.com/KeepGen/db-web-dev'}
      ]
   }
})
