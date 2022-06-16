interface HeaderButtonProps {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

export default function HeaderButton({ icon: Icon, title }: HeaderButtonProps) {
  return (
    <button className="header-button">
      <Icon />
      <span>{title}</span>
    </button>
  );
}
