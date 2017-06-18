var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('current timestamp' +  now.unix());

var timestamp = 1497770763;

var currentmoment = moment.unix(timestamp);

console.log(currentmoment.format());