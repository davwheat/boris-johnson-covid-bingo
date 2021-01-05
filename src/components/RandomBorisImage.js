import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export default function RandomBorisImage(props) {
  const allImages = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "boris-weird" } }) {
        nodes {
          childImageSharp {
            fixed(quality: 50, width: 100, height: 100) {
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
