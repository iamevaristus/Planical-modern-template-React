import React from 'react'

import { Helmet } from 'react-helmet'

import './safety-guidelines.css'

const SafetyGuidelines = (props) => {
  return (
    <div className="safety-guidelines-container">
      <Helmet>
        <title>Safety-Guidelines - Planical modern template</title>
        <meta
          property="og:title"
          content="Safety-Guidelines - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default SafetyGuidelines
