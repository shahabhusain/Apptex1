import React from 'react'
import { Helmet } from 'react-helmet'

const MetaTags = ({title,description,link,image}) => {
  return (
    <div>
           <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta property='image' content={image} />
        <link rel="canonical" href={link} />
      </Helmet>
    </div>
  )
}

export default MetaTags