import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

import styles from './shout.module.less'

const useStyles = makeStyles({
  noPad: {
    paddingBottom: 0,
  },
})

export default function Shout({ children, className, noPadding }) {
  const classes = useStyles()

  return <h1 className={clsx(styles.shout, noPadding && classes.noPad, className)}>{children}</h1>
}
