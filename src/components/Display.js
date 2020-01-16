import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Display = () => {
    const [chain, setChain] = useState([])

    useEffect(() => 
        axios.get("http://localhost:5000/chain")
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    ,[])

    // * Allow the user to enter, save, or change the `id` used for the program
    // * Display the current balance for that user
    // * Display a list of all transactions for this user, including sender and recipient
    return(
        <div>
            <p>from Display</p>
        </div>
    )
}
export default Display