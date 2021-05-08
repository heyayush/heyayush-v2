import React, { FC } from 'react'
import { Link } from 'gatsby'

interface MenuI {
  menu: {
    label: string
    path: string
  }[]
}

const Menu: FC<MenuI> = ({ menu }) => (
  <nav className="menu">
    <ul className="menu__list">
      {menu.map((item) => (
        <li className="menu__list-item" key={item.path}>
          <Link to={item.path} className="menu__list-item-link" activeClassName="menu__list-item-link--active">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Menu
