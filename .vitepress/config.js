import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
   title: "db-web-dev",
   description: "Web Dev DataBase",
   themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: 'assets/icons/logo.svg',

      nav: [
         {text: 'Home', link: '/'},
         {text: 'HTML', link: 'html/'},
         {text: 'CSS', link: 'css/'},
         {text: 'JS', link: 'js/'},
      ],

      sidebar: [
         {
            text: 'Examples',
            items: [
               {text: 'Markdown Examples', link: '/markdown-examples'},
               {text: 'Runtime API Examples', link: '/api-examples'}
            ]
         }
      ],

      socialLinks: [
         {icon: 'github', link: 'https://github.com/KeepGen/db-web-dev'}
      ]
   }
})
