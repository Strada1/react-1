import { useState } from 'react'

function useScreen() {
  const [width, setWidth] = useState(document.documentElement.clientWidth)

  const handlerChangeWidth = () => {
    setWidth(document.documentElement.clientWidth)
  }
  window.addEventListener('resize', handlerChangeWidth)

  return { isMobile: width <= 768, isDesktop: width > 768 }
}

export default useScreen
