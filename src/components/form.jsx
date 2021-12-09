import React, { useState, useContext } from "react";
import { getCPUUtilization } from "./../services/CPUUtilizationService";
import { CPUContext } from "../context/CPUUtilizationContext";
import { LoadingContext } from "../context/loadingContext";
import { toast } from "react-toastify";

const Form = () => {
  const now = new Date();
  const [data, setData] = useState({
    startTime: now.toISOString(),
    period: 0,
    IP: "",
  });
  const [, setLoading] = useContext(LoadingContext);
  const [, setCPUUtilization] = useContext(CPUContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await getCPUUtilization(data);
      setCPUUtilization(response);
    } catch (exception) {
      if (exception.response)
        toast.error("There was an issue getting the information");
    }
    setLoading(false);
  };

  const handleChange = (event) => {
    const input = event.currentTarget.name;
    let value = event.currentTarget.value;
    if (input === "startTime") {
      value = new Date(Date.now() - value * 3600 * 1000);
      value = value.toISOString();
    }
    const myData = { ...data };
    myData[input] = value;
    setData(myData);
  };

  return (
    <React.Fragment>
      <h2>Please add information</h2>
      <form class="my-4" onSubmit={(event) => handleSubmit(event)}>
        <div class="row g-3 align-items-center mb-3">
          <div class="col-2 ">
            <label for="startTime" class="col-form-label">
              Time Period
            </label>
          </div>
          <div class="col-3">
            <select
              class="form-select"
              id="startTime"
              name="startTime"
              aria-label="Default select example"
              onChange={handleChange}
            >
              <option selected disabled>
                Select an option
              </option>
              <option value="1">Last Hour</option>
              <option value="5">Last Five Hours</option>
              <option value="10">Last 10 Hours</option>
              <option value="24">Last day</option>
              <option value="168">Last week</option>
            </select>
          </div>
        </div>
        <div class="row g-3 align-items-center mb-3">
          <div class="col-2">
            <label for="period" class="col-form-label">
              Sample Interval
            </label>
          </div>
          <div class="col-3">
            <input
              type="number"
              step="60"
              min="0"
              max="3600"
              id="period"
              name="period"
              class="form-control"
              aria-describedby="periodHelpInline"
              onChange={handleChange}
            />
          </div>
          <div class="col-auto">
            <span id="periodHelpInline" class="form-text">
              Must be multiple of 60 seconds
            </span>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

export default Form;
