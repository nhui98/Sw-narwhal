import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { IconTeams, IconPlus } from "../../assets/iconComponents";
import HeaderButton from "../../components/HeaderButton/HeaderButton";

export default function Teams() {
  return (
    <div className="teams">
      <div className="teams-header">
        <div>
          <HeaderTitle icon={IconTeams} title={"teams"} />
          <HeaderButton icon={IconPlus} title={"create new team"} />
        </div>
        <div>
          <div className="tabs">
            <div className="tab">tab1</div>
            <div className="tab">tab2</div>
            <div className="tab">tab3</div>
          </div>
          <div className="search">search</div>
        </div>
      </div>
    </div>
  );
}
