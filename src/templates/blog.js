import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: {slug: { eq: $slug }} ){
      frontmatter{
        title
        date(formatString:"ddd MMMM Do, YYYY")
      }
      html
    }
    contentfulBlogPost(slug: { eq: $slug}) {
      title
      publishedDate(formatString:"ddd MMMM Do, YYYY")
    }
  }
`

const Blog = (props) => {
  if (props.data.markdownRemark){
    return ( 
      <Layout>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <p>{props.data.markdownRemark.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
      </Layout>
    )
  } else {
    return ( 
      <Layout>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        <div></div>
      </Layout>
    )
  }
  
}

export default Blog