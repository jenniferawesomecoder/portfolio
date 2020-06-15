import React from 'react'

export default function Contact() {
  return (
    <div data-aos="flip-up" className='create-contact'>
      <form action="https://formspree.io/xpzqgooj"
        method="POST" id='create-contact-form'
      // onSubmit={(event) => { event.preventDefault() }}
      >
        <div className="contact-main">
          <div className="contact-span-container">
            <span>Contact Me!</span>
          </div>
          <div className="contact-grid">
            <div className="contact-input-div">
              <label htmlFor="name">Name</label>
              <input className="contact-input"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="contact-input-div">
              <label htmlFor="_replyto">Email</label>
              <input className="contact-input"
                type="email"
                name="_replyto"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="contact-input-div">
              <label htmlFor="message">Message</label>
              <textarea
                className="contact-input text-area"
                name="message"
                id="message"
                placeholder="Message"
                row="12"
                resize="true"
              />
            </div>
            <div>
              <label htmlFor="submit-button">Submit</label>
              <input
                className="submit-button"
                name="submit-button"
                id="contact-button"
                placeholder="Submit"
                type='submit'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
