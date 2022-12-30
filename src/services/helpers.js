export function getImageLink(imageNumber) {
  const SERVER_URL = 'http://openweathermap.org/img/wn/';
  const IMAGE_FORMAT = '@2x.png';
  return `${SERVER_URL}${imageNumber}${IMAGE_FORMAT}`;
}

export function getConvertTime(time) {
  const convertTime = new Date(time * 1000);
  const hours = convertTime.getHours();
  let minutes = convertTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

export function getConvertDate(time) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const convertTime = new Date(time * 1000);
  const date = convertTime.getDate();
  const month = months[convertTime.getMonth()];
  return `${date} ${month}`;
}
