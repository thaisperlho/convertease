import React from 'react'
import GlobalStyle from './styles/global'
import { Header } from './components/Header'
import { Resultado } from './components/Resultado'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Resultado/>
    <Footer/>
    <GlobalStyle />
    </>
    
  )
}

export default App