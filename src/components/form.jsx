import React, { useState, useContext } from "react";
import { getCPUUtilization } from "./../services/CPUUtilizationService";
import { CPUContext } from "../context/CPUUtilizationContext";
import { LoadingContext } from "../context/loadingContext";

const Form = () => {
  const [data, setData] = useState({
    startTime: new Date(Date.now()),
    period: 0,
    IP: "",
  });
  const [, setLoading] = useContext(LoadingContext);
  const [, setCPUUtilization] = useContext(CPUContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("form submitted");
    setLoading(true);
    try {
      await getCPUUtilization(data);
      this.props.history.replace("/movies");
    } catch (exception) {}
    setLoading(false);
  };

  const handleChange = (event) => {
    console.log("handle Change");
    const input = event.currentTarget;
    const value = event.currentTarget.value;
    console.log(input, value);
    console.log(input);
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
              onChange={(event) => handleChange(event)}
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
              id="period"
              name="period"
              class="form-control"
              aria-describedby="periodHelpInline"
              onChange={(event) => handleChange(event)}
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
