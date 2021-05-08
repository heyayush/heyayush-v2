import React, { FC } from 'react'

interface CopyrightI {
  copyright: string
}

const Copyright: FC<CopyrightI> = ({ copyright }) => <div className="copyright">{copyright}</div>

export default Copyright
