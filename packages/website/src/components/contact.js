import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Contact = () => {
  const {
    site: {
      siteMetadata: {
        contact: { email, phone }
      }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          contact {
            email
            phone
          }
        }
      }
    }
  `);

  return (
    <div className="contact">
      <h1>Contact me</h1>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
    </div>
  );
};

export default Contact;
