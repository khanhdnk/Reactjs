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
export default getListEmployee;