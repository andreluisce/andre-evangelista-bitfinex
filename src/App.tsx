import { Provider } from 'react-redux';
import React from 'react';
import ThemeProvider from './shared/theme';

import store from './shared/state';

import OrderBook from './components/order-book-widget';

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <OrderBook />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
