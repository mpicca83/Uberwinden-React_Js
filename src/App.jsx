import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { CartContext } from './context/CartContext'
import { Navigations } from './routes/Navigations'

function App() {

  return (
    <CartContext>
      <Navigations />
    </CartContext>
  )
}

export default App

