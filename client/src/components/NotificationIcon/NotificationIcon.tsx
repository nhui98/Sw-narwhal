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
      <div className="notification-icon">
        <Icon />
      </div>
      <div className="notification-count">{count}</div>
    </div>
  );
}
