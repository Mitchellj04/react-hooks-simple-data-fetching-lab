// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [dogPic, setDogPic] = useState("")
    
    useEffect(()=> {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((r) => r.json())
        .then(resp => setDogPic(resp.message));
    }, [])
    
    return(
        dogPic ? <img src={dogPic} alt="A Random Dog"/> : <p>Loading...</p>
    )};
    
export default App