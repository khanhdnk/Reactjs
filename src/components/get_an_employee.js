import { useEffect, useState } from "react";
import './../App.css'

function GetAnEmployeeMethod(){
    const [employeeID, setEmployeeId] = useState('');
    const [getAnEmployeeResult, setGetAnEmployeeResult] = useState('');

    async function getAnEmployee(id){
        try{
            const response = await fetch(`http://localhost:3001/api/employees/${id}`,{
                method: 'GET',
                headers: {
                    'x-api-key': "hello",
                    'Content-Type': 'application/json'
                }
                
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const {data: anEmployee, success: results} = await response.json();
            if (!results){
                throw new Error("Can't retrieve data")
            }
            return anEmployee;
            

        }catch(error){
            console.error('Error fetching data:', error.message);
            throw error;
        }
    }

    async function handleSubmitGetAnEmployee (){
        setGetAnEmployeeResult(await getAnEmployee(employeeID));
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="api_section">
                    <h1>Get the employee by ID</h1>
                    <label htmlFor="fid">Choose the ID:</label>
                    <input value={employeeID} type="text" id="fid" name="fname" onChange={e=> setEmployeeId(e.target.value)}/><br/>
                    <input className="input_button" type="submit" value="Submit" onClick={handleSubmitGetAnEmployee}/>

                    <p>{getAnEmployeeResult? `ID: ${getAnEmployeeResult.id}, Name: ${getAnEmployeeResult.name}`:''}</p>

                </div>
            </form>
        </>
    );
}

export default GetAnEmployeeMethod;