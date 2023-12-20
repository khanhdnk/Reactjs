import './App.css'
import DadJokes from './04-dog-pics/DogPics'
import DarkMode from './02-dark-mode/DarkMode'
import { CrudInputField } from './testRender/test'
import GetMethod from './components/get_method'
import Navbarhtml from './components/NavBar'

function App () {
  return (
    <div className='App'>
      {/* <DadJokes /> */}
      {/* <DarkMode/> */}
      <Navbarhtml/>
      {/* <CrudInputField/> */}
      <GetMethod/>

    </div>
  )
}

export default App
