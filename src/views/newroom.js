import React from 'react'

import { Helmet } from 'react-helmet'

import './newroom.css'

const Newroom = (props) => {
  return (
    <div className="newroom-container">
      <Helmet>
        <title>Newroom - Planical modern template</title>
        <meta
          property="og:title"
          content="Newroom - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default Newroom
