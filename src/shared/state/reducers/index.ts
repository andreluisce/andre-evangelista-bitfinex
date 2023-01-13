import { OrderBookActions, OrderBookState } from '../../types';
const initialState: OrderBookState = {
    bids: {},
    asks: {},
};

export const orderBookReducer = (
    state: OrderBookState = initialState,
    action: OrderBookActions,
): OrderBookState => {
    switch (action.type) {
        case 'UPDATE_BID_ORDER_BOOK': {
            return {
                ...state,
                bids: { ...state.bids, [action.payload.key]: action.payload.value },
            };
        }
        case 'UPDATE_ASK_ORDER_BOOK': {
            return {
                ...state,
                asks: { ...state.asks, [action.payload.key]: action.payload.value },
            };
        }
        default:
            return state;
    }
};
