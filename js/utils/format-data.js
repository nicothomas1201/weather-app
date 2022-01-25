const defaultDateOptions = {
  day: 'numeric',
  weekday: 'long',
  month: 'long',
}

export function formatDate (date, options = defaultDateOptions){
  return new Intl.DateTimeFormat('es', options).format(date)
}

export function formatTemp (value){
  return `${Math.floor(value)}°`
}

export function formatTempMaxMin(value){
  return `${value}°`
}

export function formatSpeed(value){
  return `${value} Km-h`
}

export function formatHumidiy(value){
  return `${value}%`
}

export function formatWeekList(rawData){
  let dayList = []
  const weekList = []
  rawData.forEach((item, index) =>{
    dayList.push(item)
    if((index + 1) % 8 === 0){
      weekList.push(dayList)
      dayList = []
    }
  })
  return weekList
}