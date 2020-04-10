import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


const NotFound = () => {
  return (
    <Layout>
      <Head title='404'/>
      <h1>Page not found</h1>
      <p>Why not try looking at the <Link to='/'>home page</Link> to try something else.</p>
    </Layout>
  )
}

export default NotFound