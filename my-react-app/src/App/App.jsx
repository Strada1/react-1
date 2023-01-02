/* eslint-disable no-nested-ternary */
import React from 'react'
import useScreen from '../customsHooks.js/useScreen'

function App() {
  const { isMobile, isDesktop } = useScreen()
  return (
    <div className="App">
      {isMobile ? (
        <div>mobile or tablet</div>
      ) : isDesktop ? (
        <div>laptop or desktop</div>
      ) : (
        <div>undefined</div>
      )}
    </div>
  )
}

export default App
