import React from "react";
import OrganizedEventEntry from "./OrganizedEventEntry";
import EventAttendedByStaff from "./EventAttendedByStaff";
import Innovation from "./Innovation";
import StudentExcellence from "./StudentExcellence";
import Conference from "./Conference";
import { Route, Switch } from "react-router";


function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={OrganizedEventEntry}/>
      <Route exact path="/EventAttendedByStaff" component={EventAttendedByStaff}/>
      <Route exact path="/Innovation" component={Innovation}/>
      <Route exact path="/StudentExcellence" component={StudentExcellence}/>
      <Route exact path="/Conference" component={Conference}/>
    </Switch>
    </>
  );
}

export default App;
