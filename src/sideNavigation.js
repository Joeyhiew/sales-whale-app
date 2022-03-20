import React from "react";
import "./sideNavigation.css";
import { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
// import { Sidenav, Nav, Dropdown } from "rsuite";
import SWLogoIcon from "./assets/sideNavigation/sw-logo-white.svg";
import CampaignIcon from "./assets/sideNavigation/icon-campaign.svg";
import TeamIcon from "./assets/sideNavigation/icon-teams.svg";
import LeadIcon from "./assets/sideNavigation/icon-leads.svg";
import ReportIcon from "./assets/sideNavigation/icon-reports.svg";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { changeNav } from "./redux/Team/team.actions";

function SideNavigation() {
  const [activeTab, setActiveTab] = useState("/");
  const dispatch = useDispatch();
  useEffect(() => {
    const path = window.location.pathname.replace("/", "");
    setActiveTab(path);
    dispatch(changeNav(activeTab));
  });

  return (
    <Navbar variant="dark" class="navbar">
      <Nav class="nav navbar-nav">
        <Nav.Link
          as={Link}
          to="/"
          class={activeTab == "/" ? "navbar-brand-active" : "navbar-brand"}
        >
          <img
            className={activeTab == "/" ? "nav-icon-active" : "nav-icon"}
            src={SWLogoIcon}
            id={"/"}
          />
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/Campaigns"
          id={"Campaigns"}
          class={activeTab == "Campaigns" ? "navbar-brand-active" : "nav-link"}
        >
          <img
            className={
              activeTab == "Campaigns" ? "nav-icon-active" : "nav-icon"
            }
            src={CampaignIcon}
            id={"Campaigns"}
          />
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/Teams"
          id={"Teams"}
          class={activeTab == "Teams" ? "navbar-brand-active" : "nav-link"}
        >
          <img
            className={activeTab == "Teams" ? "nav-icon-active" : "nav-icon"}
            src={TeamIcon}
            id={"Teams"}
          />
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/Leads"
          id={"Leads"}
          class={activeTab == "Leads" ? "navbar-brand-active" : "nav-link"}
        >
          <img
            className={activeTab == "Leads" ? "nav-icon-active" : "nav-icon"}
            src={LeadIcon}
            id={"Leads"}
          />
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/Reports"
          id={"Reports"}
          class={activeTab == "Reports" ? "navbar-brand-active" : "nav-link"}
        >
          <img
            className={activeTab == "Reports" ? "nav-icon-active" : "nav-icon"}
            src={ReportIcon}
            id={"Reports"}
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default SideNavigation;
