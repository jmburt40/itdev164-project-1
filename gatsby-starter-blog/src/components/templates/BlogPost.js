
import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout.js"


const BlogPostTemplate = ({ data }) => {
   console.log("data,", data)

  return (
    <Layout>

      <div>

       <div>
           <header>

           <h2>{data.markdownRemark.frontmatter.title}</h2>
           </header>
           <section>
         {data.markdownRemark.rawMarkdownBody}
        </section>
        </div>
       
       </div>
       </Layout>
    )
 }

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
      rawMarkdownBody
    }
  }

`