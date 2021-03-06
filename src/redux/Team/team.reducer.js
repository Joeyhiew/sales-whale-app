import Types from "./team.types.js";

const INITIAL_STATE = {
  teams: null,
  activeTab: "all",
  teamSearch: "",
  navTab: "/",
};

const teamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };

    case Types.CHANGE_TABS:
      return {
        ...state,
        activeTab: action.payload,
      };
    case Types.UPDATE_FAVORITE:
      const index = state.teams.findIndex(
        (team) => team.id === action.payload.id
      );
      const updatedTeams = [
        ...state.teams.slice(0, index),
        action.payload,
        ...state.teams.slice(index + 1),
      ];
      return {
        ...state,
        teams: updatedTeams,
      };
    case Types.UPDATE_TEAM_SEARCH:
      return {
        ...state,
        teamSearch: action.payload,
      };
    case Types.CHANGE_NAV:
      return {
        ...state,
        navTab: action.payload,
      };
    default:
      return state;
  }
};
export default teamsReducer;
