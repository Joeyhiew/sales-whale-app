import { combineReducers } from "redux";
import teamsReducer from "./Team/team.reducer";
import activitiesReducer from "./Activities/activities.reducer";

const rootReducer = combineReducers({
  teams: teamsReducer,
  activities: activitiesReducer,
});

export default rootReducer;
