import React from 'react'

import { Helmet } from 'react-helmet'

import './support-hub.css'

const SupportHub = (props) => {
  return (
    <div className="support-hub-container">
      <Helmet>
        <title>Support-Hub - Planical modern template</title>
        <meta
          property="og:title"
          content="Support-Hub - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default SupportHub
