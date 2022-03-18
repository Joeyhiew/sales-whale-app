import firebaseApp from "../firebase.js";
import SideNavigation from "../sideNavigation";
import Header from "../components/Header";

import { getTeams } from "../redux/Team/team.actions";
import "./Teams.css";
import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import TabPanel from "../components/Tabs.js";
import ContentTable from "../components/ContentTable.js";
function Teams() {
  const dispatch = useDispatch();
  useEffect(() => {
    function getData() {
      let teamsRef = firebaseApp.database().ref("teams");
      return teamsRef.once("value", (snapshot) => {
        const data = snapshot.val();
        dispatch(getTeams(data));
      });
    }
    getData();
  }, [dispatch]);
  return (
    <div className="container">
      <SideNavigation />
      <div className="content-panel">
        <div className="top-panel">
          <Header />
          <TabPanel />
        </div>

        <div className="content-body">
          <ContentTable />
        </div>
      </div>
    </div>
  );
}
export default Teams;
