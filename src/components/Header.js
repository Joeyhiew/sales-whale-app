import SWLogoIcon from "../assets/sideNavigation/sw-logo-white.svg";
import CampaignIcon from "../assets/sideNavigation/icon-campaign.svg";
import TeamIcon from "../assets/sideNavigation/icon-teams.svg";
import LeadIcon from "../assets/sideNavigation/icon-leads.svg";
import ReportIcon from "../assets/sideNavigation/icon-reports.svg";
import NotificationIcon from "../assets/sideNavigation/menu-notification.svg";
import UserIcon from "../assets/sideNavigation/john.svg";
import carrotIcon from "../assets/sideNavigation/caret-down.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="top-bar">
        <div className="top-bar-box">
          <p>NARWHAL</p>
        </div>
        <div className="top-bar-box-right">
          <p>Teams</p>
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
          <img src={TeamIcon} className="icon-image" />
          <h2>Teams</h2>
        </div>

        <button type="button" class="btn btn-default btn-sm">
          <i class="fas fa-plus"></i>
          <p>CREATE NEW TEAM</p>
        </button>
      </div>
    </div>
  );
}
export default Header;
