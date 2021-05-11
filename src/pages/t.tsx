import React, { FC } from 'react'
import PageTemplate from '../templates/page-template'

const MY_TEMPLATES = [
  { label: 'Massively', url: 'https://heyayush-massively.netlify.app/' },
  { label: 'Wardruna', url: 'https://photoarts.netlify.app/' },
  { label: 'GCP', url: 'https://heyayush-gcp.netlify.app/' },
  { label: 'lumen', url: 'https://heyayush-lumen.netlify.app' },
  { label: 'Mansarover', url: 'https://happyholidays.netlify.app/' },
  { label: 'London', url: 'https://heyayush-london.netlify.app' },
  { label: 'Photo-book', url: 'https://heyayush-photo-book.netlify.app' },
  { label: 'Pao-bhaji', url: 'https://heyayush-pao-bhaji.netlify.app' },
  { label: 'Oberoy', url: 'https://oberoy.netlify.app' },
  { label: 'Doors', url: 'https://heyayush-doors.netlify.app' },
]

const MyTemplates: FC = () => {
  return (
    <PageTemplate pageTitle="Templates collection" pageDescription="Explore all the available tempaltes">
      <div>
        <ul>
          {MY_TEMPLATES.map((item) => (
            <li key={item.url}>
              <a href={item.url} title={item.label} target="_blank" rel="noreferrer noopener">
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
