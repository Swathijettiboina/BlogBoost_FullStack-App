import { useState } from 'react'
import AddBlog from './components/AddBlog'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to the FS project</h1>
    <AddBlog/>
    </>
  )
}

export default App
