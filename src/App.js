import React, { useState } from "react";
import SimulationForm from "./components/SimulationForm";
import SimulationDetails from "./components/SimulationDetails";
import Timer from "./components/Timer";
import "./App.css";

const App = () => {
  const [simulationData, setSimulationData] = useState(null);
  const [patients, setPatients] = useState([]);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  // Function to start the simulation
  const startSimulation = (settings) => {
    const { arrivalRate, serviceRate, simulationTime } = settings;
    setSimulationData(settings);
    setIsSimulationRunning(true);
    setCurrentTime(0);
    setPatients([]); // Reset previous patients

    let patientsList = [];
    let currentTime = 0;

    // First patient at time = 0
    let firstPatient = {
      interArrivalTime: 0,
      arrivalTime: 0,
      serviceTime: -Math.log(1.0 - Math.random()) / serviceRate,
      priority: Math.floor(Math.random() * 3) + 1,
    };
    patientsList.push(firstPatient);

    // Generate next patients within simulation time
    while (currentTime < simulationTime * 60) {
      let interArrivalTime = Math.floor(-Math.log(1.0 - Math.random()) / arrivalRate * 60); // Random but within range
      let arrivalTime = currentTime + interArrivalTime;

      if (arrivalTime >= simulationTime * 60) break; // Stop if time exceeds

      let newPatient = {
        interArrivalTime: interArrivalTime,
        arrivalTime: arrivalTime,
        serviceTime: -Math.log(1.0 - Math.random()) / serviceRate,
        priority: Math.floor(Math.random() * 3) + 1,
      };

      patientsList.push(newPatient);
      currentTime = arrivalTime; // Update time for next patient
    }

    setPatients(patientsList); // Update state
  };

  // Function to handle the end of the simulation
  const handleTimeUp = () => {
    setIsSimulationRunning(false);
  };

  return (
    <div className="app-container">
      <h1>Emergency Department Simulator</h1>
      <SimulationForm onStart={startSimulation} />
      {isSimulationRunning && (
        <Timer simulationTime={simulationData.simulationTime * 60} onTimeUp={handleTimeUp} />
      )}
      {simulationData && <SimulationDetails patients={patients} />}
    </div>
  );
};

export default App;
