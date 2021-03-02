import React from "react";
import styles from "../styles/contact.module.scss";
import Layout from "../components/Layout/layout";
import { Link } from "gatsby";

const Thankyou = () => {
  return (
    <Layout>
      <div id="thankyou" className={styles.bg_container}>
        <div
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-duration="1000"
          className={styles.message_container}
        >
          <h1>
           Thank you!
          </h1>
          <p>
            Thank's for reaching out! I'll be in touch soon.
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
