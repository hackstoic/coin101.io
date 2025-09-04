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
    {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            language
            slug
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
    return
  }

  // Create article pages
  const articles = result.data.allMdx.nodes
  const articleTemplate = path.resolve('./src/templates/article.js')

  articles.forEach((node) => {
    const { language } = node.frontmatter
    const baseSlug = node.frontmatter?.slug || node.fields?.slug?.replace('/articles/', '').replace('/', '')
    const contentFilePath = node.internal.contentFilePath

    if (!baseSlug) {
      reporter.warn(`No slug found for MDX node ${node.id}`)
      return
    }

    // Create language-specific paths based on file path
    let finalPath
    if (language === 'zh' || contentFilePath.includes('.zh.mdx')) {
      finalPath = `/articles/${baseSlug}/`
    } else if (language === 'en' || contentFilePath.includes('.en.mdx')) {
      finalPath = `/articles/${baseSlug}/en/`
    } else {
      finalPath = `/articles/${baseSlug}/`
    }



    createPage({
      path: finalPath,
      component: `${articleTemplate}?__contentFilePath=${contentFilePath}`,
      context: {
        id: node.id,
        language: language,
        contentFilePath: contentFilePath,
      },
    })
  })
}