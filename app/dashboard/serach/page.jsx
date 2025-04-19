import React from 'react'

const page = () => {

    useEffect(() => {
      const loadData = async () => {
        let API = `http://localhost:3000/api/category`
        const response = await axios.get(API);
        setCategory(response.data);
        console.log(response.data);
      };
      loadData();
    }, []);
  return (
   <>
   
     
   
   </>
  )
}

export default page