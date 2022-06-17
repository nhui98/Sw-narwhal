type Team = {
  id: number;
  name: string;
  image: string;
  description: string;
  campaigns_count: number;
  leads_count: number;
  is_favorited: boolean;
  is_archived: boolean;
  created_at?: string;
};

interface TeamsListProps {
  title: string;
  teams: Team[];
}

export default function TeamsList({ teams, title }: TeamsListProps) {
  return (
    <div className="teams-list">
      <div className="teams-list-title">
        <h2>{title}</h2>
        <span>
          Showing {teams.length} out of {teams.length} teams
        </span>
      </div>
      {teams.map((team) => (
        <div key={team.id}>tets</div>
      ))}
    </div>
  );
}
