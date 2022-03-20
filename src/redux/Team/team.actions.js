import Types from "./team.types.js";

export const getTeams = (data) => {
  return {
    type: Types.FETCH_TEAMS,
    payload: data,
  };
};

export const changeTabs = (data) => {
  return {
    type: Types.CHANGE_TABS,
    payload: data,
  };
};

export const changeNav = (data) => {
  return {
    type: Types.CHANGE_NAV,
    payload: data,
  };
};

export const updateFavorite = (data) => {
  return {
    type: Types.UPDATE_FAVORITE,
    payload: data,
  };
};

export const updateTeamSearch = (data) => {
  return {
    type: Types.UPDATE_TEAM_SEARCH,
    payload: data,
  };
};
