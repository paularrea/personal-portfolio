import React from "react"
import emailjs from "emailjs-com"
import styles from "../../styles/contact.module.scss"
import Fade from "react-reveal/Fade"
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'

// const MySwal = withReactContent(Swal)

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "gmail",
        "pau-portfolio",
        e.target,
        "user_sWXayM2Q5oM9pReV8U7as"
      )
      .then(
        result => {
          // MySwal.fire({
          //   icon: 'success',
          //   title: 'Your message has been sent',
          //   text: 'I will answer you as soon as possible!',
          // })
          alert("Your message has been sent")
          console.log(result.text)
        },
        error => {
          // MySwal.fire({
          //   icon: 'error',
          //   title: 'Oops...',
          //   text: 'Something went wrong!',
          // })
          alert("Something went wrong...")
          console.log(error.text)
        }
      )
  }

  return (
    <div id="contact" className={styles.container}>
      <Fade bottom>
        <div className={styles.email_container}>
          <div className={styles.email_wrapper}>
            <h1 className={styles.email_form_title}>SEND ME A MESSAGE</h1>
            <form className={styles.test_mailing} onSubmit={sendEmail}>
              <br />
              <div style={{ fontSize: "1.2rem", height: "100%" }}>
                <div className={styles.name_email_wrapper}>
                  <input
                    name="user_name"
                    type="text"
                    id="name"
                    // onChange={this.nameChange}
                    required
                    placeholder="Name"
                    className={styles.name_email_inputs}
                    label="name"
                  />

                  <input
                    name="user_email"
                    type="text"
                    // onChange={this.emailChange}
                    required
                    placeholder="Email"
                    className={styles.name_email_inputs}
                    id="email"
                    label="email"
                  />
                </div>
                <textarea
                  id="message"
                  name="message"
                  // onChange={this.messageChange}
                  placeholder="Put your message here"
                  required
                  className={styles.message_input}
                  label="message"
                  multiline
                  rowsMax={4}
                />
              </div>
              <div className={styles.btn_container}>
                <button type="submit" value="submit" className={styles.btn}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  )
}
