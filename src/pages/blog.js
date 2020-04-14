import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import MarkdownBlog from './markdownBlog'
import ContentfulBlog  from './contentfulBlog'

const BlogPage = () => {
  return (
    <Layout>
      <Head title='Blog'/>
      <h1>Markdown Blog</h1>
        <MarkdownBlog />
      <h1>Contentful Blog</h1>
        <ContentfulBlog />
    </Layout>
  )
}

export default BlogPage