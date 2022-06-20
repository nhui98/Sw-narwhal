interface NotificationIconProps {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  count: number;
}

export default function NotificationIcon({
  icon: Icon,
  count,
}: NotificationIconProps) {
  return (
    <div className="menu-notification">
      <Icon className="notification-icon" />
      <div className="notification-count">{count}</div>
    </div>
  );
}
