import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NewTrip from "./pages/NewTrip";
import FlightResults from "./pages/Flightresults";
import Agenda from "./pages/Agenda";
import Checklist from "./pages/checklist";


function App() {
  return (
    <Wrapper>
      <Router>
      <div>
        <Switch>
        <Route exact path={process.env.REACT_APP_PUBLIC_URL + "/"} component={SignUp} />
        <Route path={process.env.REACT_APP_PUBLIC_URL + "/login"} component={Login} />
        <Route path={process.env.REACT_APP_PUBLIC_URL + "/newtrip"} component={NewTrip} />
        <Route path={process.env.REACT_APP_PUBLIC_URL + "/flightresults"} component={FlightResults} />
        <Route path={process.env.REACT_APP_PUBLIC_URL + "/agenda"} component={Agenda} />
        <Route path={process.env.REACT_APP_PUBLIC_URL +"/checklist"} component={Checklist} />
        </Switch>
      </div>
    </Router>
    </Wrapper>
  )
}

export default App;

