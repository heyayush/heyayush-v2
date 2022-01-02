import React, { FC, useState } from 'react'
import useSiteMetadata from '../../hooks/use-site-metadata'

interface WriteToSheetsPayloadI {
  formData: unknown
  spreadsheetId: string
}

const SendWishesForm: FC = () => {
  const { sendWishesSpreadsheetId, googleSheetsAPI } = useSiteMetadata()

  const [isSubmissionInProgress, setIsSubmissionInProgress] = useState(false)
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFormSumbit = async (e: any) => {
    e.preventDefault()
    const value = new FormData(e.target)
    const formData = {
      name: value.get('name'),
      message: value.get('message'),
    }

    setIsSubmissionInProgress(true)
    const payloadWriteToSheets = { formData: formData, spreadsheetId: sendWishesSpreadsheetId }

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [responseWriteToSheets] = await Promise.all([writeToSheets(payloadWriteToSheets)])
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

  return !isSubmissionSuccess ? (
    <form name="contact" id="send-wishes-form" method="POST" onSubmit={onFormSumbit}>
      <div className="fields">
        <div className="field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            className="feedback-input"
            placeholder="Name"
            required
            minLength={2}
            maxLength={40}
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows={3}
            className="feedback-input"
            placeholder="Please type your message..."
            required
            minLength={5}
            maxLength={1200}
          />
        </div>
        <div className="field">
          <input className="button-blue" type="submit" value="Send Message" disabled={isSubmissionInProgress} />
        </div>
      </div>
    </form>
  ) : (
    <div>
      <p>
        <span className="msg-success">Your message is sent successfully.</span>
        <br />
        Thank you for lovely wishes
      </p>
    </div>
  )
}

export default SendWishesForm
