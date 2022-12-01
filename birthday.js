// November 25

// const date = Date.UTC(2021, 11, 17, 3, 0, 42);
const date = 0;

// Do something with currentValue
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Chicago',
  timeZoneName: "longOffset",
});
return(`${formatter.format(date)}`);

// Logs:
// short: 12/16/2021, PST
// long: 12/16/2021, Pacific Standard Time
// shortOffset: 12/16/2021, GMT-8
// longOffset: 12/16/2021, GMT-08:00
// shortGeneric: 12/16/2021, PT
// longGeneric: 12/16/2021, Pacific Time
