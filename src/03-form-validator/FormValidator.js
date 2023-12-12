import { useEffect, useState } from 'react'

export default function FormValidator () {
  const [selectedValue, setValue] = useState("");
  const HandlingValue = (e) =>{
    let data = e.target.value;
    setValue(data);
    localStorage.setItem('Selected data', data);
  }

  useEffect(() => {
    let data = localStorage.getItem('Selected data');
    if (data){
      setValue(data);
    }
  }, []);
  
  window.addEventListener('dblclick', alert("double click"));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState("");
  const errors = [];

  const submit = (e) =>{
    e.preventDefault();
    if (!email && !password && !passwordConfirm){
      errors.push("fill in the shits");
    }
    if (password.length < 8){
      errors.push("8 char bitch!");
      
    }
    if (password != passwordConfirm){
      errors.push("you dump ass");
    }

    if ([...email].filter((i) => i === '@').length !== 1){
      errors.push("wrong email?")
    }
    setMessage(errors.length ? errors.join(', ') : 'User created!');
  }

  return (
    <form onSubmit={submit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        value={selectedValue}
        type='text' name='email'
        onChange={e => HandlingValue(e)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      {message}
      <input type='submit' value='Submit' />
    </form>
  )
}