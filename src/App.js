import './App.css'
import { CrudInputField } from './testRender/test'
import GetEployeesCompo from './components/get_method'
import GetAnEmployeeCompo from './components/get_an_employee'
import UpdateEmployeeCompo from './components/put_method'
import PostEmployeeCompo from './components/post_method'
import DeleteEmployeeCompo from './components/delete_method'
import Navbarhtml from './components/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App () {
  return (
    <div className='App'>
      <Navbarhtml/>
      <Routes>
        <Route path='/' element={<GetEployeesCompo/>}/>
        <Route path='/getAnEmployee' element={<GetAnEmployeeCompo/>}/>
        <Route path='/update' element={<UpdateEmployeeCompo/>}/>
        <Route path='/post' element={<PostEmployeeCompo/>}/>
        <Route path='/delete' element={<DeleteEmployeeCompo/>}/>
      </Routes>


    </div>
  )
}

export default App
