import { format } from 'date-fns';

// Текущее время пользователя
export const currentTime = new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
});

export const getCurrentDate = () => format(new Date(), 'dd-MM-yyyy');
export const getCurrentMonth = () => format(new Date(), 'MM-yyyy');
