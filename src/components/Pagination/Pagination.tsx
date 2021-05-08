import React, { FC } from 'react'
import classNames from 'classnames/bind'
import { Link } from 'gatsby'
import { PAGINATION } from '../../constants'

interface PaginationI {
  prevPagePath: string
  nextPagePath: string
  hasNextPage: boolean
  hasPrevPage: boolean
}

const cx = classNames

const Pagination: FC<PaginationI> = ({ prevPagePath, nextPagePath, hasNextPage, hasPrevPage }) => {
  const prevClassName = cx({
    'pagination__prev-link': true,
    'pagination__prev-link--disable': !hasPrevPage,
  })

  const nextClassName = cx({
    'pagination__next-link': true,
    'pagination__next-link--disable': !hasNextPage,
  })

  return (
    <div className="pagination">
      <div className="pagination__prev">
        <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'} className={prevClassName}>
          {PAGINATION.PREV_PAGE}
        </Link>
      </div>
      <div className="pagination__next">
        <Link rel="next" to={hasNextPage ? nextPagePath : '/'} className={nextClassName}>
          {PAGINATION.NEXT_PAGE}
        </Link>
      </div>
    </div>
  )
}

export default Pagination
