import React, { useEffect, useState } from 'react';

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    if (isRunning) {
      const newIntervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increase the time by 1
      }, 10);

      setIntervalId(newIntervalId);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, intervalId]);

  const handleStartStopEvent = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const recordFlag = () => {
    if (isRunning) {
      // Convert time to a readable format
      const formattedTime = formatTime(time);
      setFlags((prevFlags) => [...prevFlags, formattedTime]);
    }
  };

  const resetTimer = () => {
    setTime(0);
    setFlags([]);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const milliseconds = String(time % 100).padStart(2, '0');
    const seconds = String(Math.floor((time / 100) % 60)).padStart(2, '0');
    const minutes = String(Math.floor((time / 6000) % 60)).padStart(2, '0');
    const hours = String(Math.floor(time / 360000)).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl mb-4">{formatTime(time)}</h1>
        <button
          onClick={handleStartStopEvent}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={recordFlag}
          className="bg-green-500 hover.bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Flag
        </button>
        <button
          onClick={resetTimer}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Reset Timer
        </button>
        <ul className="mt-4">
          {flags.map((value, id) => (
            <li key={id}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
