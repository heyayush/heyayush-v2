import React, { FC } from 'react'
import { Link } from 'gatsby'
import Author from './Author'
import Comments from './Comments'
import Content from './Content'
import Meta from './Meta'
import Tags from './Tags'
import type { Node } from '../../types'
import EmailSub from '../EmailSub/EmailSub'

interface PostI {
  post: Node
}

const Post: FC<PostI> = ({ post }) => {
  const { html } = post
  const { tagSlugs, slug } = post.fields
  const { tags, title, date } = post.frontmatter

  return (
    <div className="post">
      <Link className="post__home-button" to="/">
        Home
      </Link>

      <Link className="post__categories-button" to="/categories">
        Categories
      </Link>

      <Link className="post__tags-button" to="/tags">
        All Tags
      </Link>

      <div className="post__content">
        <Content body={html} title={title} />
      </div>

      <div className="post__footer">
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
        <EmailSub />
      </div>

      <div className="post__comments">
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  )
}

export default Post
