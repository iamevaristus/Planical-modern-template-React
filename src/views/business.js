import React from 'react'

import { Helmet } from 'react-helmet'

import './business.css'

const Business = (props) => {
  return (
    <div className="business-container">
      <Helmet>
        <title>Business - Planical modern template</title>
        <meta
          property="og:title"
          content="Business - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default Business
