import React from 'react'

const Displaytest = (props) => {

    console.log('props.chain, props.user', props.chain.chain, props.user)
    return(
        <div>{props.chain.chain.map((block,ind) => {
            return (
                <div key={ind}>
                    <hr></hr>
                    <p>Index: {block.index}</p>
                    <p>Previous hash: {block.previous_hash}</p>
                    <h1>Transactions</h1>
                    {block.transactions.map((tran,ind) => {
                        return (
                            <div key={ind}>
                                <p>Amount: {tran.amount}</p>
                                <p>Recipient: {tran.recipient}</p>
                                <p>Sender: {tran.sender}</p>
                            </div>
                        )
                    })}
                </div>
            )
        })
        }
        </div>
    )
}
export default Displaytest