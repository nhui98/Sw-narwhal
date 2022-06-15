import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutComponent from "./components/Layout/LayoutComponent";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const HomePlaceholder = () => <div>HomePlaceholder</div>;
const CampaignPlaceholder = () => <div>CampaignPlaceholder</div>;
const TeamsPlaceholder = () => <div>TeamsPlaceholder</div>;
const LeadsPlaceholder = () => <div>LeadsPlaceholder</div>;
const ReportsPlaceholder = () => <div>ReportsPlaceholder</div>;
const HelpPlaceholder = () => <div>HelpPlaceholder</div>;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<HomePlaceholder />} />
          <Route path="/campaign" element={<CampaignPlaceholder />} />
          <Route path="/teams" element={<TeamsPlaceholder />} />
          <Route path="/leads" element={<LeadsPlaceholder />} />
          <Route path="/reports" element={<ReportsPlaceholder />} />
          <Route path="/help" element={<HelpPlaceholder />} />
        </Route>
        <Route path="/*" element={<LayoutComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
