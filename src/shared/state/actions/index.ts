import { Order, UpdateOrderBookAction } from '../../types';

export const updateOrderBook = (state: Order): UpdateOrderBookAction => {
    return {
        type: state.amount > 0 ? 'UPDATE_BID_ORDER_BOOK' : 'UPDATE_ASK_ORDER_BOOK',
        payload: { key: state.price, value: state.count > 0 ? state : undefined },
    };
};
