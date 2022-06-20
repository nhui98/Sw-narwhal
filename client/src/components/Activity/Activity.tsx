import ActivityItem from "../ActivityItem/ActivityItem";
import { data } from "../../data/data";

export default function Activity() {
  return (
    <div className="teams-activity">
      <h2 className="activity-header">Activity</h2>
      <div className="activity-feed">
        {data.activities.map((activity) => (
          <ActivityItem activity={activity} key={activity.id} />
        ))}
      </div>
    </div>
  );
}
