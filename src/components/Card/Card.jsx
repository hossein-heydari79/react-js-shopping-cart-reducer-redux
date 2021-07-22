import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Card.css'

export const Card = ({ id, url, description, price, show, hide }) => {

    const cardlist = useSelector(state => state.cardlist)
    const datamodal = useSelector(state => state.datamodal)
    const dispatch = useDispatch()


    function add() {
        let item = cardlist.find((i) => i.id === id)
        if (item) {
            let arr = [...cardlist];
            let index = arr.findIndex((i) => i.id === id);
            arr[index].count++;
            dispatch({ type: "ADD_CARD_LIST", payload: arr })
        }
        else {
            dispatch({ type: "ADD_CARD_LIST", payload: [...cardlist, { id: id, url: url, description: description, price: price, count: 1 }] })
        }
    }


    function showm() {
        let index = cardlist.findIndex((i) => i.id === id);
        dispatch({
            type: "ADD_DATA_MODAL", payload: {
                url: url,
                id: id,
                title: description,
                des: "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
                price: price,
            }
        })
        show();
    }



    return (

        <div className="card">
            <img src={url} className="card-img" onClick={() => (showm())} />
            <p>{description}</p>
            <div className="addToCard">
                <p>${price}</p>
                <button onClick={add}>Add To Card</button>
            </div>
        </div>
    )
}
