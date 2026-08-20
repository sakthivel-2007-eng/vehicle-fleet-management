import { Routes, Route } from "react-router-dom";
import { Sidebar, Topbar, useSidebarState } from "./components/Sidebar";
import { LoadingState } from "./components/State";

function PagePlaceholder({ title }: { title: string }) {
  return (
    <div className="page-body">
      <div className="card">
        <div className="card-body">
          <LoadingState label={`${title} page is loading...`} />
        </div>
      </div>
    </div>
  );
}

export function App() {
  const { open, setOpen, close } = useSidebarState();

  return (
    <div className="app-shell">
      <Sidebar open={open} onNavigate={close} />
      <div className="main-content">
        <Topbar
          title="FleetHub"
          subtitle="Fleet Management Platform"
          onMenuClick={() => setOpen(!open)}
        />
        <Routes>
          <Route path="/" element={<PagePlaceholder title="Dashboard" />} />
          <Route path="/vehicles" element={<PagePlaceholder title="Vehicles" />} />
          <Route path="/drivers" element={<PagePlaceholder title="Drivers" />} />
          <Route path="/fuel" element={<PagePlaceholder title="Fuel" />} />
          <Route path="/maintenance" element={<PagePlaceholder title="Maintenance" />} />
          <Route path="/predictive" element={<PagePlaceholder title="Predictive Maintenance" />} />
        </Routes>
      </div>
    </div>
  );
}
