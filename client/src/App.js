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
        <Route exact path={"/"} component={SignUp} />
        <Route path={"/login"} component={Login} />
        <Route path={"/newtrip"} component={NewTrip} />
        <Route path={"/flightresults"} component={FlightResults} />
        <Route path={"/agenda"} component={Agenda} />
        <Route path={"/checklist"} component={Checklist} />
        </Switch>
      </div>
    </Router>
    </Wrapper>
  )
}

export default App;

