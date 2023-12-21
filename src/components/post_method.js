import { useEffect, useState } from "react";
import './../App.css'
import addEmployee from "../crud_operations/addEmployee";

function PostEmployeeCompo(){
    const [addEmployeeId, setaddEmployeeId] = useState('');
    const [addEmployeeName, setaddEmployeeName] = useState('');
    const [postResult, setPostResult] = useState('');

    

    async function handleSubmitAddEmployee (){
        setPostResult(await addEmployee(addEmployeeId, addEmployeeName))
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="api_section">
                    
                    <h1>Post</h1>
                    <label htmlFor="addEmployeeId">Choose the ID:</label>
                    <input value={addEmployeeId} type="text" id="addEmployeeId" name="addEmployeeId" onChange={e=> setaddEmployeeId(e.target.value)}/><br/>

                    <label htmlFor="addEmployeeName">Choose the Name:</label>
                    <input value={addEmployeeName} type="text" id="addEmployeeName" name="addEmployeeName" onChange={e=> setaddEmployeeName(e.target.value)}/><br/>
                    <input className="input_button" type="submit" value="Submit" onClick={handleSubmitAddEmployee}/>
                    <p>{postResult}</p>
                </div>

            </form>
        </>
    );
}

export default PostEmployeeCompo;