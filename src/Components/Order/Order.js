import React from 'react';
import styled from 'styled-components';
import { CheckButton } from '../style/CheckButton';
import OrderListItem from './OrderListItem';
import { totalPriceItems } from '../Modal/ModalItem';
import seconderyFunction from '../Functions/seconderyFunction';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    font-family: 'Pacifico', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 39px;
    line-height: 68px;
    color: #000000;
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul`
    
`;

const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    margin-top: auto;

    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 31px; 
`;

const EmptyList = styled.p`
    text-align: center;
`;

const Order = ({ orders }) => {

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);
    
    return (
        <OrderStyled >
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                {orders.length ?
                <OrderList>
                    {orders.map(order => <OrderListItem order={order}/>)}
                </OrderList> :
                <EmptyList>Список заказов пуст</EmptyList>
                }
            </OrderContent>
            <Total>
                <span>Итого</span>
                <span>5</span>
                <TotalPrice>{seconderyFunction(total)}</TotalPrice>
            </Total>
            <CheckButton>Oформить</CheckButton>
        </OrderStyled>
)};

export default Order;