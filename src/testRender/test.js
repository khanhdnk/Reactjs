import { useState } from "react";

export function TestRenderjs(){
    const [data, setData] = useState('');
    const [employee, setEmployee] = useState('');
    const [name, setName] = useState('');
    const [putId, setPutId] = useState('');

    const getData = async() =>{
        let finalData = '';
        const response = await fetch(`http://localhost:3000/api/employees/`,{
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
            }
        });
        const arrayOfData = await response.json();
        console.log(arrayOfData);
        for(let i =0; i < arrayOfData.length; i++){
            finalData+= <p>ID: {arrayOfData[i].id}, Name: {arrayOfData[i].name}</p>
        }
        finalData = arrayOfData.map(item => (
            <p key={item.id}>ID: {item.id}, Name: {item.name}</p>
          ));
        console.log(arrayOfData[0].name)
        return finalData;
    }

    const getEmployee = async(id,name) =>{
        let finalData;//try
        const response = await fetch(`http://localhost:3000/api/employees/edit/${id}`,{
            method: 'PUT',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name
            })
            
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const theData = await response.json();
        if (theData.success === true){
            return <p>success</p>;
        }
        else{
            return null;
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

    }

    
    return(
        <>
            <div>
                <h1>Get full data</h1>
                {/* <p>{data? data.forEach(displayData): ''}</p> */}
                {data}
                <button onClick={async e => {setData(await getData(''));}}>Get method</button>

            </div>
            <hr/>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Put</h1>
                    <label htmlFor="fid">Choose the ID:</label>
                    <input value={putId} type="text" id="fid" name="fname" onChange={e=> setPutId(e.target.value)}/><br/>

                    <label htmlFor="fname">Choose the Name:</label>
                    <input value={name} type="text" id="fname" name="fname" onChange={e=> setName(e.target.value)}/><br/>
                    <input type="submit" value="Submit" onClick={async e => setEmployee(await getEmployee(putId, name)) }/>
                    {employee}
                </form>
            </div>
            {/* <button onClick={}>Put method</button>
            <button onClick={}>Post method</button>
            <button onClick={}>Delete method</button> */}
        
        </>
    );
}