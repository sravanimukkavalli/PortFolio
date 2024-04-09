import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import Header from '../Header'

const skillDetails = [
  {
    id: uuidv4(),
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png',
    name: 'HTML',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png',
    name: 'CSS',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png',
    name: 'Bootstrap',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png',
    name: 'Javascript',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1710928590/React-icon.svg_itfyof.png',
    name: 'React JS',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1710928543/pngegg_my3nvp.png',
    name: 'Node JS',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1710927865/python_lg23kz.svg',
    name: 'Python',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1710927940/Git-Logo_luacea.png',
    name: 'GIT',
  },
]

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="profile-about-container">
      <div className="about-button-container">
        <img
          src="https://res.cloudinary.com/dorxrzhje/image/upload/v1710926468/sravaniImage_mbrv4g.jpg"
          className="profile-img"
          alt="profile"
        />
        <Link to="/projects">
          <button type="button" className="about-project-btn">
            Click to View Projects
          </button>
        </Link>
      </div>
      <div className="profile-text-container">
        <h1 className="profile-name">I&apos;m Sravani Mukkavalli</h1>
        <p className="mern-stack">Aspiring MERN Stack Developer</p>
        <p className="profile-description">
          I am currently looking for a job in Fullstack Development.
          {/* I have a bachelor's degree in Pharmacy at Sir C.R.Reddy College of Pharmaceutical Sciences. */}
          At NxtWave&apos;s CCBP 4.0 Intensive, I&apos;m currently learning
          fullstack development with a specialization in 4.0 technologies. In
          love with the coding challenges and hands-on projects. With
          Industry&apos;s first ever IRC 4.0, getting ready to take on new
          challenges in the tech world.
        </p>
        <h1 className="skills-heading">Skills</h1>
        <ul className="unordered-skills-container">
          {skillDetails.map(each => (
            <li className="each-skill-container" key={each.id}>
              <img
                src={each.imageUrl}
                alt={each.name}
                className="each-skill-img"
              />
              <p className="each-skill">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)
export default Home
