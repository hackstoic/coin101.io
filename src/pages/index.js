import React from 'react'
import { Link } from 'gatsby'


const IndexPage = () => {

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', padding: '1rem 0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3182ce' }}>
          Coin101
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        </div>
      </nav>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: '#3182ce', fontSize: '3rem', marginBottom: '1rem' }}>
          欢迎来到Coin101
        </h1>
        <h2 style={{ color: '#4a5568', fontSize: '1.5rem', marginBottom: '1rem' }}>
          您的加密货币教育门户
        </h2>
        <p style={{ color: '#718096', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          从这里读懂稳定币
        </p>
        <Link 
          to="/articles?topic=basic_concepts"
          style={{
            backgroundColor: '#3182ce',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1.1rem',
            marginTop: '2rem',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          开始学习
        </Link>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <h3 style={{ textAlign: 'center', color: '#2d3748', marginBottom: '2rem' }}>
          为什么选择Coin101？
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <h4 style={{ color: '#3182ce', marginBottom: '1rem' }}>
              新手友好
            </h4>
            <p style={{ color: '#718096' }}>
              从基础开始，提供易于理解的解释说明
            </p>
          </div>
          <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <h4 style={{ color: '#3182ce', marginBottom: '1rem' }}>
              内容全面
            </h4>
            <p style={{ color: '#718096' }}>
              涵盖从基础概念到监管政策的所有内容
            </p>
          </div>
          <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <h4 style={{ color: '#3182ce', marginBottom: '1rem' }}>
              持续更新
            </h4>
            <p style={{ color: '#718096' }}>
              紧跟稳定币的最新发展动态
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 style={{ textAlign: 'center', color: '#2d3748', marginBottom: '2rem' }}>
          热门话题
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {[
            { key: 'regulatory_policy', name: '监管政策', description: '了解各国在稳定币领域的监管政策' },
            { key: 'application_scenarios', name: '应用场景', description: '探索稳定币的实际应用场景' },
            { key: 'field_research', name: '实地调研', description: '深入了解稳定币市场的实地调研报告' },
            { key: 'expert_opinions', name: '大咖观点', description: '行业专家对稳定币发展的深度见解' },
            { key: 'statistics', name: '统计数据', description: '稳定币市场的关键数据和趋势分析' },
            { key: 'related_companies', name: '相关公司', description: '稳定币生态中的重要企业和项目' },
            { key: 'related_tools', name: '相关工具', description: '稳定币交易和管理的实用工具' },
            { key: 'industry_reports', name: '行业报告', description: '权威机构发布的稳定币行业报告' },
            { key: 'content_selection', name: '内容精选', description: '精心挑选的优质稳定币内容' },
            { key: 'hot_news', name: '热点资讯', description: '稳定币领域的最新动态和热点新闻' },
            { key: 'basic_concepts', name: '基础概念', description: '稳定币相关的基础知识和核心概念' }
          ].map(topic => (
            <Link
              key={topic.key}
              to={`/articles?topic=${topic.key}`}
              style={{
                padding: '1.5rem',
                backgroundColor: '#f7fafc',
                borderRadius: '12px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textDecoration: 'none',
                color: '#2d3748',
                fontWeight: '500',
                border: '1px solid #e2e8f0',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#edf2f7';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#f7fafc';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{topic.name}</div>
              <div style={{ fontSize: '0.9rem', color: '#718096' }}>{topic.description}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default IndexPage
