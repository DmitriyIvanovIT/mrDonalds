import React from 'react';
import styled from 'styled-components';
import cartIcon from '../../image/cart-icon.svg';
import { formatCurrent, totalPriceItems } from '../Functions/seconderyFunction';

const OrderItemStyled = styled.li`
    display: flex;
    align-items: start;
    margin: 15px 0;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    background: url(${cartIcon}) no-repeat center / cover;
    cursor: pointer;
`;

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const ItemName = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
`;

const ItemToppings = styled.span`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
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
            <TextBlock>
                <ItemName>{order.name}</ItemName>
                {order.topping &&
                    <ItemToppings>
                        {order.topping.filter(item => item.checked)
                            .map(item => item.name).join(', ')}
                    </ItemToppings>}
                
            </TextBlock>
            <ItemCount>{order.count}</ItemCount>
            <ItemPrice>{formatCurrent(totalPriceItems(order))}</ItemPrice>
            <TrashButton/>
        </OrderItemStyled>
    );
};

export default OrderListItem;