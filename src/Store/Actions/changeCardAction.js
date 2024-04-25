export const addToCardAction = (card) => {
    return {
        type: "ADD_TO_CARD",
        payload: card
    };
};

export const updateCardAction = (card) => {
    return {
        type: "UPDATE_CARD",
        payload: card
    };
};

export const deleteFromCardAction = (card) => {
    return {
        type: "DELETE_FROM_CARD",
        payload: card
    };
};

export const decreaseQuantityAction = (card) => {
    return {
        type: "DECREASE_QUANTITY",
        payload: card
    };
};

export const increaseQuantityAction = (card) => {
    return {
        type: "INCREASE_QUANTITY",
        payload: card
    };
};
