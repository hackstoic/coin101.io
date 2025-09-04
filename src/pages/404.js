import React from "react"

const NotFoundPage = ({ data, location }) => {

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        maxWidth: '600px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          color: '#333',
          margin: '0 0 1rem 0'
        }}>404</h1>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: '2rem',
          color: '#666',
          margin: '0 0 2rem 0'
        }}>
          Page Not Found
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          color: '#888',
          margin: '0 0 2rem 0'
        }}>
          The page you are looking for does not exist.
        </p>
        <a 
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007acc',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#005a9e'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007acc'}
          onFocus={(e) => e.target.style.backgroundColor = '#005a9e'}
          onBlur={(e) => e.target.style.backgroundColor = '#007acc'}
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default NotFoundPage