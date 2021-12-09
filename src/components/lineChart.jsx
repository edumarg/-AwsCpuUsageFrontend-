import React, { useContext } from "react";
import { CPUContext } from "../context/CPUUtilizationContext";
import { LoadingContext } from "../context/loadingContext";

const LineChart = () => {
  const [CPUUtilization] = useContext(CPUContext);
  const [loading] = useContext(LoadingContext);
  return (
    <React.Fragment>
      <h2>My Graph</h2>
      {loading ? (
        <div>
          <div
            className="spinner-border"
            style={{ width: "5rem", height: "5rem", margin: "100px auto" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <h3>Here goes the graph</h3>
      )}
    </React.Fragment>
  );
};

export default LineChart;
