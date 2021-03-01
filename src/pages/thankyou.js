import React from "react";
import styles from "../styles/contact.module.scss";
import Layout from "../components/layout/layout";
import { Link } from "gatsby";

const Thankyou = () => {
  return (
    <Layout>
      <div id="thankyou" className="bg-container">
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className="message-container"
        >
          <h1>
            CONTACT
          </h1>
          <p>
            Thank you for reaching out! I'll be in touch soon.
          </p>
          <Link to="/">
            <button className={styles.btn}>
              Back to site
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Thankyou;
