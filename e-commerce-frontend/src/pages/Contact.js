import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/Contact.css";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ush58sc', 'template_lq1j2nk', e.target, 'LheGuDv1Xzq3IolMI')
      .then(() => {
          toast.success('Your message has been sent!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <Layout title={"Contact us"}>
      <div className="contact-form">
        <form  className="contact-page-sec" onSubmit={sendEmail} ref={form} >
          <div className="container">
            <div className="row1">
              <div className="contctcard">
                <div className="contact-info">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fas fa-map-marked" />
                    </div>
                    <div className="contact-info-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        class="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                      <h2>address</h2>
                      <span>10350 Downtown, LB 1100 </span>
                      <span>Beirut , Lebanon</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contctcard">
                <div className="contact-info">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="contact-info-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        class="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                      <h2>E-mail</h2>
                      <span>Codi@codi.tech</span>
                      <span>Admin@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contctcard">
                <div className="contact-info">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fas fa-clock" />
                    </div>
                    <div className="contact-info-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="currentColor"
                        class="bi bi-calendar-check"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                      <h2>office time</h2>
                      <span>Mon - Thu 9:00 am - 4.00 pm</span>
                      <span>Thu - Mon 10.00 pm - 5.00 pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row2">
              <div className="col-md-8">
                <div className="contact-page-form">
                  <h2>Get in Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row3">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="single-input-field">
                          <input
                            type="text"
                            placeholder="Your Name"
                            name="user_name" />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="single-input-field">
                          <input
                            type="email"
                            placeholder="E-mail"
                            name="user_email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="single-input-field">
                          <input
                            type="text"
                            placeholder="Phone Number"
                            name="user_phonenumber"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="single-input-field">
                          <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 message-input">
                        <div className="single-input-field">
                          <textarea
                            placeholder="Write Your Message"
                            name="message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <button className="submitfoot" type="submit"
>
                        Send Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-page-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52992.2748398701!2d35.463082700460305!3d33.88921144374548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut!5e0!3m2!1sen!2slb!4v1682508763211!5m2!1sen!2slb"
                    width="135%"
                    height={450}
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
