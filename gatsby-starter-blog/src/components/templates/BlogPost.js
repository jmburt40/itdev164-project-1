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
query{
  site {
  siteMetadata {
    title
  }
}
allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
  nodes {
    excerpt
    fields {
      slug
    }
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      image
      description
    }
    
    rawMarkdownBody
  }
}
}
`