import { useDispatch, connect } from "react-redux";
import { useEffect, useState } from "react";
import SWLogoIcon from "../assets/sideNavigation/sw-logo-white.svg";
import CampaignIcon from "../assets/sideNavigation/icon-campaign.svg";
import TeamIcon from "../assets/sideNavigation/icon-teams.svg";
import LeadIcon from "../assets/sideNavigation/icon-leads.svg";
import ReportIcon from "../assets/sideNavigation/icon-reports.svg";
import NotificationIcon from "../assets/sideNavigation/menu-notification.svg";
import UserIcon from "../assets/sideNavigation/john.svg";
import carrotIcon from "../assets/sideNavigation/caret-down.svg";
import CreateModal from "./CreateModal";
import "./Header.css";

function Header({ navTab }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="header-container">
      <div className="top-bar">
        <div className="top-bar-box">
          <p>NARWHAL</p>
        </div>
        <div className="top-bar-box-right">
          {navTab.length === 0 ? <p>Main</p> : <p>{navTab}</p>}

          <div className="top-bar-box-right-right">
            <img className="notification-icon " src={NotificationIcon} />
            <p>Hello, John</p>
            <img className="user-profile-img" src={UserIcon} />
            <img className="profile-arrow" src={carrotIcon} />
          </div>
        </div>
      </div>
      <div className="heading">
        <div className="page-name-box">
          {navTab == "" ? (
            <img src={SWLogoIcon} className="icon-image" />
          ) : navTab == "Campaigns" ? (
            <img src={CampaignIcon} className="icon-image" />
          ) : navTab == "Teams" ? (
            <img src={TeamIcon} className="icon-image" />
          ) : navTab == "Leads" ? (
            <img src={LeadIcon} className="icon-image" />
          ) : navTab == "Reports" ? (
            <img src={ReportIcon} className="icon-image" />
          ) : null}
          {navTab.length === 0 ? <h2>Main</h2> : <h2>{navTab}</h2>}
        </div>

        <button
          type="button"
          class="btn btn-default btn-sm"
          onClick={() => setModalShow(true)}
        >
          <i class="fas fa-plus"></i>
          <p>CREATE NEW {navTab.toUpperCase()}</p>
        </button>
        <CreateModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          navTab={navTab}
        />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  navTab: state.teams.navTab,
});
export default connect(mapStateToProps)(Header);
