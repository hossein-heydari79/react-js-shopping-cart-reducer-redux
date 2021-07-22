const initial = {
    url: "",
    id: "",
    title: "",
    des: "",
    price: "",
    sizes: []
}

export function dataModalReducer(dataModal = initial, action) {
    switch (action.type) {
        case "ADD_DATA_MODAL": {
            return (
                action.payload
            )
        }

        default:
            return dataModal
    }
}