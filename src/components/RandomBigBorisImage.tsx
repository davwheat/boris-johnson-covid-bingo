import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

export default function RandomBorisOopsImage(props) {
  const allImages = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "boris-oops" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(quality: 50, width: 400, height: 400, layout: FIXED)
          }
        }
      }
    }
  `).allFile.nodes

  const randomImageData = allImages[Math.floor(Math.random() * allImages.length)].childImageSharp.gatsbyImageData

  return <GatsbyImage image={randomImageData} {...props} />
}

