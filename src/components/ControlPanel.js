// src/components/ControlPanel.js
import React from 'react';
import { startSystem, stopSystem } from '../api';

const ControlPanel = () => {
  const handleStart = async () => {
    try {
      await startSystem();
      alert('System started.');
    } catch (error) {
      alert('Error starting the system.');
    }
  };

  const handleStop = async () => {
    try {
      await stopSystem();
      alert('System stopped.');
    } catch (error) {
      alert('Error stopping the system.');
    }
  };

  return (
    <div>
      <button onClick={handleStart}>Start System</button>
      <button onClick={handleStop}>Stop System</button>
    </div>
  );
};

export default ControlPanel;
