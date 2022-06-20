import getActivityDetails from "../../utils/getActivityDetails";
import Avatar from "../Avatar/Avatar";
interface ActivityItemProps {
  activity: {
    id: number;
    person: {
      id: number;
      name: string;
      avatar: string;
    };
    action: string;
    target: string;
    created_at?: string;
  };
}

export default function ActivityItem({
  activity: { id, person, action, target, created_at },
}: ActivityItemProps) {
  return (
    <div className="activity-item" key={id}>
      <div className="activity-item-image">
        <Avatar avatar={person.avatar} />
      </div>
      <div className="activity-item-details">
        {getActivityDetails(person.name, action, target)}
        {created_at && (
          <span className="activity-item-createdat">{created_at}</span>
        )}
      </div>
    </div>
  );
}
