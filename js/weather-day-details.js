import { createDOM } from './utils/dom.js'
import { formatTemp, formatHumidiy, formatSpeed, formatTempMaxMin }  from './utils/format-data.js'

function weatherDayDetailsTemplete({max, min, speed, humidity}, indexHour){
 return `
  <div class="dayWeather-summary" id=${indexHour} style="display: none;">
    <p>Máx:<span> ${max}</span></p>
    <p>Mín:<span> ${min}</span></p>
    <p>Viento:<span> ${speed}</span></p>
    <p>Humedad:<span> ${humidity}</span></p>
  </div>
 `
}

export function createWeatherDayDetails( weather, indexHour ){
  const max = formatTempMaxMin(weather.main.temp_max)
  const min = formatTempMaxMin(weather.main.temp_min)
  const speed =  formatSpeed(weather.wind.speed)
  const humidity = formatHumidiy(weather.main.humidity)
  const data = {max, min, speed, humidity,}
  return createDOM(weatherDayDetailsTemplete(data, indexHour))
}