import React from 'react'
import Link from 'next/link'

const TailwindLink = ({ href, children, className}) => {
  return (
    <Link className={className} href={href}>
      <span>{children}</span>
    </Link>
  )
}

export default TailwindLink