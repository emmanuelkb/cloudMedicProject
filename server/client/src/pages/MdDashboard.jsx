import "../styles/Dashboard.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import MdSideBar from "../components/MdSideBar";
import MdDashboardComp from "../components/MdDashboardComp";
import MdPatients from "../components/MdPatients";
import Account from "../components/Account";
import Chat from "../components/Chat";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <BrowserRouter>
        <MdSideBar />
        <Switch>
          <Route path="/md/dashboard" exact component={MdDashboardComp} />
          <Route path="/md/dashboard/patients" component={MdPatients} />
          {/* <Route path="/md/dashboard/schedule" component={Account} />
          <Route path="/md/dashboard/chat" component={Chat} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
