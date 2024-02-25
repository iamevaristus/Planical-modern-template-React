import React from 'react'

import { Helmet } from 'react-helmet'

import './market-place.css'

const MarketPlace = (props) => {
  return (
    <div className="market-place-container">
      <Helmet>
        <title>MarketPlace - Planical modern template</title>
        <meta
          property="og:title"
          content="MarketPlace - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default MarketPlace
