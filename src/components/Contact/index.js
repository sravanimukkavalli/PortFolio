import {MdEmail, MdLocationPin} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'

import './index.css'
import Header from '../Header'

const Contact = () => (
  <div className="contact-container">
    <Header />
    <div className="contact-details-container">
      <div>
        <h1 className="contact-heading">THANK YOU</h1>
        <p className="lets-work">For visiting my Portfolio</p>
      </div>
      <ul className="unordered-contact-details">
        <li className="each-contact-item">
          <MdEmail className="contact-icon" />
          <p className="contact-detail-heading">Email</p>
          <a
            href="https://mail.google.com/"
            style={{textDecoration: 'none'}}
            className="lets-work"
          >
            sravanimukkavalli99@gmail.com
          </a>
        </li>
        <li className="each-contact-item">
          <BsLinkedin className="contact-icon" />
          <p className="contact-detail-heading">Linkedin</p>
          <a
            href="https://www.linkedin.com/"
            style={{textDecoration: 'none'}}
            className="lets-work"
          >
            https://www.linkedin.com/in/sravani-mukkavalli-426163257
          </a>
        </li>
        <li className="each-contact-item">
          <MdLocationPin className="contact-icon" />
          <p className="contact-detail-heading">Address</p>
          <p className="lets-work">Eluru, Andhra Pradesh, 534002.</p>
        </li>
      </ul>
    </div>
  </div>
)

export default Contact
