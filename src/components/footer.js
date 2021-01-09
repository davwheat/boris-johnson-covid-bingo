import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import { Paragraph, Whisper } from '../typography'
import BulletSeparator from './BulletSeparator'
import Link from './Link'
import BodySection from './section'

import { version, versionName } from '../../package.json'

export default function Footer() {
  const buildDateString = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `).currentBuildDate.currentDate

  return (
    <BodySection>
      <Paragraph>Made with love by David Wheatley - &copy; {new Date().getFullYear()} All Rights Reserved</Paragraph>
      <Paragraph>
        <Link target="_blank" url="https://github.com/davwheat">
          GitHub
        </Link>

        <BulletSeparator />

        <Link target="_blank" url="https://twitter.com/davwheat_">
          Twitter
        </Link>

        <BulletSeparator />

        <Link target="_blank" url="mailto:hi@davwheat.dev">
          Email me
        </Link>

        <BulletSeparator />

        <Link onClick={() => window.cookiehub.openSettings()}>Cookie settings</Link>
      </Paragraph>
      <Whisper>All names on this website are real. All identification with actual persons is intended or should be inferred.</Whisper>
      <Whisper>
        Version {version} ("{versionName}") - last updated {buildDateString}
      </Whisper>
    </BodySection>
  )
}
