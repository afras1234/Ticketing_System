// src/components/TicketDisplay.js
import React, { useEffect, useState } from 'react';
import { getTicketAvailability } from '../api';

const TicketDisplay = () => {
  const [availableTickets, setAvailableTickets] = useState(0);

  useEffect(() => {
    const fetchTicketAvailability = async () => {
      try {
        const response = await getTicketAvailability();
        setAvailableTickets(response.data);
      } catch (error) {
        setAvailableTickets(0);
      }
    };
    fetchTicketAvailability();
  }, []);

  return (
    <div>
      <h3>Current Ticket Availability</h3>
      <p>{availableTickets} tickets remaining</p>
    </div>
  );
};

export default TicketDisplay;
