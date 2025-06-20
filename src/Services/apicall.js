import axios from 'axios';

const API = axios.create({
  baseURL: 'https://localhost:7170/api', // Update this if backend URL changes
});

// Example API calls

export const GetTransactions = (filter) =>
  API.post('/Report/ReportPayments', filter);

export const fetchCardBalances = (page = 1, size = 10) =>
  API.get(`/reports/cards?page=${page}&size=${size}`);
