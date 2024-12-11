// src/components/LogDisplay.js
import React from 'react';

const LogDisplay = ({ logs }) => {
  return (
    <div>
      <h3>System Logs</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogDisplay;
