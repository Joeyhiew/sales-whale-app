import Types from "./activities.types.js";

const INITIAL_STATE = {
  activities: null,
};
const activitiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
};
export default activitiesReducer;
