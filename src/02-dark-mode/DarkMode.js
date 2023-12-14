import { useState } from 'react'

export default function DarkMode () {
  const [darkMode, setDarkMode] = useState(false);
  let courses = [
    {
      a: 3,
      b: 4,
      c: 5

    },
    {
      a: 534,
      b: 443,
      c: 325

    },
    {
      a: 33213,
      b: 445,
      c: 5213

    },
    
  ];

  function CallbackFunc(prara, index){
    return {
      a: prara.a,
      b: prara.b,
      c: prara.c,
      d: "it's me mother f",
      index: index
    }
  }
  let newCourses = courses.map(CallbackFunc);
  console.log(newCourses);

  return (
    <div className={`page ${darkMode && 'dark-mode'}`}>
      <button
        className='dark-mode-button'
        onClick={() => setDarkMode(true)}
      >
        Dark Mode
      </button>
      <button
        className='light-mode-button'
        onClick={() => setDarkMode(false)}
      >
        Light Mode
      </button>
    </div>
  )
}
