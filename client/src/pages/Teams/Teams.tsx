import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { IconTeams } from "../../assets/iconComponents";

export default function Teams() {
  return (
    <div className="teams">
      <div className="teams-header">
        <div>
          <HeaderTitle icon={IconTeams} title={"Teams"} />
          <div className="header-button">button</div>
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
