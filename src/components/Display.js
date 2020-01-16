import React from 'react'


import Displaytest from './Displaytest'

const Display = (props) => {

    // * Allow the user to enter, save, or change the `id` used for the program
    // * Display the current balance for that user
    // * Display a list of all transactions for this user, including sender and recipient
    return(
        <div>
            <p>from Display</p>
            <Displaytest chain={props.chain} user={props.user} />
        </div>
    )
}
export default Display