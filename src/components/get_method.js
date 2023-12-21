import { useEffect, useState } from "react";
import './../App.css'
import getListEmployee from "../crud_operations/getListEmployee";


function GetEmployeesCompo(){
    const [listOfEmployees, setListOfEmployees] = useState('');
    const [expand, setExpand] = useState(false);

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

export default GetEmployeesCompo;