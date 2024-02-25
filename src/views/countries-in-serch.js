import React from 'react'

import { Helmet } from 'react-helmet'

import './countries-in-serch.css'

const CountriesInSerch = (props) => {
  return (
    <div className="countries-in-serch-container">
      <Helmet>
        <title>Countries-in-Serch - Planical modern template</title>
        <meta
          property="og:title"
          content="Countries-in-Serch - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default CountriesInSerch
