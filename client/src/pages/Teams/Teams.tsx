import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { IconTeams, IconPlus } from "../../assets/iconComponents";
import HeaderButton from "../../components/HeaderButton/HeaderButton";
import Tabs from "../../components/Tabs/Tabs";

const tabs = [
  {
    title: "All",
  },
  {
    title: "Favorites",
  },
  {
    title: "Archived",
  },
];

export default function Teams() {
  return (
    <div className="teams">
      <div className="teams-header">
        <div>
          <HeaderTitle icon={IconTeams} title={"teams"} />
          <HeaderButton icon={IconPlus} title={"create new team"} />
        </div>
        <div>
          <Tabs tabs={tabs} />
          <div className="search">search</div>
        </div>
      </div>
    </div>
  );
}
