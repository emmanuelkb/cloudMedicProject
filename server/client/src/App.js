import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { SubState } from "./context/SubState";
import SignInPage from "./pages/SignInPage";
import IndexPage from "./pages/IndexPage";
import PlansPage from "./pages/PlansPage";
import NewsPage from "./pages/NewsPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/Dashboard";
import MdSignInPage from "./pages/MdSignInPage";
import MdDashboardPage from "./pages/MdDashboard";
import ContactPage from "./pages/ContactPage";

function App() {
  const [value, setValue] = useState("No Subscription Selected");
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" component={SignInPage} />
        <Route path="/mdlogin" component={MdSignInPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/dashboard" exact component={DashboardPage} />
        <Route path="/mddashboard" exact component={MdDashboardPage} />
        <SubState.Provider value={{ value, setValue }}>
          <Route path="/plans" component={PlansPage} />
          <Route path="/register" component={SignUpPage} />
        </SubState.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
