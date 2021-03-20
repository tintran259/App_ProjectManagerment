import moment from 'moment-timezone';

export const DATA_STATUS = {
  NONE: 'none',
  SUCCESS: 'success',
  FAILED: 'failed',
};

export const DATA_STORAGE = {
  USER: '',
};

export const GOOGLE_CONFIGS = {
  WEB_CLIENT_ID:
    '34506357281-vb9n85u5tmn8l49q4q64dpn9vjpdsq8t.apps.googleusercontent.com',
};

export const URL = 'https://uat.xboss.com/';

export const getDateByTimeZoneMin = (date, timeZone) => {
  if (!timeZone) timeZone = 'Asia/Ho_Chi_Minh';
  var hours = parseInt(moment().tz(timeZone).format('Z'));
  date = moment(date, 'YYYY-MM-DD HH:mm:ss')
    .add(hours, 'hours')
    .format('DD-MM-YYYY HH:mm')
    .toString();
  return date;
};

export const getDateByTimeZoneDay = (date, timeZone) => {
  if (!timeZone) timeZone = 'Asia/Ho_Chi_Minh';
  var hours = parseInt(moment().tz(timeZone).format('Z'));
  date = moment(date, 'YYYY-MM-DD HH:mm:ss')
    .add(hours, 'hours')
    .format('DD-MM-YYYY')
    .toString();
  return date;
};

export const getDateByTimeZone = (date, timeZone) => {
  var hours = parseInt(moment().tz(timeZone).format('Z'));
  date = moment(date, 'YYYY-MM-DD HH:mm:ss')
    .add(hours, 'hours')
    .format('YYYY-MM-DD HH:mm:ss')
    .toString();
  return date;
};

export const getDateCovertUTC = (date, timeZone) => {
  var hours = parseInt(moment().tz(timeZone).format('Z'));
  date = moment(date, 'YYYY-MM-DD HH:mm:ss')
    .subtract(hours, 'hours')
    .format('YYYY-MM-DD HH:mm:ss')
    .toString();
  return date;
};
