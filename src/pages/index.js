import React from 'react'

import { makeStyles } from '@material-ui/styles'

import { Paragraph, Shout } from '../typography'
import Layout from '../components/layout'
import RandomBorisImage from '../components/RandomBorisImage'
import { Breakpoints } from '../data'
import PortraitWarning from '../components/PortraitWarning'
import BodySection from '../components/section'
import PlayingField from '../components/BingoGame/PlayingField'
import SEO from '../components/seo'
import { CircularProgress, NoSsr } from '@material-ui/core'

const useStyles = makeStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  heading: {
    [`@media ${Breakpoints.downTo.small}`]: {
      marginLeft: 24,
    },
  },
  bojo: {
    transformOrigin: 'center',
    transform: 'scale(0.75)',
    marginLeft: -24,
    [`@media ${Breakpoints.downTo.small}`]: {
      transform: 'none',
      marginLeft: 0,
    },
  },
  wider: {
    maxWidth: 1200,
  },
  loading: {
    margin: 'auto',
    paddingBottom: 16,
  },
})

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO />

      <div className={classes.headerContainer}>
        <RandomBorisImage
          alt="An extraordinarily obscene image of Boris Johnson"
          title="An extraordinarily obscene image of Boris Johnson"
          className={classes.bojo}
        />
        <Shout noPadding className={classes.heading}>
          BoJo Briefing Bingo
        </Shout>
      </div>

      <BodySection>
        <Paragraph>Do you find Boris Johnson's Coronavirus briefings ridiculously dull? If so, this is the website for you!</Paragraph>
        <Paragraph>
          We'll generate a randomised Bingo board each time you refresh this page. If you hear the text or see the actions in any of the boxes, click or tap
          them to mark them off. You win if you get 5 in a row!
        </Paragraph>
        <PortraitWarning />
      </BodySection>

      <BodySection innerClassName={classes.wider} noSpacing>
        <NoSsr
          fallback={
            <>
              <CircularProgress className={classes.loading} />
              <Paragraph center bold>
                Loading bingo grid
              </Paragraph>
            </>
          }
        >
          <PlayingField />
        </NoSsr>
      </BodySection>
    </Layout>
  )
}

export default IndexPage
