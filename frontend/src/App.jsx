import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import AddBlog from './components/AddBlog'
import About from './pages/About'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/addblog" element={<AddBlog/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
