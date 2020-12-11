import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import { CheckButton } from '../style/CheckButton';
import { formatCurrent, projection, totalPriceItems } from '../Functions/seconderyFunction';
import { Context } from '../Functions/contex';

const Modal = styled.div`
    position: relative;
    background: #fff;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    toppings: ['topping', item => item.filter(obj => obj.checked).map(obj => obj.name),
        item => item.length ? item.join(', ') : 'no toppings'],
    choices: ['choice', item => item ? item : 'no choices']
};

const OrderConfirm = () => {

        const {
            orders: { orders, setOrders },
            auth: { authentication },
            orderConfirm: { setOpenOrderConfirm },
            database
        } = useContext(Context);

        const sendOrder = () => {
            const newOrders = orders.map(projection(rulesData));
        
            database.ref('orders').push().set({
                nameClient: authentication.displayName,
                email: authentication.email,
                order: newOrders,
                totalPrice: formatCurrent(total)
            });
        
            setOrders([]);
        };

        const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

        const closeModal = e => {
            if(e.target.id === 'overlay') {
                setOpenOrderConfirm(false);
            }
        }

        return (
            <Overlay
                id='overlay'
                onClick={closeModal}
            >
                <Modal>
                    <OrderTitle>{authentication.displayName}</OrderTitle>
                    <Text>Осталось только подтведить</Text>
                    <Total>
                        <span>Итого:</span>
                        <TotalPrice>{formatCurrent(total)}</TotalPrice>
                    </Total>
                    <CheckButton
                        onClick={() => {
                            sendOrder();
                            setOpenOrderConfirm(false);
                        }}
                    >
                        Оформить
                    </CheckButton>
                </Modal>
            </Overlay>
        )
};

export default OrderConfirm;