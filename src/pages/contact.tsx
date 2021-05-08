import React, { FC } from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import PageTemplate from '../templates/page-template'

const Contact: FC = () => {
  return (
    <PageTemplate pageTitle="Contact Me" pageDescription="Connect with me on the following channels">
      <div>
        <p>
          Let’s talk! Shoot me an <a href="mailto:hey.ayush.sharma@gmail.com">Email</a>
        </p>
        <p>
          Or, connect on
          <a href="https://www.linkedin.com/in/hey-ayush">LinkedIn</a>
          <a href="https://www.twitter.com/heyayush">Twitter</a>
          <a href="https://github.com/heyayush">Github</a>
          <a href="https://www.instagram.com/hey.ayush.sharma">Instagram</a>
        </p>
        <ContactForm />
      </div>
    </PageTemplate>
  )
}

export default Contact
