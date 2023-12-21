import { useEffect, useState } from "react";
import './../App.css'
import deleteEmployee from "../crud_operations/deleteEmployee";
function DeleteEmployeeCompo(){
    const [deleteEmployeeId, setDeleteEmployeeId] = useState('');
    const [deleteResult, setDeleteResult] = useState('');

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

export default DeleteEmployeeCompo;