import React, { FC } from 'react'
import PageTemplate from '../templates/page-template'

const MY_TEMPLATES = [
  { label: 'Photo-book', url: '/t/photo-book' },
  { label: 'London', url: '/t/london' },
]

const MyTemplates: FC = () => {
  return (
    <PageTemplate pageTitle="Templates collection" pageDescription="Explore all the available tempaltes">
      <div>
        <ul>
          {MY_TEMPLATES.map((item) => (
            <li key={item.url}>
              <a href={item.url} title={item.label}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageTemplate>
  )
}

export default MyTemplates
