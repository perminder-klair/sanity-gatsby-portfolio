export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d70f98be37089e433f4f877',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3axfqbgm',
                  apiId: '13b017fc-f793-482b-81de-97d3c0ec9442'
                },
                {
                  buildHookId: '5d70f98c604f2fe331f13d1f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-i9taqdyk',
                  apiId: 'fb032f10-ff88-4996-83d4-24b7aabf9038'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/perminder-klair/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-i9taqdyk.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
