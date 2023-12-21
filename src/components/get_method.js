import { useEffect, useState } from "react";
import './../App.css'


function GetEmployeesMethod(){
    const [listOfEmployees, setListOfEmployees] = useState('');
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

    async function handleSubmitGetAllEmployee (){
        setListOfEmployees(await getListEmployee());
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return(
        <div className="api_section">
            <h1>Get full data</h1>
            {/* <p>{data? data.forEach(displayData): ''}</p> */}
            <div className="expand">

                <div >
                    {listOfEmployees && listOfEmployees.map(employee=><p>ID: {employee.id}, Name: {employee.name}</p>)}
                </div>
            </div>

            <button onClick={handleSubmitGetAllEmployee}>Get method</button>

        </div>
    );
}

export default GetEmployeesMethod;