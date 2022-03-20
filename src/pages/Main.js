import firebaseApp from "../firebase.js";
import SideNavigation from "../sideNavigation";
import Header from "../components/Header";

import { getTeams } from "../redux/Team/team.actions";
import "./Teams.css";
import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import TabPanel from "../components/Tabs.js";
import ContentTable from "../components/ContentTable.js";
import Activity from "../components/Activity";
function Main() {
  return (
    <div className="container">
      <SideNavigation />
      <div className="content-panel">
        <div className="top-panel">
          <Header />
          <TabPanel />
        </div>

        <div className="content-body">
          <p>Main</p>
        </div>
      </div>
    </div>
  );
}
export default Main;
