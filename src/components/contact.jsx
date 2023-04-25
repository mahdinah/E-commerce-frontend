// npm i @emailjs/browser
//! ------------------------------------------------------------------------------------------------
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('realclintEJS_2mprvoc', 'RCtemplate_5uass5', form.current, 'SpzDv-rTMccPuaorJ')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

// return (
//   <div>
//     <form ref={form} onSubmit={sendEmail}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" name="user_name" required />
//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="user_email" required />
//       <label htmlFor="message">Message:</label>
//       <textarea id="message" name="message" rows="5" required></textarea>
//       <button type="submit">Send</button>
//     </form>
//     </div>
// );
// };
// export default ContactUs;

// import React from "react";

function ContactUs() {
	// const form = useRef();

	// const sendEmail = (e) => {
	// 	e.preventDefault();

	// 	emailjs
	// 		.sendForm(
	// 			"service_hfyz7a5",
	// 			"template_lby2h2d",
	// 			form.current,
	// 			"5me2O_9LCLf4zeEBu"
	// 		)
	// 		.then(
	// 			(result) => {
	// 				console.log(result.text);
	// 			},
	// 			(error) => {
	// 				console.log(error.text);
	// 			}
	// 		);
	// };
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
		<section className="ftco-section">
			{/* <div>
				<form ref={form} onSubmit={sendEmail}>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="user_name" required />
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="user_email" required />
					<label htmlFor="message">Message:</label>
					<textarea id="message" name="message" rows="5" required></textarea>
					<button type="submit">Send</button>
				</form>
			</div> */}
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12">
						<div className="wrapper">
							<div className="row no-gutters mb-5">
								<div className="col-md-7">
									<div className="contact-wrap w-100 p-md-5 p-4">
										<h3 className="mb-0">Contact Us</h3>

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
							</div>
							<div class="flex row justify-content-space-between margin-top-3">
								<div class="col-md-3">
									<div class="dbox w-100 text-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="fa fa-map-marker"></span>
										</div>
										<div class="text">
											<p>
												<span>Address:</span> 198 West 21th Street, Suite 721
												New York NY 10016
											</p>
										</div>
									</div>
								</div>
								<div class="col-md-3">
									<div class="dbox w-100 text-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="fa fa-phone"></span>
										</div>
										<div class="text">
											<p>
												<span>Phone:</span>{" "}
												<a href="tel://1234567920">+ 1235 2355 98</a>
											</p>
										</div>
									</div>
								</div>
								<div class="col-md-3">
									<div class="dbox w-100 text-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="fa fa-paper-plane"></span>
										</div>
										<div class="text">
											<p>
												<span>Email:</span>{" "}
												<a href="mailto:info@yoursite.com">info@yoursite.com</a>
											</p>
										</div>
									</div>
								</div>
								<div class="col-md-3">
									<div class="dbox w-100 text-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="fa fa-globe"></span>
										</div>
										<div class="text">
											<p>
												<span>Website</span>{" "}
												<a href="https://www.yoursite.com">yoursite.com</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactUs;
