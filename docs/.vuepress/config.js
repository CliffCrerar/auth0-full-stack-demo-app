module.exports = {
    title: 'SI App demo',
    description: 'Documentation',
    base: '/docs/',
    build: 'dist',
    head: [
        ['link', { rel: 'icon', href:'https://vuepress.vuejs.org/logo.png'}]
    ],
    themeConfig: {
        prevLink: 'auto',
        nextLink: 'auto',
        displayAllHeaders: true,
        sidebar: 'auto',
        extraWatchFiles: [
            './*.md' // Relative path usage
        ],
        nav: [
            { text: '⭐Back to App', link: '/', target: '_blank' },
            {
                text: 'Requirements', link:'/requirements/'
            },
            {
                text: 'Config',
                link: '/configuration/'
            },
            {   
                text: 'Application',
                link:'/application/',
            },
            {
                text: 'JSON API',
                link: '/api/'
            },
            {
                text: 'Authentication',
                link: '/authentication/'
            }
        ]
    } 
}