import { format } from "date-fns";

function processingTime(dayTime, currentTimeZone) {
    let localDate =
      dayTime * 1000 +
      new Date(dayTime * 1000).getTimezoneOffset() * 60000 +
      currentTimeZone * 1000;
      const localTime = format(new Date(localDate), "HH:mm");
    return localTime;
  }

  export {processingTime}