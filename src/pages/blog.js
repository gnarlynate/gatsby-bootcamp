import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges {
          node {
            id
            frontmatter{
              title
              date
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up later on.</p>
      <ol>
        {
          posts.map(post => {
            return (
              <li key={post.node.id}>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
              </li>
            )
          })
        }
      </ol>
    </Layout>
  )
}

export default BlogPage