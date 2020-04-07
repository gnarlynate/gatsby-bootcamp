import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: {slug: { eq: $slug }} ){
      frontmatter{
        title
        date
      }
      html
    }
  }
`

const Blog = (props) => {
  const frontmatter = props.data.markdownRemark.frontmatter
  
  return ( 
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
}

export default Blog