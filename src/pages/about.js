import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is a site made with Gatsby - with help from Andrew Mead.</p>
      <p>Find something exciting in here, or just want to chat? Get in touch with me <Link to ='/contact'>here</Link></p>
    </Layout>
  )
}

export default AboutPage