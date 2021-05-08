import React, { FC } from 'react'
import Author from './Author'
import Contacts from './Contacts'
import Copyright from './Copyright'
import Menu from './Menu'
import { useSiteMetadata } from '../../hooks'

interface SidebarI {
  isIndex?: boolean
}

const Sidebar: FC<SidebarI> = ({ isIndex }) => {
  const { author, copyright, menu } = useSiteMetadata()

  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  )
}

export default Sidebar
