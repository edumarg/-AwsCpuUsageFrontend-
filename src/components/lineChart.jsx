import React, { useContext } from "react";
import { CPUContext } from "../context/CPUUtilizationContext";
import { LoadingContext } from "../context/loadingContext";

const LineChart = () => {
  const [CPUUtilization] = useContext(CPUContext);
  const [loading] = useContext(LoadingContext);
  return (
    <React.Fragment>
      <h2>My Graph</h2>
    </React.Fragment>
  );
};

export default LineChart;
