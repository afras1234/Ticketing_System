// src/components/ConfigurationForm.js
import React, { useState } from 'react';

const ConfigurationForm = ({ onSubmit }) => {
  const [config, setConfig] = useState({
    totalTickets: '',
    ticketReleaseRate: '',
    customerRetrievalRate: '',
    maxTicketCapacity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({
      ...config,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(config);
  };

  return (
    <div>
      <h3>System Initialization and Configuration</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="totalTickets"
          value={config.totalTickets}
          onChange={handleChange}
          placeholder="Total Tickets"
          required
        />
        <input
          type="number"
          name="ticketReleaseRate"
          value={config.ticketReleaseRate}
          onChange={handleChange}
          placeholder="Ticket Release Rate"
          required
        />
        <input
          type="number"
          name="customerRetrievalRate"
          value={config.customerRetrievalRate}
          onChange={handleChange}
          placeholder="Customer Retrieval Rate"
          required
        />
        <input
          type="number"
          name="maxTicketCapacity"
          value={config.maxTicketCapacity}
          onChange={handleChange}
          placeholder="Max Ticket Capacity"
          required
        />
        <button type="submit">Configure System</button>
      </form>
    </div>
  );
};

export default ConfigurationForm;
