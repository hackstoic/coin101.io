import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const ArticleContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
`

const Header = styled.header`
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a202c;
  margin-bottom: 1rem;
  line-height: 1.2;
`

const Meta = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #718096;
`

const Date = styled.span`
  background: #edf2f7;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
`

const Language = styled.span`
  background: #3182ce;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
`

const Author = styled.span`
  background: #38a169;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
`

const Description = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  font-style: italic;
`

const Content = styled.div`
  margin-bottom: 3rem;
  
  h1, h2, h3, h4, h5, h6 {
    color: #1a202c;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.8rem;
    border-bottom: 2px solid #3182ce;
    padding-bottom: 0.5rem;
  }
  
  h3 {
    font-size: 1.4rem;
    color: #3182ce;
  }
  
  p {
    margin-bottom: 1rem;
    color: #2d3748;
  }
  
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }
  
  li {
    margin-bottom: 0.5rem;
    color: #2d3748;
  }
  
  strong {
    color: #1a202c;
    font-weight: 600;
  }
  
  code {
    background: #f7fafc;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 0.9rem;
  }
  
  blockquote {
    border-left: 4px solid #3182ce;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #4a5568;
  }
`

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
`

const BackButton = styled(Link)`
  display: inline-block;
  color: #3182ce;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border: 2px solid #3182ce;
  border-radius: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: #3182ce;
    color: white;
  }
`

const HomeButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #3182ce, #2c5aa0);
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: linear-gradient(135deg, #2c5aa0, #2a4a8a);
    transform: translateY(-1px);
  }
`

const ArticleTemplate = ({ data, pageContext, children }) => {
  const { mdx } = data
  const { frontmatter } = mdx

  return (
    <ArticleContainer>
      <Header>
        <Meta>
          <Date>{frontmatter.date}</Date>
          <Language>
            {frontmatter.language === 'en' ? 'English' : '中文'}
          </Language>
          {frontmatter.author && (
            <Author>{frontmatter.author}</Author>
          )}
        </Meta>
        
        <Title>{frontmatter.title}</Title>
        
        {frontmatter.description && (
          <Description>{frontmatter.description}</Description>
        )}
      </Header>

      <Content>
        {children}
      </Content>

      <Navigation>
        <BackButton to="/articles">
          ← Back to Articles
        </BackButton>
        <HomeButton to="/">
          Back to Home →
        </HomeButton>
      </Navigation>
    </ArticleContainer>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        language
      }
    }
  }
`