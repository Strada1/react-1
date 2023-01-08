import { format } from 'date-fns';

export function  formatTime(time) {
    return format(new Date(time * 1000), 'HH:mm');
}

export function formatDate(data) {
    return format(new Date(data * 1000), 'd MMMM');
}