export const CalcTime = (match_start) => {
    var result = '';
    // For Getting Current time details
    var current_values = new Date();
    var start_date = Number(match_start?.substring(8, 10));
    var start_month = Number(match_start?.substring(5, 7));
    var start_hour = Number(match_start?.substring(11, 13));
    var start_minute = Number(match_start?.substring(14, 16));
    // Setting the api date in the standard format
    var strt_dt = new Date(
      Number(match_start?.substring(0, 4)),
      start_month - 1,
      start_date,
      start_hour,
      start_minute,
      0,
      0
    );
    // Calculating Time diff
    var diff = strt_dt - current_values;
    if (diff > 0) {
      // Calculating specific time diffs
      var DD = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= DD * (1000 * 60 * 60 * 24);
      var HH = Math.floor(diff / (1000 * 60 * 60));
      diff -= HH * (1000 * 60 * 60);
      var MM = Math.floor(diff / (1000 * 60));
      // checking whether match is beyond a day
      if (DD > 0) {
        result += DD;
        result = result + 'D : ' + HH + 'H : ' + MM + 'M';
      } else {
        result += HH + 'H : ' + MM + 'M';
      }
    } else {
      result = 'ZZZ';
    }
    return result;
  };
  