// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';  // Your backend URL

export const configureSystem = (config) => {
  return axios.post(`${API_BASE_URL}/config`, null, { params: config });
};

export const getTicketAvailability = () => {
  return axios.get(`${API_BASE_URL}/tickets/available`);
};

export const startSystem = () => {
  return axios.post(`${API_BASE_URL}/system/start`);
};

export const stopSystem = () => {
  return axios.post(`${API_BASE_URL}/system/stop`);
};
