export function seeFirstWeatherSummary(){
  const $tabPanelSelected = tabPanelSelected()
  const $dayWeatherSelected = $tabPanelSelected.querySelector('.dayWeather-item.is-selected')
  let id = Number($dayWeatherSelected.id)
  const $dayWeatherSummarySelect = $tabPanelSelected.querySelector(`.dayWeather-summary[id="${id}"]`)
  $dayWeatherSummarySelect.style.display = 'grid'
}

function selectFirstDayHour($item){
  let newCount = 0
  $item.forEach((item, index)=>{
    let count = index
    if(index === 0){
      item.classList.add('is-selected') 
      seeFirstWeatherSummary()     
    } else if((count % 8) === 0){
      if(newCount === 0){
        item.classList.add('is-selected')
        newCount++    
      } 
    }
    newCount = 0
  })
  
  

}

function selectDayHourClick($item){
  $item.forEach((item, index)=>{
    item.addEventListener('click', handleSelectDayWeatherClick)
  })
}

function tabPanelSelected(){
  const $tabPanelSelected = document.querySelector('.tabPanel:not([hidden])')
  return $tabPanelSelected
}

function handleSelectDayWeatherClick(event){
  const $tabPanelSelected = tabPanelSelected()
  const $dayWeatherSelected = $tabPanelSelected.querySelector('.is-selected')
  let $dayWeather = event.path[1]
  // console.log($dayWeather.classList.item(0))
  if($dayWeather.classList.item(0) === 'dayWeather-list'){
    $dayWeather = event.path[0]
    // $dayWeather.classList.add('is-selected')
  }
  $dayWeatherSelected.classList.remove('is-selected')
  $dayWeather.classList.add('is-selected')
  
  let id = Number($dayWeather.id)
  let idSelected = Number($dayWeatherSelected.id)
  const $dayWeatherSummary = $tabPanelSelected.querySelector(`.dayWeather-summary[id="${id}"]`)
  const $dayWeatherSummarySelected = $tabPanelSelected.querySelector(`.dayWeather-summary[id="${idSelected}"]`)
  $dayWeatherSummary.style.display = 'grid'
  $dayWeatherSummarySelected.style.display = 'none'
  
}







//seleccionar un dayWeather-item
export function selectDayWeather(){
  // const $dayWeatherList = document.querySelectorAll('.dayWeather-list')
  const $dayWeatherItem = document.querySelectorAll('.dayWeather-item')
  selectFirstDayHour($dayWeatherItem)
  selectDayHourClick($dayWeatherItem) 
}
