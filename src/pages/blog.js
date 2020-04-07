import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
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
      <ol>
        {
          posts.map(post => {
            return (
              <li key={post.node.id}>
                <h2><Link to={`/blog/${post.node.fields.slug}`}>{post.node.frontmatter.title}</Link></h2>
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