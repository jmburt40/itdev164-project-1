import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  console.log("data,", data)
  return (
    <div>
      <div>
        <header>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        {/* <Img
          fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
        /> */}
        <div> {data.markdownRemark.frontmatter.description}</div>
        </header>
        <section>
       {data.markdownRemark.frontmatter.body}
        </section>
      </div>
     
    </div>
  )
}

export default BlogPost

export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        description
        title
        image
      }
    }
  }
`