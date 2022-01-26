const defaultConfig = {
  open: true,
  debug: true,
  animatable: true,
}

export default function draggble($elment, config = defaultConfig){
  if(!($elment instanceof HTMLElement)){
    return console.warn(`Elemento invalido se esperaba un HTMLElement y se recibio un ${$elment}`)
  }
  let isOpen = config.open
  let isDragging = false
  const elementRect = $elment.getBoundingClientRect()
  const ELEMENT_BLOCK_SIZE = elementRect.height
  const $marker = $elment.querySelector('[data-marker]')
  const MARKER_BLOCK_SIZE = $marker.getBoundingClientRect().height

  const VISIBLE_Y_POSITION = 0
  const HIDDEN_Y_POSITION = (ELEMENT_BLOCK_SIZE) - MARKER_BLOCK_SIZE
  let widgetPosition = VISIBLE_Y_POSITION
  isOpen ? open() : close()
  let startY = 0

  $marker.addEventListener('click', handleClick)
  $marker.addEventListener('pointerdown', handlePointerDown)
  $marker.addEventListener('pointerup', handlePointerUp)
  $marker.addEventListener('pointerout', handlePointerOut)
  $marker.addEventListener('pointercancel', handlePointerCancel)
  $marker.addEventListener('pointermove', handlePointerMove)

  if(config.animatable){
    setAnimations()
  }
  function handlePointerUp(){
    // logger('pointer UP')
    dragEnd()
  }
  
  function handlePointerOut(){
    // logger('pointer OUT')
    dragEnd()
  }
  
  function handlePointerCancel(){
    // logger('pointer CANCEL')
    dragEnd()
  }
  
  function handlePointerDown(event){
    // logger('pointer DOWN')
    startDrag(event)
  }

  function handleClick(event){
    // logger('click')
    toggle(event)
  }
  
  function handlePointerMove(event){
    // logger('pointer MOVE')
    drag(event)
  }

  function pageY(event){
    return event.pageY || event.touches[0].pageY
  }

  function startDrag(event){
    isDragging = true
    startY = pageY(event)
  }

  function setAnimations(){
    $elment.style.transition = 'margin-bottom .3s'
  }

  function bounce(){
    if(widgetPosition < ELEMENT_BLOCK_SIZE / 2){
      return open()
    }
    return close()
  }

  function dragEnd(){
    // logger('DRAG END')
    isDragging = false
    bounce()
  }
  
  function toggle(event){
    if (!isDragging){
      if(!isOpen){
        return open()
      }
      return close()
    }
  }
  
  function logger(message){
    if(config.debug){
      console.info(message)
    }
  }

  function open(){
    // logger('Abrir Widget')
    isOpen = true
    widgetPosition = VISIBLE_Y_POSITION
    setWidgetPosition(widgetPosition)
  }

  function close(){
    // logger('Cerrar Widget')
    isOpen = false
    widgetPosition = HIDDEN_Y_POSITION 
    setWidgetPosition(widgetPosition)
  }

  function setWidgetPosition(value){
    $elment.style.marginBlockEnd = `-${value}px`
  }

  function drag(event){
    const cursorY = pageY(event)
    const movementY = cursorY - startY
    widgetPosition = widgetPosition + movementY 
    startY = cursorY
    if(widgetPosition > HIDDEN_Y_POSITION){
      return false
    }
    setWidgetPosition(widgetPosition)
  }
}