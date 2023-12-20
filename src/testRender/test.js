import { useEffect, useState } from "react";
import './../App.css'


export function CrudInputField(){
    const [listOfEmployees, setListOfEmployees] = useState('');
    const [employeeID, setEmployeeId] = useState('');
    const [getAnEmployeeResult, setGetAnEmployeeResult] = useState('');
    const [updateResult, setUpdateResult] = useState('');
    const [updatedEmployeeId, setupdatedEmployeeId] = useState('');
    const [updateEmployeeName, setUpdateEmployeeName] = useState('');
    const [addEmployeeId, setaddEmployeeId] = useState('');
    const [addEmployeeName, setaddEmployeeName] = useState('');
    const [postResult, setPostResult] = useState('');
    const [deleteEmployeeId, setDeleteEmployeeId] = useState('');
    const [deleteResult, setDeleteResult] = useState('');
    

    async function getListEmployee(){
        try{
            const response = await fetch(`http://localhost:3001/api/employees/`,{
                method: 'GET',
                headers: {
                    'x-api-key': "hello",
                    'Content-Type': 'application/json'
                }
            });
            const { data: employeeList } = await response.json();
            return employeeList;
        }
        catch (error) {
            console.error('Error fetching data:', error.message);
            throw error;
        }
    }

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

    async function addEmployee(id,name){
        try{
            const response = await fetch(`http://localhost:3001/api/employees/add/`,{
                method: 'POST',
                headers: {
                    'x-api-key': "hello",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: parseInt(id),
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
            console.error('Error while processing:', error.message);
            throw error;
        }
    }

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
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    async function handleSubmitGetAllEmployee (){
        setListOfEmployees(await getListEmployee());
    }

    async function handleSubmitGetAnEmployee (){
        setGetAnEmployeeResult(await getAnEmployee(employeeID));
    }

    async function handleSubmitUpdateEmployee (){
        setUpdateResult(await changeEmployee(updatedEmployeeId, updateEmployeeName));
    }

    async function handleSubmitAddEmployee (){
        setPostResult(await addEmployee(addEmployeeId, addEmployeeName))
    }

    async function handleSubmitDeleteEmployee (){
        setDeleteResult(await deleteEmployee(parseInt(deleteEmployeeId)))
    }

    

    const handleSubmit = e => {
        e.preventDefault()
    }

    useEffect(()=>{
        handleSubmitGetAllEmployee()
    },[]);

    
    return(
        <>
            <section className="main">

            <div className="getApi_section">
                <h1>Get full data</h1>
                {/* <p>{data? data.forEach(displayData): ''}</p> */}
                <div className="expand">

                    <div >
                        {listOfEmployees && listOfEmployees.map(employee=><p>ID: {employee.id}, Name: {employee.name}</p>)}
                    </div>
                </div>

                <button onClick={handleSubmitGetAllEmployee}>Get method</button>

            </div>
            <hr/>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="api_section">
                        <h1>Get the employee by ID</h1>
                        <label htmlFor="fid">Choose the ID:</label>
                        <input value={employeeID} type="text" id="fid" name="fname" onChange={e=> setEmployeeId(e.target.value)}/><br/>
                        <input className="input_button" type="submit" value="Submit" onClick={handleSubmitGetAnEmployee}/>

                        <p>{getAnEmployeeResult? `ID: ${getAnEmployeeResult.id}, Name: ${getAnEmployeeResult.name}`:''}</p>

                    </div>

                    <div className="api_section">
                        <h1>Change the employee</h1>
                        <label htmlFor="fid">Choose the ID:</label>
                        <input value={updatedEmployeeId} type="text" id="fid" name="fname" onChange={e=> setupdatedEmployeeId(e.target.value)}/><br/>

                        <label htmlFor="fname">Type the Name:</label>
                        <input value={updateEmployeeName} type="text" id="fname" name="fname" onChange={e=> setUpdateEmployeeName(e.target.value)}/><br/>
                        <input className="input_button" type="submit" value="Submit" onClick={handleSubmitUpdateEmployee}/>
                        <p>{updateResult}</p>

                    </div>
                    <br/>

                    <div className="api_section">
                    
                        <h1>Post</h1>
                        <label htmlFor="addEmployeeId">Choose the ID:</label>
                        <input value={addEmployeeId} type="text" id="addEmployeeId" name="addEmployeeId" onChange={e=> setaddEmployeeId(e.target.value)}/><br/>

                        <label htmlFor="addEmployeeName">Choose the Name:</label>
                        <input value={addEmployeeName} type="text" id="addEmployeeName" name="addEmployeeName" onChange={e=> setaddEmployeeName(e.target.value)}/><br/>
                        <input className="input_button" type="submit" value="Submit" onClick={handleSubmitAddEmployee}/>
                        <p>{postResult}</p>
                    </div>

                    <br/>


                    <div className="api_section">
                        <h1>Delete</h1>
                        <label htmlFor="did">Choose the ID:</label>
                        <input value={deleteEmployeeId} type="text" id="did" name="did" onChange={e=> setDeleteEmployeeId(e.target.value)}/><br/>
                        <input className="input_button" type="submit" value="Submit" onClick={handleSubmitDeleteEmployee}/>
                        <p>{deleteResult}</p>

                    </div>
                </form>
            </div>
            {/* <button onClick={}>Put method</button>
            <button onClick={}>Post method</button>
            <button onClick={}>Delete method</button> */}
            </section>
        
        </>
    );
}