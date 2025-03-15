import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Timer = ({ simulationTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(simulationTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimeUp]);

  return (
    <div>
      <h2>Time Left: {timeLeft} seconds</h2>
    </div>
  );
};

Timer.propTypes = {
  simulationTime: PropTypes.number.isRequired,
  onTimeUp: PropTypes.func.isRequired,
};

export default Timer;