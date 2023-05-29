import Link from 'next/link'
import { ComponentProps } from 'react'

const CustomLink = ({ href, ...rest }: ComponentProps<typeof Link>) => {
  if (typeof href !== 'string') {
    throw new Error('href must be string')
  }
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
