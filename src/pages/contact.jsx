import React from "react"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"
import styles from "../styles/contact.module.scss"
import TextField from "@material-ui/core/TextField"
import Layout from "../components/Layout/layout"

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm("gmail", "requesens-portfolio", e.target, "user_sWXayM2Q5oM9pReV8U7as")
      .then(res => {
        // Email successfully sent alert
        Swal.fire({
          title: "Email Successfully Sent",
          icon: "success",
        })
      })
      // Email Failed to send Error alert
      .catch(err => {
        Swal.fire({
          title: "Email Failed to Send",
          icon: "error",
        })
        console.error("Email Error:", err)
      })
  }

  return (
    <Layout>
      <div className={styles.email_container}>
        <div className={styles.email_wrapper}>
          <h1 className={styles.email_form_title}>Send me a message</h1>
          <form className={styles.test_mailing} onSubmit={sendEmail}>
            <br />
            <div style={{ fontSize: "1.2rem" }}>
              <div className={styles.name_email_wrapper}>
                <TextField
                  name="user_name"
                  type="text"
                  id="name"
                  // onChange={this.nameChange}
                  required
                  className={styles.name_email_inputs}
                  label="name"
                />

                <TextField
                  name="user_email"
                  type="text"
                  // onChange={this.emailChange}
                  required
                  className={styles.name_email_inputs}
                  id="email"
                  label="email"
                />
              </div>
              <TextField
                id="message"
                name="message"
                // onChange={this.messageChange}
                placeholder="Put your message here"
                required
                className={styles.message_inputs}
                label="message"
                multiline
                rowsMax={4}
              />
            </div>
            <div>
              <input type="submit" value="submit" className={styles.btn_form} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
