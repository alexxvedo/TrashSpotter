import { useState } from 'react'
import Topbar from './components/Topbar'
import Main from './components/Main'
import Mapa from './assets/capturaMapa.png'
import { motion } from 'framer-motion'

import './App.css'

function App() {


  return (
    <div className="App">
      <Topbar />
      <Main />
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        whileTap={{ scale: 0.9 }}
        className="app-mapa">
        <img src={Mapa} />
      </motion.div>

    </div >
  )
}

export default App
