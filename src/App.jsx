import { useState } from 'react'
import Header from './components/header/Header'
import Main from './components/game/Main'
import RulesBtn from './components/rules/RulesBtn'

function App() {

  return (
    <>
      <Header />
      <Main />
      <RulesBtn />
    </>
  )
}

export default App
