import { data } from "../../data/data";
import ActivityItem from "../ActivityItem/ActivityItem";

export default function Activity() {
  return (
    <div className="teams-activity">
      <div className="activity-header">
        <h2 className="activity-title">Activity</h2>
      </div>
      <div className="activity-feed">
        {data.activities.map((activity) => (
          <ActivityItem activity={activity} key={activity.id} />
        ))}
      </div>
    </div>
  );
}
