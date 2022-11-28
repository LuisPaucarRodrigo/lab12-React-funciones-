import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import PosPos from './modulos/pos/pages/PosPos'

function App() {
  const [count, setCount] = useState(0)

  return (
		<PosPos/>
	);

}

export default App
