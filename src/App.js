import React, { useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbarhtml} from "./components/NavBar";
import { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';


export function TestHTML(){
  return(
    <h1>hello</h1>
  );
}

export function UsesHook(ini){
  const [value, setTitle] = useState(ini);
  return[
    {
      value,
      onChange: (e) => setTitle(e.target.value)
    }, 
    () => setTitle(ini)
  ];
}

export function Form(){
  let index = 0;
  const [checked, setCheck] = useState(false);
  // const title = useRef();
  const [test, checkTest] = useReducer((index) => {
    index += 1;
    console.log(`licma ${index}`);
    
    return index;
  }, 0)
  const [title, setTitle] = useState("");
  const [state, setState] = UsesHook("");



  useEffect(() => {
    console.log(title);
  }, [title]);

  useEffect(() =>{
    console.log(checked);
  }, [checked]);
  const submit = (e) =>{
    e.preventDefault();
    console.log(state.value);
  };
  return(
    <React.Fragment>
      <button onClick={checkTest}>Co lick here</button>
      <Button onClick={checkTest}>super button</Button>
      <form onSubmit={submit}>
        <input type="checkbox" id="vehicle1" name="vehicle1" value={checked} onChange={() => setCheck((checked) => !checked)}/>
        <label htmlFor="vehicle1">{checked? "Checked" : "Not Checked"}</label><br/>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label htmlFor="vehicle2"> I have a car</label><br/>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
        <label htmlFor="vehicle3"> I have a boat</label><br/><br/>
        <input type='text' name='textbox1'  value={title} onChange={event => setTitle(event.target.value)}/> <br/><br/><br/>
        <input {...state} type='text' name='textbox2' placeholder='Type in'/>
        <input type="submit" value="Submit" />

        <br/>
      </form>
    </React.Fragment>
  );
}

export function App() {
  return (
    <div className="App">
      <Navbarhtml/>
      <Form/>
      
    </div>
  );
}

