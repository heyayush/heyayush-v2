import React, { FC, useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { SiteMetadataI } from '../../types'

interface _emailSubI {
  siteMetadata: SiteMetadataI
}

interface WriteToSheetsPayloadI {
  formData: unknown
  spreadsheetId: string
}

const _emailSub: FC<_emailSubI> = ({ siteMetadata }) => {
  const { googleSheetsAPI, emailSubSpreadsheetId } = siteMetadata
  const [isSubmissionInProgress, setIsSubmissionInProgress] = useState(false)
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFormSumbit = async (e: any) => {
    e.preventDefault()
    const value = new FormData(e.target)
    const formData = {
      email: value.get('email'),
    }
    setIsSubmissionInProgress(true)
    const payloadWriteToSheets = { formData: formData, spreadsheetId: emailSubSpreadsheetId }

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [responseWriteToSheets, responseSendEmailNotification] = await Promise.all([
        writeToSheets(payloadWriteToSheets),
      ])
    } catch (error) {
      setIsSubmissionInProgress(false)
    }
    setIsSubmissionInProgress(false)
    setIsSubmissionSuccess(true)
  }

  const writeToSheets = async (payload: WriteToSheetsPayloadI) => {
    let result
    try {
      result = await fetch(googleSheetsAPI, {
        method: 'POST',
        body: JSON.stringify(payload),
      })
    } catch (error) {
      console.error('something went wrong', error)
    }
    return result
  }

  const subForm = () => (
    <div className="email-sub">
      <h4 className="title">Subscribe for monthly email newsletter</h4>
      <form name="email-sub" className="form" onSubmit={onFormSumbit}>
        <div className="email-field">
          <input
            name="email"
            type="email"
            className="feedback-input"
            id="email"
            placeholder="Email"
            title="please enter a valid email"
            required
            autoComplete="email"
          />
        </div>
        <div className="submit">
          <button type="submit" disabled={isSubmissionInProgress}>
            SUBSCRIBE!
          </button>
        </div>
      </form>
    </div>
  )

  const subSuccess = () => (
    <div className="sub-success">
      <span>Subscription Successful !!!</span>
    </div>
  )

  return isSubmissionSuccess === false ? subForm() : subSuccess()
}

export const EmailSub: FC = () => (
  <StaticQuery
    query={graphql`
      query EmailSubQuery {
        site {
          siteMetadata {
            googleSheetsAPI
            emailSubSpreadsheetId
          }
        }
      }
    `}
    render={(data) => <_emailSub siteMetadata={data.site.siteMetadata} />}
  />
)

export default EmailSub
