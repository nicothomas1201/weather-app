import currentWeather from './current-weather.js'
import  weeklyWeather  from './weekly-weather.js'
import { viewportSize } from './utils/viewport.js'
import './tabs.js'

const $app = document.querySelector('#app')
const $loader = document.querySelector('#loading')
viewportSize($app)
viewportSize($loader)
weeklyWeather()
currentWeather();