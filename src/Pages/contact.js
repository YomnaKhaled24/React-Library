import Header from "../Components/Header.js";
import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone_nu, setPhoneNu] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/send', { email, subject, message, name, phone_nu });
      alert('Email sent successfully');
    } catch (error) {
      alert('Error sending email');
    }
  };

  return (
    <>
      <Header content={t("contact")} />
      {/* <div><h1>{t("contact")}</h1></div> */}
      <div className="Contact contact-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-12 col-md-6 mb-3">
                    <input
                      className="form-control form-control-lg"
                      placeholder={t("name")}
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 mb-3">
                    <input
                      className="form-control form-control-lg"
                      placeholder={t("email")}
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 mb-3">
                    <input
                      className="form-control form-control-lg"
                      placeholder={t("phone_number")}
                      name="phone_nu"
                      type="text"
                      value={phone_nu}
                      onChange={(e) => setPhoneNu(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-12 col-md-6 mb-3">
                    <input
                      className="form-control form-control-lg"
                      placeholder={t("subject")}
                      name="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="col-sm-12 mb-3">
                    <textarea
                      className="form-control form-control-lg"
                      name="message"
                      placeholder={t("message")}
                      rows="5"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>  
                  <div className="col-sm-12 text-center">
                    <button className="send-btn" type="submit">{t("send")}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;