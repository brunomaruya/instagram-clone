export const getDateDiff = (date) => {
  const current = new Date();
  const past = new Date(date);

  const msMinute = 60 * 1000;
  const msHour = 60 * 60 * 1000;
  const msDay = 60 * 60 * 24 * 1000;

  const minDiff = Math.floor((current - past) / msMinute);
  const hourDiff = Math.floor((current - past) / msHour);
  const dayDiff = Math.floor((current - past) / msDay);

  if (hourDiff > 23) {
    return dayDiff + "d";
  } else if (minDiff > 59) {
    return hourDiff + "h";
  } else {
    return minDiff + "m";
  }
};

export function toDateTime(secs) {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
}
