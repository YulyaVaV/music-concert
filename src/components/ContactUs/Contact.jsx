import React from 'react';

import './Contact.scss';

import phone from './images/phone.png';
import message from './images/message.png';
import location from './images/location.png';
import shape1 from './images/shape1.png';
import shape2 from './images/shape2.png';

export const Contact = () => {
	return (
		<div className="contact" data-aos="fade-up" id="contactUs">
			<div className="contact__block1">
				<h2 className="contact__title">Contact us</h2>
				<h3 className="contact__subtitle">Have an inquiry? We’ll be happy to assist you</h3>
				
				<div className="contact__info">
					<a href="+92 333 6527366" className="contact__img">
						<img src={phone} alt="phone" />
						+92 333 6527366
					</a>
					<a href="abuzer@greelogix.com" className="contact__img">
						<img src={message} alt="phone" />
						abuzer@greelogix.com
					</a>
					<a 
					  href="https://goo.gl/maps/NXmbi3CxVZRTJL5VA"
					  target="_blank"
            rel="noopener noreferrer"
						className="contact__img"
					>
					<img src={location} alt="phone" />
						Plot 252, Block L Phase 2 Johar Town, Lahore, PK
					</a>
				</div>
				<div className="confetti">
					<img src={shape1} alt="" className="contact__shape"/>
				</div>
			</div>
			
			<div className="contact__block2">
				<div className="contact__wrap">
					<h3 className="contact__caption">Fill in your details</h3>
           <form action="" className="contact__form">
						<label className="contact__name--title">Name</label>
							<input
								name="name"
								type="text"
								placeholder="John Doe"
								class="contact__name"
								required
							/>
						<label className="contact__name--title">Email</label>
							<input
								name="email"
								type="text"
								placeholder="johndoe2347@mail.com"
								class="contact__email"
								required
							/>
						<label className="contact__name--title">Message</label>
							<textarea
								name="message"
								placeholder="Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex "
								class="contact__message"
								required
						  >
						</textarea>
            <button className="contact__button">Submit</button>
          </form>
				</div>
				<div className="confetti">
					<img src={shape2} alt="shape" className="contact__shap"/>
				</div>
			</div>
		</div>
	)
}
         
export default Contact;
