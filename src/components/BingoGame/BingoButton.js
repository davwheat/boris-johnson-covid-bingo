import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Colors } from '../../data'

const useStyles = makeStyles({
  root: {
    padding: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000',
    lineHeight: 1.25,
    position: 'relative',
    cursor: 'pointer',
    '&:active, &:focus': {
      outline: '2px orange solid',
    },
    '&[aria-pressed=true]': {
      background: Colors.toryPrimary,
      color: '#fff',
    },
  },
})

export default React.memo(function BingoButton({ isCrossedOut, description, onClick }) {
  const classes = useStyles()

  return (
    <button className={classes.root} aria-pressed={isCrossedOut ? 'true' : 'false'} onClick={onClick}>
      {description}
    </button>
  )
})
