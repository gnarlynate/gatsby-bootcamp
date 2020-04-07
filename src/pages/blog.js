import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'

import blogStyles from './blog.module.scss'

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
      <ol className={blogStyles.posts}>
        {
          posts.map(post => {
            return (
              <li 
                key={post.node.id}
                className={blogStyles.post}
              >
                  <Link to={`/blog/${post.node.fields.slug}`}>
                    <h2>{post.node.frontmatter.title}</h2>
                    <p>{post.node.frontmatter.date}</p>
                  </Link>
              </li>
            )
          })
        }
      </ol>
    </Layout>
  )
}

export default BlogPage