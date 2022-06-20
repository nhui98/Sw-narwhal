import { Routes, Route } from "react-router-dom";
import LayoutComponent from "./components/Layout/LayoutComponent";
import Home from "./pages/Home/Home";
import Campaign from "./pages/Campaign/Campaign";
import Teams from "./pages/Teams/Teams";
import Leads from "./pages/Leads/Leads";
import Reports from "./pages/Reports/Reports";
import Help from "./pages/Help/Help";
import NotFound from "./pages/NotFound/NotFound";
import TeamsList from "./components/TeamsList/TeamsList";
import { data } from "./data/data";

// import { useQuery } from "react-query";

// const getTeamsData = async () => {
//   const res = await fetch(
//     "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/807ba601-b71c-4a02-8d9f-44700a20791e/data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220620T154756Z&X-Amz-Expires=86400&X-Amz-Signature=5c9be067c871607b0bc8d23b9ff6da61e9bf2204ecb8f7526545c86a4a638973&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22data.json%22&x-id=GetObject"
//   );

//   return await res.json();
// };

export default function App() {
  // const { data, status, isFetching } = useQuery("teamsData", getTeamsData);

  return (
    <Routes>
      <Route path="/" element={<LayoutComponent />}>
        <Route index element={<Home />} />
        <Route path="campaign" element={<Campaign />} />
        <Route path="teams" element={<Teams />}>
          <Route
            index
            element={<TeamsList teams={data.teams} title="all teams" />}
          />
          <Route
            path="favourites"
            element={
              <TeamsList
                teams={data.teams.filter((team) => team.is_favorited)}
                title="all teams"
              />
            }
          />
          <Route
            path="archived"
            element={
              <TeamsList
                teams={data.teams.filter((team) => team.is_archived)}
                title="all teams"
              />
            }
          />
        </Route>
        <Route path="leads" element={<Leads />} />
        <Route path="reports" element={<Reports />} />
        <Route path="help" element={<Help />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
