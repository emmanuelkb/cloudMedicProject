import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/Dashboard.css";
import SideBar from "../components/SideBar";
import DashboardComp from "../components/DashboardComp";
import Appointment from "../components/Appointment";
import Account from "../components/Account";
import Chat from "../components/Chat";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <BrowserRouter>
        <SideBar />
        <Switch>
          <Route path="/dashboard" exact component={DashboardComp} />
          <Route path="/dashboard/appointment" component={Appointment} />
          <Route path="/dashboard/account" component={Account} />
          <Route path="/dashboard/chat" component={Chat} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
