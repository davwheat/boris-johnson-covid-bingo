import React, { MouseEvent } from 'react'
import { Colors } from '../data'
import ScrollTo from '../functions/ScrollTo'
import { Link as GatsbyLink } from 'gatsby'

interface IProps {
  url: string
  children: React.ReactNode
  id?: string
  title?: string
  onClick?: (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  className?: string
  color?: string
  textColor?: string
  borderColor?: string
  target?: '_blank' | '_self'
  internal?: boolean
}

/**
 * Creates an `<a>` tag which conforms to our design scheme.
 */
export default function Link(props: IProps) {
  const { internal, url, title, onClick, className, id, children, textColor, borderColor, color, target } = props

  const isAnchor = typeof url === 'string' && url.startsWith('#')

  const newProps = {
    className,
    css: {
      color: Colors.toryPrimary,
      display: 'inline-block',
      borderBottom: `2px solid ${Colors.toryPrimary}`,
      lineHeight: 1,
      cursor: 'pointer',
      textDecoration: 'none',
      fontWeight: 600,
    },
    href: url,
    onClick: isAnchor
      ? (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          ScrollTo.ID(url.substring(1))
          e.preventDefault()

          typeof onClick === 'function' && onClick(e)
        }
      : onClick,
    style: {
      color: textColor || color,
      borderBottomColor: borderColor || color,
    },
    rel: 'noopener noreferrer',
    title,
    id,
    target,
  }

  if (internal) {
    return (
      <GatsbyLink to={newProps.href} {...newProps}>
        {children}
      </GatsbyLink>
    )
  }

  return <a {...newProps}>{children}</a>
}
