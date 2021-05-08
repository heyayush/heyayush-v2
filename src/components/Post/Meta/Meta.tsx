import React, { FC } from 'react'

interface MetaI {
  date: string
}

const Meta: FC<MetaI> = ({ date }) => (
  <div className="meta">
    <p className="meta__date">
      Published {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
    </p>
  </div>
)

export default Meta
