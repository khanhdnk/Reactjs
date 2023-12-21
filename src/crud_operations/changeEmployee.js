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

export default changeEmployee;