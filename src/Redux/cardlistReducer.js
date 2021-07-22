export function cardlistReducer(cardlist = [], action) {
    switch (action.type) {
        case "ADD_CARD_LIST": {
            return (
                action.payload
            )
        }

        default:
            return cardlist
    }
}