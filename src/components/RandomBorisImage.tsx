import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

export default function RandomBorisImage(props) {
  const allImages = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "boris-weird" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 100, height: 100, layout: FIXED)
          }
        }
      }
    }
  `).allFile.nodes

  const randomImageData = allImages[Math.floor(Math.random() * allImages.length)].childImageSharp.gatsbyImageData

  return <GatsbyImage image={randomImageData} {...props} />
}

