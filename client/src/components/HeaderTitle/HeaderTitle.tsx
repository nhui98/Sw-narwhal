interface HeaderTitleProps {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

export default function HeaderTitle({ icon: Icon, title }: HeaderTitleProps) {
  return (
    <div className="header-title">
      <Icon color="#a4a6a8" />
      <h1>{title}</h1>
    </div>
  );
}
