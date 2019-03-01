import React, { Children } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import "./index.scss"

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children)

  let className = child.props.className || null
  if (router.pathname === props.href) {
    className = `${className !== null ? className : ''} next-link-active`.trim()
  }

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>
}

export default withRouter(ActiveLink)
