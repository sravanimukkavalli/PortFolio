import {v4 as uuidv4} from 'uuid'
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'
import Header from '../Header'

const timelineItemsList = [
  {
    id: uuidv4(),
    projectTitle: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    duration: '1 hr',
    projectUrl: 'https://tourismsrav.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectTitle: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    duration: '2 hrs',
    projectUrl: 'https://restaurantinfo.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectTitle: 'Todos Application',
    description:
      'This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',
    duration: '3 hrs',
    projectUrl: 'https://taskplansrav.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectTitle: 'Wikipedia Search Application',
    description:
      'Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',
    duration: '4 hrs',
    projectUrl: 'https://encyclopedia.ccbp.tech',
  },
  // {
  //   id: uuidv4(),
  //   projectTitle: 'Move Messenger',
  //   description:
  //     'The landing page of Move Messenger gives you a brief intro of Move Messenger. The landing page is responsive enabling to view it across various devices.',
  //   imageUrl:
  //     'https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png',
  //   duration: '5 hr',
  //   projectUrl: 'https://movemessengers.ccbp.tech/',
  // },
  {
    id: uuidv4(),
    projectTitle: 'Browser History',
    description:
      'Browser History initially displays the list of given history items with a delete button for each history item.Filter the history items with the search input irrespective of case.',
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1711879364/Screenshot_3_s3w1wn.png',
    duration: '1 hr',
    projectUrl: 'https://webhistorysm.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectTitle: 'Password Manager',
    description:
      'Developed a responsive website for passwords where users can store a list of passwords, with website name and  username info.',
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1711879867/Screenshot_5_hwzzu9.png',
    duration: '2 hrs',
    projectUrl: 'https://pwdmngrsrav.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectTitle: 'Match Game',
    description:
      'Developed a responsive images matching game where a random image is generated every time user clicks on  the matched thumbnail and score is incremented and in a minute time limit.',
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1711880433/Screenshot_6_p1ke0b.png',
    duration: '2 hrs',
    projectUrl: 'https://matchimgsrav.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectTitle: 'IPL Dashboard',
    description:
      'Developed to display the list of teams.Each team will be navigated to the Team Matches Route where the team banner, latest match, and list of recent matches should be displayed.',
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1711880843/Screenshot_7_vwnipg.png',
    duration: '3 hrs',
    projectUrl: 'https://iplinfosrav.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectTitle: 'Nxt Trendz',
    description:
      'Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc(credentials : username: rahul , password: rahul@2021 ).',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',
    duration: '6 hrs',
    projectUrl: 'https://sravnxttrend.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectTitle: 'Jobby App',
    description:
      'Implemented Jobby App where users can log in and can see a list of jobs with search by Job title, filters based  on Salary range and Employment type, etc(credentials : username: rahul , password: rahul@2021 ).',
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1711881049/Screenshot_8_ribxbj.png',
    duration: '6 hrs',
    projectUrl: 'https://jobbyappsrav.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectTitle: 'Prime Video',
    description:
      'Prime Video application has Action Movies List and Comedy Movies List that are displayed using React Slick',
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1711886935/Screenshot_11_wx4tun.png',
    duration: '1 hr',
    projectUrl: 'https://primevideoms.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectTitle: 'Rock Paper Scissors',
    description:
      'Developed the responsive Mini Game where users can select options available in game and depending on the result ,the score varies and when user clicks on Play Again, play view will be displayed.',
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1711881741/Screenshot_9_in8uay.png',
    duration: '3 hrs',
    projectUrl: 'https://sravrockpaper.ccbp.tech',
  },
  {
    id: uuidv4(),
    projectTitle: 'Nxt Watch',
    description:
      'Nxt Watch application is an  application like Youtube where users can log in and see the list of trending videos with search and save features(credentials : username: rahul , password: rahul@2021 ).',
    imageUrl:
      'https://res.cloudinary.com/dorxrzhje/image/upload/v1711883262/Screenshot_10_zbcn4x.png',
    duration: '10 hrs',
    projectUrl: 'https://sravsnxtwatch.ccbp.tech',
  },
]

const DisplayProject = props => {
  const {projectDetails} = props
  const {duration, description, imageUrl, projectUrl} = projectDetails
  return (
    <li className="project-details-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-duration-container">
        <h1 className="course-title">{projectDetails.projectTitle}</h1>
        <div className="icon-duration-container">
          <AiFillCalendar className="icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <a href={projectUrl} className="link-item">
        Visit
      </a>
    </li>
  )
}

const Projects = () => (
  <div className="projects-container">
    <Header />
    <h1 className="my-projects-heading">My Projects</h1>
    <ul className="unordered-projects-container">
      {timelineItemsList.map(eachProject => (
        <DisplayProject key={eachProject.id} projectDetails={eachProject} />
      ))}
    </ul>
  </div>
)

export default Projects
