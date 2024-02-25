import React from 'react'

import { Helmet } from 'react-helmet'

import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>About-Us - Planical modern template</title>
        <meta
          property="og:title"
          content="About-Us - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default AboutUs
