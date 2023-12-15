import './App.css'
import FormValidator from './03-form-validator/FormValidator'
import DarkMode from './02-dark-mode/DarkMode'

function UnknownNumber(...inputValues){
  for(const input of inputValues){
    console.log(input);

  }
  // for(const input in arguments){
  //   console.log(input);
  // }
  

}

function App () {
  let a = 4;
  let emailKey = "3";
  const obj = { a: 3, b: 7, c: 18, [emailKey]: "hello", getA: function() {return this.a;}};
  // console.log(Object.keys(obj));
  // console.log(typeof Object.keys(obj))
  // console.log(Object.keys(obj)[2])
  for(const value of Object.keys(obj)){
    console.log(value);
  }
  // UnknownNumber(1,2,3,4,5)
  return (
    <div className='App'>
      {/* <FormValidator /> */}
      {/* <DarkMode/> */}
      
    </div>
  )
}

export default App