import React from 'react'

import { Helmet } from 'react-helmet'

import './error.css'

const Error = (props) => {
  return (
    <div className="error-container">
      <Helmet>
        <title>Error - Planical modern template</title>
        <meta property="og:title" content="Error - Planical modern template" />
      </Helmet>
    </div>
  )
}

export default Error
