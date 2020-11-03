import React from 'react';
import styled from 'styled-components';
import cartIcon from '../../image/cart-icon.svg';
import { formatCurrent, totalPriceItems } from '../Functions/seconderyFunction';

const OrderItemStyled = styled.li`
    display: flex;
    align-items: center;
    margin: 15px 0;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    background: url(${cartIcon}) no-repeat center / cover;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
`;

const ItemCount = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
`;

const ItemPrice = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    margin-left: 30px;
    margin-right: 14px;
    min-width: 65px;
    text-align: right;
`;

const OrderListItem = ({ order }) => {
    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <ItemCount>{order.count}</ItemCount>
            <ItemPrice>{formatCurrent(totalPriceItems(order))}</ItemPrice>
            <TrashButton/>
        </OrderItemStyled>
    );
};

export default OrderListItem;