import React, { useState } from "react";

const SimulationForm = ({ onStart }) => {
  const [arrivalRate, setArrivalRate] = useState("");
  const [serviceRate, setServiceRate] = useState("");
  const [simulationTime, setSimulationTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onStart({
      arrivalRate: parseFloat(arrivalRate),
      serviceRate: parseFloat(serviceRate),
      simulationTime: parseFloat(simulationTime),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Arrival Rate (λ):</label>
        <input
          type="number"
          value={arrivalRate}
          onChange={(e) => setArrivalRate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Service Rate (μ):</label>
        <input
          type="number"
          value={serviceRate}
          onChange={(e) => setServiceRate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Simulation Time (minutes):</label>
        <input
          type="number"
          value={simulationTime}
          onChange={(e) => setSimulationTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Start Simulation</button>
    </form>
  );
};

export default SimulationForm;
