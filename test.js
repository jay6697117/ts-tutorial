var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));

console.log('Days:\n', Days);
// Days:
//  {
//   '0': 'Sun',
//   '1': 'Mon',
//   '2': 'Tue',
//   '3': 'Wed',
//   '4': 'Thu',
//   '5': 'Fri',
//   '6': 'Sat',
//   Sun: 0,
//   Mon: 1,
//   Tue: 2,
//   Wed: 3,
//   Thu: 4,
//   Fri: 5,
//   Sat: 6
// }
