import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './App.css';
import EducationalQualification from "./components/EducationalQualification";
import Home from "./components/Home";
import PersonalInformation from "./components/PersonalInformation";
import SalaryAndAbout from "./components/SalaryAndAbout";
import Skills from "./components/Skills";
import Download from "./components/Download";


function App() {
  return (
    <Router>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/personal-infromation" component={PersonalInformation} />
        <Route path="/educational-qualification" component={EducationalQualification} />
        <Route path="/skills" component={Skills} />
        <Route path="/salary-and-about-you" component={SalaryAndAbout} />
        <Route path="/download" component={Download} />
      </Switch>
    </Router>
  );
}

export default App;
