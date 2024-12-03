
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import AddUsers from './AddUsers'
import Home from './Home'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddUsers />}></Route>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
