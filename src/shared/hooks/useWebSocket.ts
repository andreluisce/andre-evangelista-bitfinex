import { updateOrderBook } from '../state/actions';
import { useDispatch } from 'react-redux';
import reactUseWebSocket from 'react-use-websocket';

const useWebSocket = () => {
    const dispatch = useDispatch();

    const { lastJsonMessage, sendJsonMessage, getWebSocket } = reactUseWebSocket(
        'wss://api-pub.bitfinex.com/ws/2',
        {
            onOpen: () => console.log(`Connected`),
            onMessage: () => {
                if (Array.isArray(lastJsonMessage)) {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const [_, price, count, amount] = lastJsonMessage.flat();
                    dispatch(updateOrderBook({ price, count, amount }));
                }
            },
            onError: (event) => console.error(event),
            shouldReconnect: () => true,
            reconnectInterval: 3000,
        },
    );

    return {
        sendJsonMessage,
        closeConnection: getWebSocket()?.close,
    };
};

export default useWebSocket;
