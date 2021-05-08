import React, { FC } from 'react'
import { Link } from 'gatsby'

interface TagsI {
  tags: string[]
  tagSlugs: string[]
}

const Tags: FC<TagsI> = ({ tags, tagSlugs }) => (
  <div className="tags">
    <ul className="tags__list">
      {tagSlugs &&
        tagSlugs.map((slug, i) => (
          <li className="tags__list-item" key={tags[i]}>
            <Link to={slug} className="tags__list-item-link">
              {tags[i]}
            </Link>
          </li>
        ))}
    </ul>
  </div>
)

export default Tags
