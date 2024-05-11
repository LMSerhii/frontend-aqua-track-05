// Текущее время пользователя
export const currentTime = new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
});

export const getCurrentDate = () =>
  new Date().toLocaleDateString().split('.').join('-');

export const data = {
  date: '1-05-2024',
  amount: parseInt('200'),
  time: '7:00',
};
