import { useState } from "react";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import { IconTeams, IconPlus, IconSearch } from "../../assets/iconComponents";
import HeaderButton from "../../components/HeaderButton/HeaderButton";
import Tabs from "../../components/Tabs/Tabs";
import SearchInput from "../../components/SearchInput/SearchInput";

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
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="teams">
      <div className="teams-header">
        <div>
          <HeaderTitle icon={IconTeams} title={"teams"} />
          <HeaderButton icon={IconPlus} title={"create new team"} />
        </div>
        <div>
          <Tabs tabs={tabs} />
          <SearchInput
            icon={IconSearch}
            name="search"
            placeholder="Search team name"
            onChange={handleSearchChange}
            value={searchValue}
            type="text"
          />
        </div>
      </div>
      <div className="teams-body">
        <div className="teams-main">main</div>
        <div className="teams-activity">activity</div>
      </div>
    </div>
  );
}
