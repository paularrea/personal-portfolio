import React from "react"
import styles from "../../styles/contact.module.scss"

export default function Contact() {
  return (
      <div id="contact" className={styles.container}>
        <div className={styles.email_container}>
          <div className={styles.email_wrapper}>
            <h1 className={styles.email_form_title}>Send me a message.</h1>
            <form
              method="post"
              action="https://www.flexyform.com/f/23adc0b98e020f5bc71779a6dd463ed651007022"
            >
              <div style={{ fontSize: "1.2rem", height: "100%" }}>
                <div className={styles.name_email_wrapper}>
                  <input
                    name="user_name"
                    type="text"
                    id="name"
                    required
                    placeholder="What's your name?"
                    className={styles.name_email_inputs}
                    label="name"
                  />

                  <input
                    name="user_email"
                    type="text"
                    required
                    placeholder="email address"
                    className={styles.name_email_inputs}
                    id="email"
                    label="email"
                  />
                </div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hey there. What's up?"
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
      </div>
  )
}
