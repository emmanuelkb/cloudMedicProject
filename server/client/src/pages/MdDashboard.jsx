import "../styles/Dashboard.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import MdSideBar from "../components/MdSideBar";
import MdDashboardComp from "../components/MdDashboardComp";
import MdPatients from "../components/MdPatients";
import MdAccount from "../components/MdAccount";
import Chat2 from "../components/Chat2";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <BrowserRouter>
        <MdSideBar />
        <Switch>
          <Route path="/md/dashboard" exact component={MdDashboardComp} />
          <Route path="/md/dashboard/patients" component={MdPatients} />
          <Route path="/md/dashboard/account" component={MdAccount} />
          <Route path="/md/dashboard/chat" component={Chat2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
