const initial = {
    show: false
}

export function showReducer(show = initial, action) {
    switch (action.type) {
        case "TRUE_SHOW": {
            return (
                action.payload
            )
        }
        case "FALSE_SHOW":
            return action.payload

        default:
            return show
    }
}