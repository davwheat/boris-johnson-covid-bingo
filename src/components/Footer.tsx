import React from 'react'

import { Paragraph, Whisper } from '../Typography'
import BulletSeparator from './BulletSeparator'
import Link from './Link'
import BodySection from './Section'

import packageJson from '../../package.json'

export default function Footer() {
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
      </Paragraph>
      <Whisper>
        Version {packageJson.version} ("{packageJson.versionName}")
      </Whisper>
    </BodySection>
  )
}
