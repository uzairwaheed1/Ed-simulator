import React from "react";
import PropTypes from "prop-types";

const SimulationDetails = ({ patients }) => {
  return (
    <div>
      <h2>Simulation Details</h2>
      <table>
        <thead>
          <tr>
            <th>Inter-Arrival Time</th>
            <th>Arrival Time</th>
            <th>Service Time</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.interArrivalTime.toFixed(2)}</td>
              <td>{patient.arrivalTime.toFixed(2)}</td>
              <td>{patient.serviceTime.toFixed(2)}</td>
              <td>{patient.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SimulationDetails.propTypes = {
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      interArrivalTime: PropTypes.number.isRequired,
      arrivalTime: PropTypes.number.isRequired,
      serviceTime: PropTypes.number.isRequired,
      priority: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SimulationDetails;