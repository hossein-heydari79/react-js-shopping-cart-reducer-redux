import React, { useSelector, useDispatch } from 'react'
import './Pay.css'

export const Pay = () => {

    const cardlist = useSelector(state => state.cardlist)
    const mode = useSelector(state => state.mode)
    const dispatch = useDispatch()

    function change() {
        // setmode({
        //     show: true
        // })

        dispatch({
            type: "TRUE", payload: {
                show: true
            }
        })

    }
    let total = 0;
    cardlist.forEach(element => {
        total += element.price * element.count;
    });


    return (
        <div className="pay" >
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={change}>Proceed</button>
        </div >
    )

}
