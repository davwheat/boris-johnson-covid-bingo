import React from 'react'

import { Paragraph, Shout } from '../Typography'
import Layout from '../components/Layout'
import Link from '../components/Link'
import BodySection from '../components/Section'
import RandomBigBorisImage from '../components/RandomBigBorisImage'
import Seo from '../components/Seo'

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Page not found" />

      <Shout
        noPadding
        css={{
          textAlign: 'center',
          marginTop: 8,
          marginBottom: 16,
        }}
      >
        BoJo Briefing Bingo
      </Shout>

      <RandomBigBorisImage
        css={{
          marginBottom: 16,
          margin: 'auto',
          display: 'block !important',
        }}
      />

      <BodySection>
        <Shout>This page doesn't exist</Shout>

        <Paragraph>
          <Link internal url="/">
            Play the game!
          </Link>
        </Paragraph>
      </BodySection>
    </Layout>
  )
}
