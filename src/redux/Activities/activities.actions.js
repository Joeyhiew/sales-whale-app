import Types from "./activities.types.js";

export const getActivities = (data) => {
  return {
    type: Types.FETCH_ACTIVITIES,
    payload: data,
  };
};
