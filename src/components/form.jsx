import React, { useState, useContext } from "react";
import { getCPUUtilization } from "./../services/CPUUtilizationService";
import { CPUContext } from "../context/CPUUtilizationContext";
import { LoadingContext } from "../context/loadingContext";
import { toast } from "react-toastify";

const Form = () => {
  const now = new Date();
  const [data, setData] = useState({
    startTime: new Date(now - 3600000).toISOString(),
    period: 60,
    IP: "",
  });
  const [timePeriod, setTimePeriod] = useState(60);
  const [, setLoading] = useContext(LoadingContext);
  const [, setCPUUtilization] = useContext(CPUContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await getCPUUtilization(data);
      setCPUUtilization(response.data);
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
      setTimePeriod(value);
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
              <option value="1" selected>
                Last Hour
              </option>
              <option value="5">Last Five Hours</option>
              <option value="10">Last 10 Hours</option>
              <option value="24">Last day</option>
              <option value="72">Last 3 days</option>
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
              defaultValue={timePeriod < "72" ? 60 : 300}
              step={timePeriod < "72" ? 60 : 300}
              min={timePeriod < "72" ? 60 : 300}
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
              {`Must be multiple of ${timePeriod < "72" ? 60 : 300} seconds`}
            </span>
          </div>
        </div>
        <div class="row g-3 align-items-center mb-3">
          <div class="col-2">
            <label for="instanceID" class="col-form-label">
              Instance ID
            </label>
          </div>
          <div class="col-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">
                i-
              </span>
              <input
                type="text"
                id="instanceID"
                name="instanceID"
                class="form-control"
                aria-describedby="periodHelpInline"
                onChange={handleChange}
              />
            </div>
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
