import { useEffect, useState } from "react"

const getDogPic = async() =>{
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const dogPic = await response.json();
  return dogPic.message;

}
export default function DogPics () {
  // API: https://dog.ceo/dog-api/
  const [dogPic, setDogPic] = useState('');
  
  useEffect(() =>{
    getDogPic()
    .then(pic => setDogPic(pic))
    console.log("clicked");
  }, []);
  return (
    <div className='dog-pics'>
      <div className="image">
        <img src={`${dogPic}`} />

      </div>
      <button onClick={async e => setDogPic(await getDogPic())}>🐶</button>
    </div>
  )
}
