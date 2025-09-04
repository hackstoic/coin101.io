const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// Create slug for MDX files
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value: `/articles${value}`,
    })
  }
}

// Create pages for MDX files
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for all MDX files
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            language
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create article pages
  const articles = result.data.allMdx.nodes
  const articleTemplate = path.resolve('./src/templates/article.js')

  articles.forEach((node) => {
    const { slug } = node.fields
    const { language } = node.frontmatter

    createPage({
      path: slug,
      component: `${articleTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    })

    // Also create language-specific paths
    if (language) {
      createPage({
        path: `/${language}${slug}`,
        component: `${articleTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
        },
      })
    }
  })
}