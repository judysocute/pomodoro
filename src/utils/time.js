export function toHHMMSS(second) {
  const date = new Date(0);
  if (second > 0) {
    date.setSeconds(second); // specify value for SECONDS here
  }
  const timeString = date.toISOString().substr(11, 8);
  return timeString;
}

export function toTimeString(second) {
  const hhMMSS = toHHMMSS(second);
  if (second < 3600) {
    return hhMMSS.substr(3, 5);
  }
  return hhMMSS;
}
