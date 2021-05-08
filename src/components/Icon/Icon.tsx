import React, { FC } from 'react'

interface IconI {
  name: string
  icon: {
    viewBox?: string
    path?: string
  }
}

const Icon: FC<IconI> = ({ name, icon }) => (
  <svg className="icon" viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
)

export default Icon
