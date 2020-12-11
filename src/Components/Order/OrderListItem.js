import React from 'react';
import styled from 'styled-components';
import cartIcon from '../../image/cart-icon.svg';
import { formatCurrent, totalPriceItems } from '../Functions/seconderyFunction';

const OrderItemStyled = styled.li`
    display: flex;
    align-items: start;
    margin: 15px 0;
    flex-wrap: wrap;
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

const ItemToppings = styled.div`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #9a9a9a;
    width: 100%;
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

const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {
    const topping = order.topping.filter(item => item.checked)
    .map(item => item.name).join(', ');

    const choice = order.choice;

    return (
        <OrderItemStyled onClick={(e) => {
            if (e.target.closest('button')) return
            
            setOpenItem({...order, index});
            
        }}>
            <ItemName>{order.name}</ItemName>
            <ItemCount>{order.count}</ItemCount>
            <ItemPrice>{formatCurrent(totalPriceItems(order))}</ItemPrice>
            <TrashButton onClick={() => deleteItem(index)}/>
            {topping !== '' &&
                <ItemToppings>
                    Допы: {topping}
                </ItemToppings>
            }
            {choice !== '' &&
                <ItemToppings>
                    {choice}
                </ItemToppings>
            }
        </OrderItemStyled>
    );
};

export default OrderListItem;