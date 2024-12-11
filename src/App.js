// src/App.js
import React, { useState } from 'react';
import ConfigurationForm from './components/ConfigurationForm';
import TicketDisplay from './components/TicketDisplay';
import ControlPanel from './components/ControlPanel';
import LogDisplay from './components/LogDisplay';
import { configureSystem } from './api';

function App() {
  const [logs, setLogs] = useState([]);
  
  const handleConfigurationSubmit = (config) => {
    configureSystem(config)
      .then((response) => {
        setLogs([...logs, `System configured with ${JSON.stringify(config)}`]);
      })
      .catch((error) => {
        setLogs([...logs, 'Error configuring the system.']);
      });
  };

  return (
    <div className="App">
      <h1>Ticketing System</h1>
      <ConfigurationForm onSubmit={handleConfigurationSubmit} />
      <TicketDisplay />
      <ControlPanel />
      <LogDisplay logs={logs} />
    </div>
  );
}

export default App;
