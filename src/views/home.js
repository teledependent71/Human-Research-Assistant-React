import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Human Research Assistant</title>
        <meta property="og:title" content="Human Research Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
