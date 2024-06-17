import { useState } from 'react'
import Header from './components/header/Header'
import Main from './components/game/Main'
import RulesBtn from './components/rules/RulesBtn'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Main />
      <RulesBtn />
      <Footer />
    </>
  )
}

export default App
