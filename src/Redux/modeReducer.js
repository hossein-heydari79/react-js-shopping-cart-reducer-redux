const initial = {
    show: false
}

export function modeReducer(mode = initial, action) {
    switch (action.type) {
        case "TRUE": {
            return (
                action.payload
            )
        }

        default:
            return mode
    }
}