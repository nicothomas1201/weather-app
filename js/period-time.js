import { createDOM } from "./utils/dom.js"
import { formatDate, formatTemp } from './utils/format-data.js'

function periodTimeTemplate({temp, date, icon, description}, index){
  return `
  <li class="dayWeather-item " id=${index} style="cursor: pointer">
    <span class="dayWeather-time" tab-index="-1">${date}</span>
    <img class="dayWeather-icon" tab-index="-1" height="48" width="48" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt=${description} rain="">
    <span class="dayWeather-temp" tab-index="-1">${temp}</span>
  </li>

  `
} 

export function createPeriodTime(weather, index){
  //temp
  //icon
  //date
  //decription
  const dateOptions = {
    hour: 'numeric',
    hour12: true,
  }
  const temp = formatTemp(weather.main.temp)
  const date = formatDate(new Date(weather.dt * 1000), dateOptions)
  const config = {
    temp,
    date,
    icon: weather.weather[0].icon,
    description: weather.weather[0].description,
  }

  // elementSelected(indexWeather, config)
  return createDOM(periodTimeTemplate(config, index))
}



