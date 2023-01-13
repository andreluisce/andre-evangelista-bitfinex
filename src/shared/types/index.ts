export type OrderType = Record<number, Order | undefined>;

export interface Order {
    price: number;
    count: number;
    amount: number;
}

export interface OrderBookState {
    bids: OrderType;
    asks: OrderType;
}

export interface UpdateOrderBookAction {
    type: 'UPDATE_ASK_ORDER_BOOK' | 'UPDATE_BID_ORDER_BOOK';
    payload: { key: number; value: Order | undefined };
}

export interface ConnectSocket {
    type: 'CONNECT_SOCKET';
}
export interface DisconnectSocket {
    type: 'DISCONNECT_SOCKET';
}

export interface PrecisionChange {
    type: 'PRECISION_CHANGE';
    payload: number;
}

export type OrderBookActions =
    | UpdateOrderBookAction
    | ConnectSocket
    | DisconnectSocket
    | PrecisionChange;
