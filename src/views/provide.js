import React from 'react'

import { Helmet } from 'react-helmet'

import './provide.css'

const Provide = (props) => {
  return (
    <div className="provide-container">
      <Helmet>
        <title>Provide - Planical modern template</title>
        <meta
          property="og:title"
          content="Provide - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default Provide
