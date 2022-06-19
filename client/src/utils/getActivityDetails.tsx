export default function getActivityDetails(
  name: string,
  action: string,
  target: string
) {
  switch (action) {
    case "increased_quota":
      return (
        <span className="activity-item-description">
          <b>{name}</b>&nbsp;increased&nbsp;<b>{target}</b>&apos;s quota
        </span>
      );
    case "added_leads":
      return (
        <span className="activity-item-description">
          <b>{name}</b>&nbsp;added new leads to&nbsp;<b>{target}</b>
        </span>
      );
    case "archived_team":
      return (
        <span className="activity-item-description">
          <b>{name}</b>&nbsp;archive the team&nbsp;<b>{target}</b>
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
