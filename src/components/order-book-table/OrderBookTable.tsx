/** @jsxImportSource theme-ui */

import { OrderType } from '../../shared/types';
import { css } from 'theme-ui';
import styled from '@emotion/styled';

type Props = {
    items: OrderType;
};

const Table = styled.div(() =>
    css({
        color: 'textPrimary',
        minWidth: '50%',
        px: 3,
    }),
);

const Row = styled.div(() =>
    css({
        display: 'grid',
        'grid-template-columns': '1fr 1fr 1fr',
    }),
);

const OrderBookTable = ({ items = {} }: Props) => {
    return (
        <Table>
            <Row
                sx={{
                    py: 2,
                    fontWeight: 'bold',
                }}
            >
                <div>Count</div>
                <div>Price</div>
                <div>Amount</div>
            </Row>

            {Object.values(items)
                ?.filter(Boolean)
                .map((item) => (
                    <Row key={item?.price}>
                        <div>{item?.count}</div>
                        <div>{item?.price}</div>
                        <div>{Math.abs(item?.amount || 0)}</div>
                    </Row>
                ))}
        </Table>
    );
};

export default OrderBookTable;
