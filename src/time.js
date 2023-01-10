import { format } from 'date-fns';

function formatTime(time) {
  const formattedTime = format(new Date(time * 1000), 'HH:mm');
  return formattedTime;
}

function formatDate(time) {
  const date = format(new Date(time * 1000), 'd MMMM');
  return date;
}

export { formatTime, formatDate };
