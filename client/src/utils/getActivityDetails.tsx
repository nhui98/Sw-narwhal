export default function getActivityDetails(
  name: string,
  action: string,
  target: string
) {
  switch (action) {
    case "increased_quota":
      return (
        <span className="activity-item-description">
          <b>{name}</b> increased <b>{target}</b>&apos;s quota
        </span>
      );
    case "added_leads":
      return (
        <span className="activity-item-description">
          <b>{name}</b> added new leads to <b>{target}</b>
        </span>
      );
    case "archived_team":
      return (
        <span className="activity-item-description">
          <b>{name}</b> archive the team <b>{target}</b>
        </span>
      );
    default:
      return (
        <span>
          <b>{name}</b>
        </span>
      );
  }
}
