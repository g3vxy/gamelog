import LandingPage from './Pages/LandingPage'
import './App.css'
import Header from './Components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Pricing from './Pages/Pricing'
import Features from './Pages/Features'

const App = () => {
  return <Router>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <LandingPage></LandingPage>
      </Route>
      <Route path="/pricing">
        <Pricing></Pricing>
      </Route>
      <Route path="/features">
        <Features></Features>
      </Route>
    </Switch>
  </Router>
}

export default App
