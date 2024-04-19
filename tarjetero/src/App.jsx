
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Starting } from './pages/beginning'
import { NotFound } from './pages/notFound'
import { Welcome } from './pages/welcome'
import { Task } from './pages/task'





function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/startPage' element= {<Starting/>}></Route>
        <Route path='/edit/:id' element= {<Task/>}></Route>
        <Route path='/' element= {<Welcome/>}></Route>
        <Route path='*' element= {< NotFound/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
