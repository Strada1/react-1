import { format } from 'date-fns';

export function convertTime(value) {
  return format(value * 1000, 'kk:mm');
}
