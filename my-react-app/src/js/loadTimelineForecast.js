import { format } from "date-fns";

async function loadTimelineForecast(forecastUrl) {
    try {
      let response = await fetch(forecastUrl);
      let json = await response.json();
      const newForecast = json.list.map((item) => {
        return {
          day: format(new Date(item.dt_txt), "d"),
          month: format(new Date(item.dt_txt), "MMM"),
          time: format(new Date(item.dt_txt), "HH:mm"),
          temperature: Math.round(item.main.temp),
          feelsLike: Math.round(item.main.feels_like),
          weather: item.weather[0].main,
          icon: item.weather[0].icon,
        };
      });
  
      return newForecast;
    } catch (err) {
      alert(err);
    }
  }

  export {loadTimelineForecast}