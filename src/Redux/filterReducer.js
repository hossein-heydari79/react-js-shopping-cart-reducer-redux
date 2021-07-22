const initial = {
    price: "lowest",
    size: "ALL"
}

export function filterReducer(filter = initial, action) {
    switch (action.type) {
        case "ADD": {
            return (
                action.payload
            )
        }

        default:
            return filter
    }
}