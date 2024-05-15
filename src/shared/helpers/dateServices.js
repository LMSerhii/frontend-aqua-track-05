// Текущее время пользователя
export const currentTime = new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
});

export const getCurrentDate = () =>
  new Date().toLocaleDateString().split('.').join('-');
