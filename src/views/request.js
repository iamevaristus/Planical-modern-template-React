import React from 'react'

import { Helmet } from 'react-helmet'

import './request.css'

const Request = (props) => {
  return (
    <div className="request-container">
      <Helmet>
        <title>Request - Planical modern template</title>
        <meta
          property="og:title"
          content="Request - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default Request
