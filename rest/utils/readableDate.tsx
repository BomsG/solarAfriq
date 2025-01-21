import dayjs from 'dayjs';

export default function readableDate(val: Date) {
  return dayjs(val).format('DD, MMM YYYY');
}
