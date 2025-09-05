import React, { useState, useEffect, useMemo } from "react"
import { graphql, Link, navigate } from "gatsby"
import styled from "styled-components"

const ArticlesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a202c;
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
`

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`

const ArticleCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #e2e8f0;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  color: #1a202c;
  margin-bottom: 1rem;
  line-height: 1.3;
`

const ArticleDescription = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #718096;
`

const ArticleDate = styled.span`
  background: #edf2f7;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
`

const ArticleLanguage = styled.span`
  background: #3182ce;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
`

const ReadMoreButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #3182ce, #2c5aa0);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    background: linear-gradient(135deg, #2c5aa0, #2a4a8a);
    transform: translateY(-1px);
  }
`

const BackButton = styled(Link)`
  display: inline-block;
  color: #3182ce;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 2px solid #3182ce;
  border-radius: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: #3182ce;
    color: white;
  }
`

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
`

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: 2px solid #3182ce;
  background: ${props => props.$active ? '#3182ce' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#3182ce'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  
  &:hover {
    background: #3182ce;
    color: white;
  }
`

const ArticlesPage = ({ data, pageContext, location }) => {
  const articles = data.allMdx.nodes
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [filteredArticles, setFilteredArticles] = useState(articles)

  const topics = useMemo(() => [
    { key: 'all', name: '全部文章' },
    { key: 'regulatory_policy', name: '监管政策' },
    { key: 'application_scenarios', name: '应用场景' },
    { key: 'field_research', name: '实地调研' },
    { key: 'expert_opinions', name: '大咖观点' },
    { key: 'statistics', name: '统计数据' },
    { key: 'related_companies', name: '相关公司' },
    { key: 'related_tools', name: '相关工具' },
    { key: 'industry_reports', name: '行业报告' },
    { key: 'content_selection', name: '内容精选' },
    { key: 'hot_news', name: '热点资讯' },
    { key: 'basic_concepts', name: '基础概念' }
  ], [])

  useEffect(() => {
    // 从URL参数获取topic
    const urlParams = new URLSearchParams(location.search)
    const topicParam = urlParams.get('topic')
    if (topicParam && topics.find(t => t.key === topicParam)) {
      setSelectedTopic(topicParam)
    }
  }, [location.search, topics])

  useEffect(() => {
    if (selectedTopic === 'all') {
      setFilteredArticles(articles)
    } else {
      const filtered = articles.filter(article => 
        article.frontmatter.category === selectedTopic ||
        article.fields.slug.includes(selectedTopic)
      )
      setFilteredArticles(filtered)
    }
  }, [selectedTopic, articles])

  return (
    <ArticlesContainer>
      <Header>
        <Title>文章列表</Title>
        <Subtitle>
          探索我们关于加密货币和区块链技术的综合指南
        </Subtitle>
      </Header>

      <FilterContainer>
        {topics.map(topic => (
          <FilterButton
            key={topic.key}
            $active={selectedTopic === topic.key}
            onClick={() => {
              setSelectedTopic(topic.key)
              // 更新URL参数
              const newUrl = topic.key === 'all' 
                ? '/articles/' 
                : `/articles/?topic=${topic.key}`
              navigate(newUrl, { replace: true })
            }}
          >
            {topic.name}
          </FilterButton>
        ))}
      </FilterContainer>

      <ArticlesGrid>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <ArticleCard key={article.id}>
              <ArticleMeta>
                <ArticleDate>{article.frontmatter.date}</ArticleDate>
                <ArticleLanguage>
                  {article.frontmatter.language === 'en' ? 'English' : '中文'}
                </ArticleLanguage>
              </ArticleMeta>
              
              <ArticleTitle>{article.frontmatter.title}</ArticleTitle>
              <ArticleDescription>{article.frontmatter.description}</ArticleDescription>
              
              <ReadMoreButton to={
                article.frontmatter.language === 'en' 
                  ? `/articles/${article.frontmatter.slug || article.fields.slug?.replace('/articles/', '').replace('/', '')}/en/`
                  : `/articles/${article.frontmatter.slug || article.fields.slug?.replace('/articles/', '').replace('/', '')}/`
              }>
                {article.frontmatter.language === 'en' ? 'Read More →' : '阅读更多 →'}
              </ReadMoreButton>
            </ArticleCard>
          ))
        ) : (
          <div style={{ 
            gridColumn: '1 / -1', 
            textAlign: 'center', 
            padding: '3rem',
            color: '#718096',
            fontSize: '1.1rem'
          }}>
            暂无相关文章，请选择其他话题
          </div>
        )}
      </ArticlesGrid>

      <div style={{ textAlign: 'center' }}>
        <BackButton to="/">
          ← 返回首页
        </BackButton>
      </div>
    </ArticlesContainer>
  )
}

export default ArticlesPage

export const query = graphql`
  query ArticlesQuery {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
          language
          slug
          category
        }
        fields {
          slug
        }
      }
    }
  }
`