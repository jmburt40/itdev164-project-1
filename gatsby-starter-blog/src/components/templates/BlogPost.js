// /* import React from "react"
// import { graphql } from "gatsby"

// const BlogPost = ({ data }) => {
//   console.log("data,", data)
//   return (
//     <div>
//       <div>
//         <header>
//         <h2>{data.markdownRemark.frontmatter.title}</h2>
//         {/* <Img
//           fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
//         /> */}
//         <div> {data.markdownRemark.frontmatter.description}</div>
//         </header>
//         <section>
//        {data.markdownRemark.frontmatter.body}
//         </section>
//       </div>
     
//     </div>
//   )
// }

// export default BlogPost */

/* import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const BlogPost = ({ data }) => {
  console.log("data,", data)
  return (
    <div>
      <div>
        <h2>{data.markdownRemark.frontmatter.title}</h2>
        <Img
          fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
        />
        <div> {data.markdownRemark.frontmatter.description}</div>
      </div>
    </div>
  )
}

export default BlogPost

export const BlogPostTemplateQuery = graphql`
query BlogPostQuery {
  allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          path
          title
          image
          date
          description
        }
        rawMarkdownBody
      }
    }
  }
}
` */

import React from "react"
import { graphql } from "gatsby"


const BlogPostTemplate = ({ data }) => {
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
         {data.markdownRemark.rawMarkdownBody}
        </section>
        </div>
       
       </div>
    )
 }

export default BlogPostTemplate

export const pageQuery = graphql`
query BlogPostBySlug {
  sitePage {
    path
  }
  markdownRemark {
    fields {
      slug
    }
    frontmatter {
      path
      date
      image
      description
      title
    }
    rawMarkdownBody
  }
}

`