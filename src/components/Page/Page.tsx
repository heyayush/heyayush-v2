import React, { useRef, useEffect, FC } from 'react'

interface PageI {
  title?: string
}

const Page: FC<PageI> = ({ title, children }) => {
  const pageRef = useRef()

  useEffect(() => {
    pageRef.current.scrollIntoView()
  })

  return (
    <div ref={pageRef} className="page">
      <div className="page__inner">
        {title && <h1 className="page__title">{title}</h1>}
        <div className="page__body">{children}</div>
      </div>
    </div>
  )
}

export default Page
