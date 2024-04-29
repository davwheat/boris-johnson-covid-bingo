import React from 'react'

import { Paragraph, Shout } from '../Typography'
import Layout from '../components/Layout'
import RandomBorisImage from '../components/RandomBorisImage'
import { Breakpoints, Colors } from '../data'
import PortraitWarning from '../components/PortraitWarning'
import BodySection from '../components/Section'
import PlayingField from '../components/BingoGame/PlayingField'
import Seo from '../components/Seo'
import { CircularProgress, NoSsr } from '@material-ui/core'
import AlertBanner from '../components/AlertBanner'
import { css } from '@emotion/react'

const innerContainer = css`
  max-width: 1200px;
`

export default function IndexPage() {
  return (
    <Layout>
      <Seo />

      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
        }}
      >
        <RandomBorisImage
          alt="An extraordinarily obscene image of Boris Johnson"
          title="An extraordinarily obscene image of Boris Johnson"
          css={{
            transformOrigin: 'center',
            transform: 'scale(0.75)',
            marginLeft: -24,
            [`@media ${Breakpoints.downTo.small}`]: {
              transform: 'none',
              marginLeft: 0,
            },
          }}
        />
        <Shout
          noPadding
          css={{
            [`@media ${Breakpoints.downTo.small}`]: {
              marginLeft: 24,
            },
          }}
        >
          BoJo Briefing Bingo
        </Shout>
      </div>

      <BodySection>
        <Paragraph>Do you find Boris Johnson's Coronavirus briefings ridiculously dull? If so, this is the website for you!</Paragraph>
        <Paragraph>
          We'll generate a randomised Bingo board each time you refresh this page. If you hear the text or see the actions in any of the boxes, click or tap
          them to mark them off. You win if you get 5 in a row!
        </Paragraph>

        <noscript>
          <AlertBanner
            customTheme={{ background: Colors.error }}
            title="Javascript needed"
            message="To be able to use this site, you need to enable Javascript."
          />
        </noscript>

        <PortraitWarning />
      </BodySection>

      <BodySection innerClassName={innerContainer} noSpacing>
        <NoSsr
          fallback={
            <>
              <CircularProgress
                css={{
                  display: 'block',
                  margin: 'auto',
                  marginBottom: 16,
                }}
              />
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
