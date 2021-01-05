import React from 'react'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

import styles from './megaphone.module.less'

const useStyles = makeStyles({
  noPad: {
    paddingBottom: 0,
  },
})

export default function Megaphone({ children, className, noPadding }) {
  const classes = useStyles()

  return <h1 className={clsx(styles.megaphone, noPadding && classes.noPad, className)}>{children}</h1>
}
