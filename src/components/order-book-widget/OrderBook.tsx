/** @jsxImportSource theme-ui */

import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { OrderBookState, OrderType } from '../../shared/types';

import MainContainer from '../main-container';
import OrderBookTable from '../order-book-table';
import useWebSocket from '../../shared/hooks/useWebSocket';

const OrderBook: React.FC = () => {
    const { sendJsonMessage, closeConnection } = useWebSocket();

    useEffect(() => {
        // This should be parametrized
        sendJsonMessage({ event: 'subscribe', channel: 'book', symbol: 'tBTCUSD' });
    }, []);

    const bids = useSelector<{ orderBook: OrderBookState }>(({ orderBook }) => orderBook?.bids);
    const asks = useSelector<{ orderBook: OrderBookState }>(({ orderBook }) => orderBook?.asks);

    return (
        <React.Fragment>
            <button onClick={() => closeConnection?.()}>Disconnect</button>

            <MainContainer>
                <OrderBookTable items={bids as unknown as OrderType} />
                <OrderBookTable items={asks as unknown as OrderType} />
            </MainContainer>
        </React.Fragment>
    );
};

export default OrderBook;
