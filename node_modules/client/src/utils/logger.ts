import axios from 'axios';
import config from '../config';

export const logAction = async (action: string, data: any) => {
  console.log(`[ACTION] ${action}:`, data);
  
  try {
    await axios.post(`${config.apiUrl}/log`, { action, data });
  } catch (error) {
    console.error('Failed to send log to server:', error);
  }
}; 