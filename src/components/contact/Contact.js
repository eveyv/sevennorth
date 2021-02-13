import React from 'react';

import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () =>
  <section id="three" className="wrapper style1 fade-up">
    <div className="inner">
      <h2>Contact</h2>
      <p>
        If you want to get in touch to see what we can offer your business, please don't hesitate to give us a call or email any time.
        <br/>
        <br/>
        Thanks for checking us out!
      </p>
      <div className="split style1">
        <ContactInformation />
      </div>
    </div>
  </section>

export default Contact;
