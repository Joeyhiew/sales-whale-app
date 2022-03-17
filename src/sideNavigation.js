import React from "react";
import "./sideNavigation.css";
import { Sidenav, Nav, Dropdown } from "rsuite";
import SWLogoIcon from "./assets/sideNavigation/sw-logo-white.svg";
import CampaignIcon from "./assets/sideNavigation/icon-campaign.svg";
import TeamIcon from "./assets/sideNavigation/icon-teams.svg";
import LeadIcon from "./assets/sideNavigation/icon-leads.svg";
import ReportIcon from "./assets/sideNavigation/icon-reports.svg";

function SideNavigation() {
  return (
    <nav class="navbar">
      <ul class="nav navbar-nav">
        <a class="navbar-brand" href="/">
          <img
            src={SWLogoIcon}
            style={{ marginTop: "25px", marginLeft: "25px" }}
            alt=""
          />
        </a>
        <a class="navbar-brand" href="#">
          <img className="nav-icon" src={CampaignIcon} />
        </a>
        <a class="navbar-brand" href="/Teams">
          <img className="nav-icon" src={TeamIcon} />
        </a>
        <a class="navbar-brand" href="#">
          <img className="nav-icon" src={LeadIcon} />
        </a>
        <a class="navbar-brand" href="#">
          <img className="nav-icon" src={ReportIcon} />
        </a>
      </ul>
    </nav>
  );
}
export default SideNavigation;
