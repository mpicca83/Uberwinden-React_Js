import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from "./components/Navbar/NavBar"

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting="Überwinden - Ropa deportiva"/> 
      </main>
    </>
  )
}

export default App
