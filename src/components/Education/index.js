import Header from '../Header'

import './index.css'

const Education = () => (
  <div className="contact-container">
    <Header />
    <div className="education-details-container">
      <ul className="unordered-education-details">
        <li className="each-education-item">
          <h1 className="education-detail-heading">
            IRC, CCBP Intensive 4.0 Tech Program
          </h1>
          <p className="education-name">
            Full Stack Web Development | Sep 2023 – Ongoing
          </p>
        </li>
        <li className="each-education-item">
          <h1 className="education-detail-heading">
            Bachelor&apos;s Degree in Pharmacy
          </h1>
          <p className="education-name">
            Sir C. R. Reddy College Of Pharmaceutical Sciences, Eluru, A.P |
            2020
          </p>
        </li>
        <li className="each-education-item">
          <h1 className="education-detail-heading">
            Board Of Intermediate Education
          </h1>
          <p className="education-name">
            Sri Chaitanya Junior College, Eluru, A.P | 2016
          </p>
        </li>
        <li className="each-education-item">
          <h1 className="education-detail-heading">
            Board Of Secondary Education
          </h1>
          <p className="education-name">
            Bhashyam E.M High School, Eluru, A.P | 2014
          </p>
        </li>
      </ul>
    </div>
  </div>
)

export default Education
