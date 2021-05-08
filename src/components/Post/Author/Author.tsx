import React, { FC } from 'react'
import { getContactHref } from '../../../utils'
import { useSiteMetadata } from '../../../hooks'

const Author: FC = () => {
  const { author } = useSiteMetadata()

  return (
    <div className="post-author">
      <p className="post-author__bio">
        {author.bio}
        <a
          className="post-author__bio-twitter"
          href={getContactHref('twitter', author.contacts.twitter)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <strong>{author.name}</strong> on Twitter
        </a>
      </p>
    </div>
  )
}

export default Author
