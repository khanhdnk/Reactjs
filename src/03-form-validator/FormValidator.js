// import { useState } from 'react'

// export default function FormValidator () {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [passwordConfirm, setPasswordConfirm] = useState('')

//   const [message, setMessage] = useState('')

//   const findErrors = () => {
//     const errors = []
//     if (!email || !password || !passwordConfirm) errors.push('All fields must be filled in')
//     if ([...email].filter(i => i === '@').length !== 1) {
//       errors.push('An email must have exactly one @ sign')
//     }
//     if (password.length <= 8) errors.push('Passwords must be 8 characters or longer')
//     if (password !== passwordConfirm) errors.push('Passwords must match')

//     return errors
//   }

//   const handleSubmit = e => {
//     e.preventDefault()

//     const errors = findErrors()
//     setMessage(errors.length ? errors.join(', ') : 'User created!')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Sign Up!</h2>
//       <label htmlFor='email'>Email</label>
//       <input
//         type='text' name='email'
//         onChange={e => setEmail(e.target.value)}
//       />
//       <label htmlFor='password'>Password</label>
//       <input
//         type='password' name='password'
//         onChange={e => setPassword(e.target.value)}
//       />
//       <label htmlFor='password-confirm'>Confirm Password </label>
//       <input
//         type='password' name='password-confirm'
//         onChange={e => setPasswordConfirm(e.target.value)}
//       />
//       {message}
//       <input type='submit' value='Submit' />
//     </form>
//   )
// }




import { useState } from 'react'

export default function FormValidator () {
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
    setMessage(errors.length ? errors.join(', ') : 'User created!')
  }

  return (
    <form onSubmit={submit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
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