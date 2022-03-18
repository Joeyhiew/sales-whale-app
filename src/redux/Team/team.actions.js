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

export const updateFavorite = (data) => {
  return {
    type: Types.UPDATE_FAVORITE,
    payload: data,
  };
};
