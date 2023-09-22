import './App.css'
import { CssBaseline } from '@mui/material'
import TodoApp from './TodoApp'
import Navbar from './Navbar'
function App() {


  return (
    <>
      <CssBaseline />
      <Navbar />
      <div className="app">
        <TodoApp />
      </div >
    </>
  )
}

export default App
