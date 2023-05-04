import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TestMixin from "jsonplaceholder-mixin";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h3>Data: {TestMixin.data.idUser}</h3>
        <h3>Computed cannot be read because they use the data and cannot be reach by the this statement</h3>
        {TestMixin.methods.getPosts()}
      </div>
    </>
  )
}

export default App
