import React from 'react';
import './feedbackform.css'

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, phone, subject, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="feedbackcont mt-5">
      <h2 className="mb-3">SEND YOUR ENQUIRIES</h2>
      <form className='form1' onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="phone">
            Phone Number
          </label>
          <input className="form-control" type="text" id="phone" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="subject">
            Subject
          </label>
          <input className="form-control" type="text" id="subject" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
