import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'
import { Colors } from '../data'
import generateTransitions from '../functions/generateTransitions'
import ScrollTo from '../functions/ScrollTo'

const useStyles = makeStyles({
  root: {
    color: Colors.offWhite,
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '4px 16px',
    fontSize: 20,
    borderTopLeftRadius: '24px 50%',
    borderBottomLeftRadius: '24px 50%',
    borderTopRightRadius: '24px 50%',
    borderBottomRightRadius: '24px 50%',
    border: `2px solid ${Colors.dark}`,
    background: Colors.dark,
    lineHeight: '1.6',
    ...generateTransitions('border-color', 'short', 'ease-out'),
    '&:hover, &:focus, &:active': {
      // We remove the a11y outline as we show focus
      // with the border color change
      outline: 'none',
    },
  },
  normalHoverColor: {
    '&:hover, &:focus, &:active': {
      borderColor: Colors.primary,
    },
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  iconOnly: {
    width: 44,
    height: 44,
    padding: 10,
    marginRight: 0,
  },
})

/**
 * Component for showing a button. Supports button `onClick`s, `url`s and anchor links.
 *
 * @param {object} props
 * @param {React.ReactNode|string} props.children - content for the button
 * @param {React.ReactNode} [props.icon] - optional icon for the button (must be SVG element)
 * @param {function} [props.onClick] - onClick handler for the button
 * @param {string} [props.url] - URL for the button (optional, but you should specify either onClick or url). Supports normal links, or anchors.
 * @param {string} [props.className] - optional classes to apply
 *
 * @export
 * @return {React.ReactNode}
 */
export default function Button(props) {
  const { onClick, children, icon: Icon, url, className } = props
  const classes = useStyles()

  if (!onClick && !url) {
    throw SyntaxError('You must specify a URL or a button onClick handler when using the Button component.')
  }

  const isAnchor = typeof url === 'string' && url.startsWith('#')

  if (typeof url === 'string') {
    return (
      <a
        className={clsx(classes.root, !children && classes.circle, classes.normalHoverColor, className)}
        href={url}
        onClick={
          isAnchor
            ? e => {
                ScrollTo.ID(url.substr(1))
                e.preventDefault()

                typeof onClick === 'function' && onClick()
              }
            : null
        }
      >
        {Icon && <Icon className={clsx(classes.icon, !children && classes.iconOnly)} />} {children}
      </a>
    )
  } else {
    return (
      <button className={clsx(classes.root, !children && classes.circle, classes.normalHoverColor, className)} onClick={onClick}>
        {Icon && <Icon className={clsx(classes.icon, !children && classes.iconOnly)} />} {children}
      </button>
    )
  }
}

Button.defaultProps = {
  hoverFocusColor: 'normal',
}
