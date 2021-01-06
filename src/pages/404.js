import React from 'react'

import { makeStyles } from '@material-ui/styles'

import { Paragraph, Shout } from '../typography'
import Layout from '../components/layout'
import Link from '../components/Link'
import BodySection from '../components/section'
import RandomBigBorisImage from '../components/RandomBigBorisImage'
import SEO from '../components/seo'

const useStyles = makeStyles({
  heading: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  bojo: {
    marginBottom: 16,
    margin: 'auto',
    display: 'block !important',
  },
})

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Page not found" />

      <Shout noPadding className={classes.heading}>
        BoJo Briefing Bingo
      </Shout>

      <RandomBigBorisImage className={classes.bojo} />

      <BodySection>
        <Shout>This page doesn't exist</Shout>

        <Paragraph>
          <Link internal className={classes.linkOrBtn} url="/">
            Play the game!
          </Link>
        </Paragraph>
      </BodySection>
    </Layout>
  )
}

export default IndexPage
