import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'
import { Colors } from '../data'
import { Paragraph } from '../typography'

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '12px 16px',
    background: Colors.dark,
    color: Colors.offWhite,
    fontSize: 18,
  },
  afterHeading: {
    marginTop: -6,
  },
  title: {
    paddingBottom: 4,
  },
  padBottom: {
    marginBottom: 16,
  },
  alternateBackground: {
    background: Colors.primaryDark,
  },
})

/**
 * A simple alert banner.
 *
 * @param {object} props
 * @param {string} props.title The alert's title
 * @param {string} props.message The alert's message
 * @param {boolean} [props.afterHeading] Removes top padding
 * @param {boolean} [props.alternateBackground] Whether to use the alternate dark background
 * @param {string} [props.innerClassName]
 * @param {{ background: string, color: string }} [props.customTheme] A custom theme for the alert
 *
 * @export
 * @return {React.ReactNode}
 */
export default function AlertBanner(props) {
  const { title, message, noPadding, afterHeading, alternateColor, customTheme, innerClassName } = props
  const classes = useStyles()

  return (
    <section
      className={clsx(classes.root, !noPadding && classes.padBottom, afterHeading && classes.afterHeading, alternateColor && classes.alternateBackground)}
      style={{ background: customTheme.background, color: customTheme.color }}
    >
      <div className={innerClassName}>
        <Paragraph className={classes.title} bold>
          {title}
        </Paragraph>
        <Paragraph noPadding>{message}</Paragraph>
      </div>
    </section>
  )
}
