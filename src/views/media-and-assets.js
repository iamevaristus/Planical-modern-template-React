import React from 'react'

import { Helmet } from 'react-helmet'

import './media-and-assets.css'

const MediaAndAssets = (props) => {
  return (
    <div className="media-and-assets-container">
      <Helmet>
        <title>Media-And-Assets - Planical modern template</title>
        <meta
          property="og:title"
          content="Media-And-Assets - Planical modern template"
        />
      </Helmet>
    </div>
  )
}

export default MediaAndAssets
