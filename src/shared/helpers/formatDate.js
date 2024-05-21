import { format, parse } from 'date-fns';

export const formatDate = date => {
  const parsedDate = parse(date, 'dd-MM-yyyy', new Date());
  const formattedDate = format(parsedDate, 'd, MMMM');

  return { parsedDate, formattedDate };
};
