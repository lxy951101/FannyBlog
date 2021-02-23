module.exports = {
  title: 'Fanny',
  description: 'Web development, Frontend, JavaScript',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
      {
        text: "Github",
        link: "https://github.com/FiggerDancer"
      }
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/FiggerDancer',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'Fanny Li © 2019',
          link: '',
        },
      ],
    },
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        title: '随笔', // Entry and pagination page titles for current classifier.
        layout: 'IndexWriting', // Layout component name for entry page.
        frontmatter:{ //Front matter for entry page.
          tag: 'vuepress'
        },
        itemLayout: 'Writing', // Layout for matched pages.
        itemPermalink: '/:year/:month/:day/:slug', // Permalink for matched pages.
        // pagination: { // Pagination behavior
        //   lengthPerPage: 2,
        // },
      }
    ],
    smoothScroll: true
  },
}
