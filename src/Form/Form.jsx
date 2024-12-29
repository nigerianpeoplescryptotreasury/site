import React, { useState, useEffect, useRef } from 'react';
import styles from './Form.module.css';  // Import the styles
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha'; // Import the recaptcha module

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    reason: '',
    address: ''
  });

  const [captchaSolved, setCaptchaSolved] = useState(false);

  useEffect(() => {
    emailjs.init('F0HVeM-YWeU6kry-f'); 
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleCaptchaChange(value) {
    setCaptchaSolved(!!value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!captchaSolved) {
      alert("Please solve the CAPTCHA first.");
      return;
    }

    let params = {
      name: formData.name,
      reason: formData.reason,
      address: formData.address,
    };

    emailjs.send('service_y6wh1tq', 'template_gxz3agc', params)
      .then(() => alert("Email sent!"))
      .catch((error) => console.error("Failed to send email:", error));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles['form-container']}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={styles['input-field']}
        />
        <input
          type="text"
          name="reason"
          placeholder="Reason"
          value={formData.reason}
          onChange={handleChange}
          className={styles['input-field']}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className={styles['input-field']}
        />

        <ReCAPTCHA
          sitekey="6LdDBKkqAAAAADMHAN7Hss46tXVO8eKZm2-tcNgJ"
          className={styles['recaptcha']}
          onChange={handleCaptchaChange}
        />
        <button type="submit" className={styles['submit-button']}>Submit for a drop!</button>
      </form>
    </div>
  );
}

export default Form;