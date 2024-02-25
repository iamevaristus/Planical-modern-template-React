import React from 'react'

import { Helmet } from 'react-helmet'

import './help-center.css'

const HelpCenter = (props) => {
  return (
    <div className="help-center-container">
      <Helmet>
        <title>Help-Center - Planical modern template</title>
        <meta
          property="og:title"
          content="Help-Center - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default HelpCenter
