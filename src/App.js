import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import './App.css'
import Banner from './Components/Navbar/Banner/Banner'
import RowPost from './Components/Navbar/RowPost/RowPost'
import { actions, comdey, documentaries, horror, orginals, romance } from './urls'
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={actions} title='Action' isSmall/>
      <RowPost url={comdey} title='Comdey' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  )
}

export default App
