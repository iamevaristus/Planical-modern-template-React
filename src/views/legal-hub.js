import React from 'react'

import { Helmet } from 'react-helmet'

import './legal-hub.css'

const LegalHub = (props) => {
  return (
    <div className="legal-hub-container">
      <Helmet>
        <title>Legal-Hub - Planical modern template</title>
        <meta
          property="og:title"
          content="Legal-Hub - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default LegalHub
