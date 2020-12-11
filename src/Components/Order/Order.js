import React, { useContext } from 'react';
import styled from 'styled-components';
import { formatCurrent, totalPriceItems } from '../Functions/seconderyFunction';
import { CheckButton } from '../style/CheckButton';
import OrderListItem from './OrderListItem';
import { Context } from '../Functions/contex';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
`;

export const OrderTitle = styled.h2`
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

export const Total = styled.div`
    display: flex;
    margin: 0 35px 30px;
    margin-top: auto;

    & span:first-child {
        flex-grow: 1;
    }
`;

export const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 31px; 
`;

const EmptyList = styled.p`
    text-align: center;
`;



const Order = () => {

    const { 
        orders: { orders, setOrders },
        openItem: { setOpenItem },
        auth: { authentication, login},
        orderConfirm: { setOpenOrderConfirm }
    } = useContext(Context);

    const deleteItem = index => {
        const newOrders = orders.filter((item, i) => index !== i);

        setOrders(newOrders);
    };

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);
    const totalCounter = orders.reduce((result, order) => order.count + result, 0);
    
    return (
        <OrderStyled >
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                {orders.length ?
                <OrderList>
                    {orders.map((order, i) => <OrderListItem 
                        order={order} 
                        key={i}
                        deleteItem={deleteItem}
                        index={i}
                        setOpenItem={setOpenItem}
                    />)}
                </OrderList> :
                <EmptyList>Список заказов пуст</EmptyList>
                }
            </OrderContent>
            {orders.length ?
                <>
                    <Total>
                        <span>Итого</span>
                        <span>{totalCounter}</span>
                        <TotalPrice>{formatCurrent(total)}</TotalPrice>
                    </Total>

                    <CheckButton onClick={() => {
                        if (authentication) {
                            setOpenOrderConfirm(true);
                        } else {
                            login();
                        }
                    }}>
                        Oформить
                    </CheckButton>
                </> :
                null
            }
        </OrderStyled>
)};

export default Order;