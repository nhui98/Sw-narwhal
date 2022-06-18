import type { Team } from "../TeamsList/TeamsList";
import {
  IconStar,
  IconConversationsSmall,
  IconLeadsSmall,
  IconStarFill,
} from "../../assets/iconComponents";

interface TeamsListProps {
  team: Team;
}

export default function TeamCard({
  team: {
    image,
    name,
    created_at,
    description,
    campaigns_count,
    leads_count,
    is_favorited,
    is_archived,
  },
}: TeamsListProps) {
  return (
    <div className="team-card">
      <div className="team-card-header">
        <div className="team-card-image">
          <img src={image} alt={name} />
        </div>
        <div className="team-card-info">
          <div className="team-card-name">{name}</div>
          {created_at && (
            <span className="team-card-date">Created on {created_at}</span>
          )}
        </div>
        <div className="team-card-star">
          {!is_favorited ? <IconStar /> : <IconStarFill />}
        </div>
      </div>
      <div className="team-card-description">
        {description && <p>{description}</p>}
      </div>
      <div className="team-card-footer">
        {campaigns_count && (
          <div className="team-card-campaign">
            <IconConversationsSmall />
            <span>{campaigns_count} Campaigns</span>
          </div>
        )}
        {leads_count && (
          <div className="team-card-leads">
            <IconLeadsSmall />
            <span>{leads_count} Leads</span>
          </div>
        )}
      </div>
    </div>
  );
}
