import React, { useSelector } from 'react'
import './Menubar.css'

export const Menubar = () => {

    const cardlist = useSelector(state => state.cardlist)

    return (
        <div className="menu-bar">
            {
                cardlist.length == 0 ? <p>Cart is Empty</p> : <p>You have {cardlist.length} in the Cart</p>
            }
        </div>
    )
}
