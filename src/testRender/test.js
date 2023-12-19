import { useState } from "react";
import './../App.css'


export function TestRenderjs(){
    const [data, setData] = useState('');
    const [employee, setEmployee] = useState('');
    const [name, setName] = useState('');
    const [putId, setPutId] = useState('');
    const [pid, setPid] = useState('');
    const [pname, setPname] = useState('');
    const [put, setPut] = useState('');
    const [did, setDid] = useState('');
    const [putDelete, setPutDelete] = useState('');

    const getData = async() =>{
        let finalData = [];
        const response = await fetch(`http://localhost:3001/api/employees/`,{
            method: 'GET',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
            }
        });
        const arrayOfData = await response.json();
        console.log(arrayOfData);
        for(let i =0; i < arrayOfData.length; i++){
            finalData.push(<p>ID: {arrayOfData[i].id}, Name: {arrayOfData[i].name}</p>);
        }
        // finalData = arrayOfData.map(item => (
        //     <p key={item.id}>ID: {item.id}, Name: {item.name}</p>
        //   ));
        return finalData;
    }

    const getEmployee = async(id,name) =>{
        let finalData;//try
        const response = await fetch(`http://localhost:3001/api/employees/edit/${id}`,{
            method: 'PUT',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name
            })
            
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        const theData = await response.json();
        if (theData.success === true){
            finalData = <p>success</p>;
            return finalData;
        }
        else{
            return null;
        }
    }

    const addEmployee = async (id,name)=>{
        let finalData;//try
        const response = await fetch(`http://localhost:3001/api/employees/add/`,{
            method: 'POST',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: name
            })
            
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        const theData = await response.json();
        if (theData.success === true){
            finalData = <p>success</p>;
            return finalData;
        }
        else{
            return null;
        }
    }

    const deleteEmployee = async (id)=>{
        let finalData;//try
        const response = await fetch(`http://localhost:3001/api/employees/delete/${id}`,{
            method: 'DELETE',
            headers: {
                'x-api-key': "hello",
                'Content-Type': 'application/json'
            },
            
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        const theData = await response.json();
        if (theData.success === true){
            finalData = <p>success</p>;
            return finalData;
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
            <section className="main">

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
                    <hr/>

                    <h1>Post</h1>
                    <label htmlFor="pid">Choose the ID:</label>
                    <input value={pid} type="text" id="pid" name="pid" onChange={e=> setPid(e.target.value)}/><br/>

                    <label htmlFor="pname">Choose the Name:</label>
                    <input value={pname} type="text" id="pname" name="pname" onChange={e=> setPname(e.target.value)}/><br/>
                    <input type="submit" value="Submit" onClick={async e => setPut(await addEmployee(pid, pname)) }/>
                    {put}


                    <hr/>



                    <h1>Delete</h1>
                    <label htmlFor="did">Choose the ID:</label>
                    <input value={did} type="text" id="did" name="did" onChange={e=> setDid(e.target.value)}/><br/>
                    <input type="submit" value="Submit" onClick={async e => setPutDelete(await deleteEmployee(did)) }/>
                    {putDelete}

                </form>
            </div>
            {/* <button onClick={}>Put method</button>
            <button onClick={}>Post method</button>
            <button onClick={}>Delete method</button> */}
            </section>
        
        </>
    );
}