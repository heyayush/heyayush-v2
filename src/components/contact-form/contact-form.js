import React from 'react';
import './contact-form.scss';

const contactForm = () => (
  <form name="contact" className="form" id="contact-form" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <div className="form-title">Or, you may fill this form to reach me</div>
    <p className="name">
      <input name="name" type="text" className="feedback-input" placeholder="Name" id="name" />
    </p>

    <p className="email">
      <input name="email" type="text" className="feedback-input" id="email" placeholder="Email" />
    </p>

    <p className="message">
      <textarea name="message" className="feedback-input" id="comment" placeholder="Comment"></textarea>
    </p>

    <div className="submit">
      <button type="submit" id="button-blue">
        SEND
      </button>
    </div>
  </form>
);

export default contactForm;
