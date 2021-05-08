import React, { FC } from 'react'

interface ContentI {
  body: string
  title: string
}

const Content: FC<ContentI> = ({ body, title }) => (
  <div className="content">
    <h1 className="content__title">{title}</h1>
    <div className="content__body" dangerouslySetInnerHTML={{ __html: body }} />
  </div>
)

export default Content
