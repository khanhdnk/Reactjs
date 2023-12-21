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

export default getAnEmployee;