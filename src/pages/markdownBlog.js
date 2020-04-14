import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import blogStyles from '../pages/blog.module.scss'

const MarkdownBlog = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "ddd MMMM Do, YYYY")
          }
        }
      }
    }
  }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
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
  )
}

export default MarkdownBlog