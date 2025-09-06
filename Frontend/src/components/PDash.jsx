// This page is for: Rendering the patient Dashboard/DashboardCONTENT & structuring the layout of the dashboard LAYOUT File
import react from "react";
import Psidebar from "./Psidebar";
import PHeader from "./PHeader";
import Pcard from "./Pcard";
import Progress from "./Pprogress";
// import backProgress from '../apis/ProgressApi';

const PDash = () => {
  return (
    // PAtient Dash and LAYOUT
    <div className="pdash">
      {/* Patient sidebar  */}
      <div style={{ width: "300px" }}>
        <Psidebar />
      </div>

      {/* Patient Dashbord Layout */}
      <div
        className="dashboard-view mx-4 p-4 bg-light rounded shadow"
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px"
        }}
      >
        <PHeader />
        {/* Patient Cards - dasboard content */}
        <Pcard />
      </div>

        {/* Patient Progress bar - dasboard content */}
      <div className="progressbar mb-4">
        <h2 className="prog-title mb-4">Your Recovery Progress</h2>
        <Progress progress={60} />
      </div>
      {/* <p className="text-muted">Backend says: {msg}</p> */}
    </div>
  );
};

export default PDash;
