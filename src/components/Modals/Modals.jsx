import React, { useSelector, useDispatch } from 'react'
import './Modals.css'

export const Modals = ({ show, hide }) => {


    const datamodal = useSelector(state => state.datamodal)
    const cardlist = useSelector(state => state.cardlist)
    const dispatch = useDispatch()

    function added() {


        let item = cardlist.find((i) => i.id === datamodal.id)
        if (item) {
            let arr = [...cardlist];
            let index = arr.findIndex((i) => i.id === datamodal.id);
            arr[index].count++;
            // setCardlist(arr);
            dispatch({ type: "ADD_CARD_LIST", payload: arr })
            hide();
        }
        else {
            // setCardlist([...cardlist, { id: datamodal.id, url: datamodal.url, description: datamodal.title, price: datamodal.price, count: 1 }])
            dispatch({ type: "ADD_CARD_LIST", payload: [...cardlist, { id: datamodal.id, url: datamodal.url, description: datamodal.title, price: datamodal.price, count: 1 }] })
            hide();
        }


    }


    return (
        <div className="modal">
            <div className="mains">
                <div className="section-left">
                    <img src={datamodal.url} alt="" />
                </div>
                <div className="section-right">
                    <div className="title">
                        <p>{datamodal.title}</p>
                        <button onClick={hide}>x</button>
                    </div>

                    <div className="des">
                        <p>{datamodal.des}</p>
                    </div>

                    <div className="addto">
                        <p>Price : ${datamodal.price}</p>
                        <button onClick={added}>Add To Card</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
