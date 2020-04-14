import React from 'react'
import { graphql, useStaticQuery, Link} from 'gatsby'

import blogStyles from './blog.module.scss'

const ContentfulBlog = () => {
  const data = useStaticQuery(graphql`
  query{
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

  const posts = data.allContentfulBlogPost.edges
  return (
    <ol className={blogStyles.posts}>
    {
      posts.map(cPost => {
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
  )
}

export default ContentfulBlog