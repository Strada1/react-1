import { DATE_FORMATE } from '../constans/constans';

export function detailsGetTime(time) {
  let timeInMs = time * 1000;
  let timeInHours =
    new Date(timeInMs).getHours() < 10
      ? '0' + new Date(timeInMs).getHours()
      : new Date(timeInMs).getHours();
  let timeInMinutes =
    new Date(timeInMs).getMinutes() < 10
      ? '0' + new Date(timeInMs).getMinutes()
      : new Date(timeInMs).getMinutes();
  let result = `${timeInHours}:${timeInMinutes}`;
  return result;
}

export function getCurrentDay(timestamp) {
  const currentDayRaw = new Date(timestamp);
  const currentDay = currentDayRaw.toLocaleString('en', DATE_FORMATE);
  return currentDay;
}
