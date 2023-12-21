import { useEffect, useState } from "react";
import './../App.css'


function GetEmployeesMethod(){
    const [listOfEmployees, setListOfEmployees] = useState('');
    const [expand, setExpand] = useState(false);
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
        setExpand(true);
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return(
        <div className="api_section">
            <h1>Get full data</h1>
            {/* <p>{data? data.forEach(displayData): ''}</p> */}
            <div className={ `expand ${expand && 'add1fr'}`}>

                <div >
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                        {listOfEmployees && listOfEmployees.map(employee=><tr><td>{employee.id}</td><td>{employee.name}</td></tr>)}
                    </table>
                </div>
            </div>
            <br/>
            <button onClick={handleSubmitGetAllEmployee}>Get method</button>

        </div>
    );
}

export default GetEmployeesMethod;