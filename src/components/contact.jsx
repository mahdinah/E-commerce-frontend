// npm i @emailjs/browser
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
	const form = useRef();

	const resetForm = () => {
		form.current.reset();
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_hfyz7a5",
				"template_lby2h2d",
				form.current,
				"5me2O_9LCLf4zeEBu"
			)
			.then(
				(result) => {
					console.log(result.text);
					toast.success("Email sent successfully!");
					resetForm();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section className="contactUsPage">
			<div className="holder">
				<div className="upper">
					<div className="EJSH">
						<h2 className="titleCU">Contact us</h2>
						<form
							method="POST"
							id="contactForm"
							name="contactForm"
							className="contactForm"
							ref={form}
							onSubmit={sendEmail}
						>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										{/* //! name */}
										<label className="label" htmlFor="name">
											Full Name
										</label>
										<input
											className="form-control"
											type="text"
											id="name"
											name="user_name"
											required
											placeholder="Name"
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										{/* //! emailz */}
										<label className="label" htmlFor="email">
											Email Address
										</label>
										<input
											type="email"
											id="email"
											name="user_email"
											required
											className="form-control"
											placeholder="Email"
										/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<label className="label" htmlFor="subject">
											Subject
										</label>
										<input
											type="text"
											className="form-control"
											name="subject"
											id="subject"
											placeholder="Subject"
										/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<label className="label" htmlFor="message">
											Message
										</label>
										{/* //!message */}
										<textarea
											id="message"
											name="message"
											rows="5"
											required
											// cols="30"
											className="form-control"
											placeholder="Message"
										></textarea>
									</div>
								</div>
								<div className="col-md-12">
									<div className="form-group">
										<input
											type="submit"
											value="Send"
											className="btn btn-primary"
										/>
										<div className="submitting"></div>
									</div>
								</div>
							</div>
						</form>
					</div>
						<div className="map">
							<iframe
								title="Weed Recreation &amp; Parks Skate Park Map"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1216.4923444290503!2d-122.38860719338857!3d41.43675037311849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ce74bbfb352295%3A0x32669dd162d62e00!2sWeed%20Recreation%20%26%20Parks%20Skate%20Park!5e0!3m2!1sen!2slb!4v1682376507462!5m2!1sen!2slb"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
				</div>

				<div className="downer">
					<div className="shortCuts">
						<div className="hs">
							<div className="IconH">
								<span class="fa fa-instagram"></span>
							</div>
							<div className="text">
								<p>
									Address
								</p>
									<a href="https://goo.gl/maps/SnUrKfHpjStFe5Yj6">
										26 Federal Plaza 23rd floor, New York, NY 10278, United
										States
									</a>
							</div>
						</div>
						<div className="hs">
							<div className="IconH">
								<span class="fa fa-phone"></span>
							</div>
							<div className="text">
								<p>
									Phone
								</p>
									<a href="tel://18632772277">+1 (863) 277 2277</a>
							</div>
						</div>
						<div className="hs">
							<div className="IconH">
								<span class="fa fa-paper-plane"></span>
							</div>
							<div className="text">
								<p>
									Email
								</p>
									<a href="mailto:zak@gmail.com">zak@gmail.com</a>
							</div>
						</div>
						<div className="hs">
							<div className="IconH">
								<span class="fa fa-globe"></span>
							</div>
							<div className="text">
								<p>
									Website
								</p>
									<a href="https://www.avon.com">avon.com</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactUs;
