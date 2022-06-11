//PARAMETRO OBRIGATORIO PARA DISPARAR UMA ACAO => TYPE

//acao entendida pelo saga
export function addReserveRequest(id){
    return {
        type: 'ADD_RESERVE_REQUEST',
        id
    }
}

//acao entendida pelo reducer
export function addReserveSuccess(trip){
    return {
        type: 'ADD_RESERVE_SUCCESS',
        trip
    }
}

export function removeReserve(id){
    return {
        type: 'REMOVE_ITEM',
        id
    }
}

export function updateReserveRequest(id, amount){
    return {
        type: 'UPDATE_RESERVE_REQUEST',
        id,
        amount
    }
}

export function updateReserveSuccess(id, amount){
    return {
        type: 'UPDATE_RESERVE_SUCCESS',
        id,
        amount
    }
}