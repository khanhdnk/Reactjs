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

export default deleteEmployee;