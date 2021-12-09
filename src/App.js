import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CPUContextProvider } from "./context/CPUUtilizationContext";
import { LoadingContextProvider } from "./context/loadingContext";
import Form from "./components/form";
import LineChart from "./components/lineChart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <LoadingContextProvider>
        <CPUContextProvider>
          <h1>AWS Instance CPU Utilization</h1>
          <Form />
          <LineChart />
        </CPUContextProvider>
      </LoadingContextProvider>
    </div>
  );
}

export default App;
