import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Detail from "routes/Details";
import Home from "routes/Home";

const App = () => {
  return (
    <Router>
     <Switch>
       <Route path="/movie/:id">
         <Detail />
       </Route>
       <Route exact path={process.env.PUBLIC_URL + "/"}>
         <Home />
       </Route>
     </Switch>
    </Router>
  )
};

export default App;
