import { useEffect, useState } from "react";
import './../App.css'

function DeleteEmployeeMethod(){
    const [deleteEmployeeId, setDeleteEmployeeId] = useState('');
    const [deleteResult, setDeleteResult] = useState('');

    async function deleteEmployee (id){
        try{
            const response = await fetch(`http://localhost:3001/api/employees/delete/${id}`,{
                method: 'DELETE',
                headers: {
                    'x-api-key': "hello",
                    'Content-Type': 'application/json'
                }
                
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
            console.error('Error while processing:', error.message);
            throw error;
        }
    }

    async function handleSubmitDeleteEmployee (){
        setDeleteResult(await deleteEmployee(parseInt(deleteEmployeeId)))
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                    <div className="api_section">
                        <h1>Delete</h1>
                        <label htmlFor="did">Choose the ID:</label>
                        <input value={deleteEmployeeId} type="text" id="did" name="did" onChange={e=> setDeleteEmployeeId(e.target.value)}/><br/>
                        <input className="input_button" type="submit" value="Submit" onClick={handleSubmitDeleteEmployee}/>
                        <p>{deleteResult}</p>

                    </div>

            </form>
        </>
    );
}

export default DeleteEmployeeMethod;