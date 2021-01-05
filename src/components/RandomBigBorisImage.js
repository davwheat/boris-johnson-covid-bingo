import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export default function RandomBorisOopsImage(props) {
  const allImages = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "boris-oops" } }) {
        nodes {
          childImageSharp {
            fixed(quality: 50, width: 400, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `).allFile.nodes

  const randomImageData = allImages[Math.floor(Math.random() * allImages.length)].childImageSharp.fixed

  return <Img fixed={randomImageData} {...props} />
}
