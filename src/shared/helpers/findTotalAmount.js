export const findTotalAmount = (data) => {
  const totalDays = data.length;
  const lastSevenDays = Math.min(7, totalDays);

  let totals = {
    dayOne: 0,
    dayTwo: 0,
    dayThree: 0,
    dayFour: 0,
    dayFive: 0,
    daySix: 0,
    daySeven: 0,
  };

  for (let i = totalDays - lastSevenDays, j = 0; i < totalDays; i++, j++) {
    let dailyTotal = data[i].amounts.reduce((sum, entry) => sum + entry.amount, 0);
    switch (j) {
      case 0:
        totals.dayOne = dailyTotal;
        break;
      case 1:
        totals.dayTwo = dailyTotal;
        break;
      case 2:
        totals.dayThree = dailyTotal;
        break;
      case 3:
        totals.dayFour = dailyTotal;
        break;
      case 4:
        totals.dayFive = dailyTotal;
        break;
      case 5:
        totals.daySix = dailyTotal;
        break;
      case 6:
        totals.daySeven = dailyTotal;
        break;
    }
  }

  return totals;
};
