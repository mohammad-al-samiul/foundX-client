interface IPickDateProps {
  calender: { identifier: string };
  day: number;
  era: string;
  month: number;
  year: number;
}

const dateToIso = (date: IPickDateProps) => {
  return new Date(`${date.month}-${date.day}-${date.year}`).toISOString();
};

export default dateToIso;
