import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import Education from './components/Education'

const App = () => (
  <div className="app-container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/education" component={Education} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
