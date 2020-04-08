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
              date(formatString: "ddd MMMM Do, YYYY")
            }
          }
        }
      }
      allContentfulBlogPost(sort:{
        fields: publishedDate,
        order: DESC
      }){
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "ddd MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges
  const contentfulPosts = data.allContentfulBlogPost.edges

  return (
    <Layout>
      <h1>Markdown Blog</h1>
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
      <h1>Contentful Blog</h1>
      <ol className={blogStyles.posts}>
        {
          contentfulPosts.map(cPost => {
            return (
              <li
                key={cPost.node.id}
                className={blogStyles.post}
              >
                <Link to={`/blog/${cPost.node.slug}`}>
                  <h2>{cPost.node.title}</h2>
                  <p>{cPost.node.publishedDate}</p>
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