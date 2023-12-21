import './App.css'
import DadJokes from './04-dog-pics/DogPics'
import DarkMode from './02-dark-mode/DarkMode'
import { CrudInputField } from './testRender/test'
import GetEployeesMethod from './components/get_method'
import GetAnEmployeeMethod from './components/get_an_employee'
import UpdateEmployeeMethod from './components/put_method'
import PostEmployeeMethod from './components/post_method'
import DeleteEmployeeMethod from './components/delete_method'
import Navbarhtml from './components/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App () {
  return (
    <div className='App'>
      {/* <DadJokes /> */}
      {/* <DarkMode/> */}
      <Navbarhtml/>
      {/* <CrudInputField/> */}
      {/* <GetEployeesMethod/>
      <GetAnEmployeeMethod/>
      <UpdateEmployeeMethod/>
      <PostEmployeeMethod/>
      <DeleteEmployeeMethod/> */}
      <Routes>
        <Route path='/' element={<GetEployeesMethod/>}/>
        <Route path='/getAnEmployee' element={<GetAnEmployeeMethod/>}/>
        <Route path='/update' element={<UpdateEmployeeMethod/>}/>
        <Route path='/post' element={<PostEmployeeMethod/>}/>
        <Route path='/delete' element={<DeleteEmployeeMethod/>}/>
      </Routes>


    </div>
  )
}

export default App
