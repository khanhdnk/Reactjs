import { useEffect, useState } from "react";
import './../App.css'

function UpdateEmployeeMethod(){
    const [updatedEmployeeId, setupdatedEmployeeId] = useState('');
    const [updateEmployeeName, setUpdateEmployeeName] = useState('');
    const [updateResult, setUpdateResult] = useState('');

    async function changeEmployee(id, name){
        try{
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
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const {success: result} = await response.json();
            if (!result){
                throw new Error("Can't retrieve data")
            }
            return "Successful";
             
            

        }catch(error){
            console.error('Error fetching data:', error.message);
            throw error;
        }
    }

    async function handleSubmitUpdateEmployee (){
        setUpdateResult(await changeEmployee(updatedEmployeeId, updateEmployeeName));
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="api_section">
                    <h1>Change the employee</h1>
                    <label htmlFor="fid">Choose the ID:</label>
                    <input value={updatedEmployeeId} type="text" id="fid" name="fname" onChange={e=> setupdatedEmployeeId(e.target.value)}/><br/>

                    <label htmlFor="fname">Type the Name:</label>
                    <input value={updateEmployeeName} type="text" id="fname" name="fname" onChange={e=> setUpdateEmployeeName(e.target.value)}/><br/>
                    <input className="input_button" type="submit" value="Submit" onClick={handleSubmitUpdateEmployee}/>
                    <p>{updateResult}</p>

                </div>

            </form>
        </>
    );
}

export default UpdateEmployeeMethod;