type Parts = (string | false | undefined)[];
const ALLDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const buildClassName = (...parts: Parts) => {
  return parts.filter(Boolean).join(' ');
};

export const getDayOfWeek = (date: string) => {
  if (!date && typeof date !== 'string') return undefined;

  const d = new Date(date);
  return ALLDAY[d.getDay()];
};
