interface TeamCardStatProps {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  count: number;
  title: string;
}

export default function TeamCardStat({
  icon: Icon,
  count,
  title,
}: TeamCardStatProps) {
  return (
    <div className="team-card-stat">
      <Icon />
      <span>
        {count} {title}
      </span>
    </div>
  );
}
