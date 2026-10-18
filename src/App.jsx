import React from 'react'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import DisplayStudent from './components/DisplayStudent'
import AddStudent from './components/AddStudent'
import EditStudent from './components/EditStudent'

const App = () => {
  return (
    <>

     <BrowserRouter>

       <nav>
          <h1>Student Management System</h1>
          <ul>
            <Link to="/">students</Link>
            <Link to="/add">add student</Link>
          </ul>
       </nav>
          <Routes>
              <Route path='/' element={<DisplayStudent/>}></Route>
              <Route path='/add' element={<AddStudent/>}></Route>
              <Route path='/edit/:id' element={<EditStudent/>}></Route>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App