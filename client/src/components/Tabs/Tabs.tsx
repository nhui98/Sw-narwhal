interface TabsProps {
  tabs: {
    title: string;
  }[];
}

export default function Tabs({ tabs }: TabsProps) {
  return (
    <div className="tabs">
      {tabs.length > 0 &&
        tabs.map((tab) => (
          <div key={tab.title} className="tab active">
            <span>{tab.title}</span>
          </div>
        ))}
    </div>
  );
}
