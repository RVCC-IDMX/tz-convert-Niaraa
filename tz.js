const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

if (process.argv.length !== 3) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
} else {
  const targetTimezone = 'Europe/Paris';
}
console.log(`The time at the${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
