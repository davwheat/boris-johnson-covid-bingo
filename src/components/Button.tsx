import React from 'react'
import { Colors } from '../data'
import generateTransitions from '../functions/generateTransitions'
import ScrollTo from '../functions/ScrollTo'

interface IProps {
  children: React.ReactNode | string
  icon?: React.ReactNode
  onClick?: () => void
  url?: string
  className?: string
}

/**
 * Component for showing a button. Supports button `onClick`s, `url`s and anchor links.
 */
export default function Button({ onClick, children, icon: Icon, url, className }: IProps) {
  if (!onClick && !url) {
    throw SyntaxError('You must specify a URL or a button onClick handler when using the Button component.')
  }

  const isAnchor = typeof url === 'string' && url.startsWith('#')

  if (typeof url === 'string') {
    return (
      <a
        className={className}
        href={url}
        onClick={
          isAnchor
            ? e => {
                ScrollTo.ID(url.substr(1))
                e.preventDefault()

                typeof onClick === 'function' && onClick()
              }
            : undefined
        }
        css={[
          {
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
          {
            '&:hover, &:focus, &:active': {
              borderColor: Colors.primary,
            },
          },
        ]}
      >
        {Icon && (
          <Icon
            css={[
              {
                width: 24,
                height: 24,
                marginRight: 8,
              },
              !children && {
                width: 44,
                height: 44,
                padding: 10,
                marginRight: 0,
              },
            ]}
          />
        )}{' '}
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={className}
        onClick={onClick}
        css={[
          {
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
          {
            '&:hover, &:focus, &:active': {
              borderColor: Colors.primary,
            },
          },
        ]}
      >
        {Icon && (
          <Icon
            css={[
              {
                width: 24,
                height: 24,
                marginRight: 8,
              },
              !children && {
                width: 44,
                height: 44,
                padding: 10,
                marginRight: 0,
              },
            ]}
          />
        )}{' '}
        {children}
      </button>
    )
  }
}
