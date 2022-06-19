import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </React.StrictMode>
);
