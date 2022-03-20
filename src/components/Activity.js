import firebaseApp from "../firebase.js";
import { useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import { getActivities } from "../redux/Activities/activities.actions";
import "./Activity.css";

function Activity({ activities }) {
  const dispatch = useDispatch();
  useEffect(() => {
    function getActivitiesData() {
      let activitiesRef = firebaseApp.database().ref("activities");
      return activitiesRef.once("value", (snapshot) => {
        const data = snapshot.val();
        dispatch(getActivities(data));
      });
    }
    getActivitiesData();
  }, [dispatch]);

  function activityDescConstructor(activity) {
    const action = activity.action;
    const person = activity.person.name;
    const target = activity.target;

    switch (action) {
      case "increased_quota":
        return (
          <p className="activity-item-details-desc">
            <strong>{person}</strong> increased <strong>{target}</strong>'s
            quota.
          </p>
        );
      case "added_leads":
        return (
          <p className="activity-item-details-desc">
            <strong>{person}</strong> added new leads to{" "}
            <strong>{target}</strong>.
          </p>
        );
      case "archived_team":
        return (
          <p className="activity-item-details-desc">
            <strong>{person}</strong> archived the team{" "}
            <strong>{target}</strong>.
          </p>
        );
      default:
        const alteredString = action.replace("_", " ");
        return (
          <p className="activity-item-details-desc">
            <strong>{person}</strong> {alteredString} <strong>{target}</strong>.
          </p>
        );
    }
  }
  return (
    <div className="activity-table">
      <div className="activity-table-header">
        <p>Activity</p>
      </div>
      <div className="activity-table-list">
        {activities == null || activities.length === 0 ? (
          <div className="no-data">
            <p>No activities to show</p>
          </div>
        ) : (
          <div className="activity-item-list">
            {activities.map((activity) => (
              <div className="activity-item">
                <img src={activity.person.avatar} />
                <div className="activity-item-details">
                  {activityDescConstructor(activity)}

                  {activity.created_at ? (
                    <p className="activity-item-details-time">
                      {activity.created_at}
                    </p>
                  ) : (
                    <p className="activity-item-details-time">-</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
const mapStatetoProps = (state) => ({
  activities: state.activities.activities,
});

export default connect(mapStatetoProps)(Activity);
