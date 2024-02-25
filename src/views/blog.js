import React from 'react'

import { Helmet } from 'react-helmet'

import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Planical modern template</title>
        <meta property="og:title" content="Blog - Planical modern template" />
      </Helmet>
    </div>
  )
}

export default Blog
