import React, {useContext as Use} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Transac } from './Transac'
export const transList = () => {
    const {transactions} = Use(GlobalContext);
    return (
        <div>
            <h3> History </h3>
            <ul className="list">
                {transactions.map(transaction =>( < Transac key={transaction.id} transaction={transaction}/>
        ))}
            
            </ul>
        </div>
    )
}
export default transList;