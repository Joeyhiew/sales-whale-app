import teamsReducer from "../redux/Team/team.reducer";
import { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import CampaignIcon from "../assets/sideNavigation/icon-campaign.svg";
import LeadIcon from "../assets/sideNavigation/icon-leads.svg";
import "./ContentTable.css";
import { updateFavorite } from "../redux/Team/team.actions";

function ContentTable({ activeTab, teams, teamSearch }) {
  const [filteredTeams, setFilteredTeams] = useState("");
  const [count, setCount] = useState(0);
  function favoriteAction(team) {
    team.is_favorited = !team.is_favorited;
    dispatch(updateFavorite(team));
  }

  useEffect(() => {
    setFilteredTeams(teams);
  }, [teams]);

  useEffect(() => {
    const parent = document.querySelector(".grid-container");
    if (parent != null) {
      const children = parent.querySelectorAll(".grid-item");
      setCount(children.length);
    }
  });

  useEffect(() => {
    if (teamSearch.length > 0) {
      const filtered = teams.filter((team) => {
        return team.name.toLowerCase().includes(teamSearch.toLowerCase());
      });
      setFilteredTeams(filtered);
    } else {
      setFilteredTeams(teams);
    }
  }, [teamSearch]);

  function gridItem(team) {
    return (
      <div class="grid-item" key={team.id}>
        <div className="grid-header">
          <img src={team.image} />
          <div className="grid-header-right">
            <div className="grid-header-info">
              <p className="grid-header-info-name">{team.name}</p>
              <p className="grid-header-info-date">{team.created_at}</p>
            </div>
            {team.is_favorited == true ? (
              <i class="fa fa-star" onClick={() => favoriteAction(team)}></i>
            ) : (
              <i class="fa fa-star-o" onClick={() => favoriteAction(team)}></i>
            )}
          </div>
        </div>
        <div className="grid-item-desc">
          <div className="grid-item-desc-p">
            <p>{team.description}</p>
          </div>
        </div>
        <div className="grid-item-details">
          <div className="grid-item-details-campaign">
            <img src={CampaignIcon} />
            <p>{team.campaigns_count.toLocaleString("en-US")} Campaigns</p>
          </div>
          <div className="grid-item-details-lead">
            <img src={LeadIcon} />
            <p>{team.leads_count.toLocaleString("en-US")} Leads</p>
          </div>
        </div>
      </div>
    );
  }
  const dispatch = useDispatch();
  return (
    <div className="content-table">
      {filteredTeams.length === 0 ? null : (
        <>
          <div className="content-header">
            <h2>{activeTab} Teams</h2>

            <p>
              Showing {count} out of {filteredTeams.length} teams
            </p>
          </div>
          <div class="grid-container">
            {teams == null || teams.length === 0
              ? null
              : filteredTeams.length == 0
              ? null
              : filteredTeams.map((team) => (
                  <>
                    {activeTab == "All" ? (
                      gridItem(team)
                    ) : (
                      <>
                        {activeTab == "Favorites" && team.is_favorited
                          ? gridItem(team)
                          : null}
                        {activeTab == "Archived" && team.is_archived
                          ? gridItem(team)
                          : null}
                      </>
                    )}
                  </>
                ))}
          </div>
        </>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  activeTab: state.teams.activeTab,
  teams: state.teams.teams,
  teamSearch: state.teams.teamSearch,
});
export default connect(mapStateToProps)(ContentTable);
