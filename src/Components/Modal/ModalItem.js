import React, { useContext } from 'react';
import styled from 'styled-components';
import { formatCurrent, totalPriceItems } from '../Functions/seconderyFunction';
import useCount from '../Hooks/useCount';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { CheckButton } from '../style/CheckButton';
import CountItem from './CountItem';
import Toppings from './Toppings';
import Choices from './Choices';
import { Context } from '../Functions/contex';


export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgba(0, 0, 0, .7);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Modal = styled.div`
    position: relative;
    background: #fff;
    max-width: 600px;
    max-height: 600px;
    width: 100vw;
    height: 100vh;
`;

const Baner = styled.div`
    width: 100%;
    height: 30%;
    background: url(${({ img }) => img}) no-repeat center center / cover;
`;

const ProductBlock = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 37px;
    height: 70%;
`;

const ProductName = styled.span`
    font-size: 30px;
    line-height: 53px;
    color: #000000;
    font-family: 'Pacifico', sans-serif;
`;

const ProductPrices = styled.span`
    font-size: 30px;
    line-height: 53px;
    color: #000000;
    font-family: 'Pacifico', sans-serif;
`;

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;



export const ModalItem = () => {

    const {
        openItem: { openItem, setOpenItem },
        orders: {  orders, setOrders }
    } = useContext(Context);

    const counter = useCount(openItem.count);

    const toppings = useToppings(openItem);

    const choices = useChoices(openItem);

    const isEdit = openItem.index > -1;

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice
    };

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    },
    addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    },
    editOrder = () => {
        const newOrders = [...orders];

        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    };
    
    return(
        <>
            <Overlay 
                id='overlay'
                onClick={closeModal}
            >
                <Modal>
                    <Baner img={openItem.img}/>
                    <Content>
                        <ProductBlock>
                            <ProductName>{openItem.name}</ProductName>
                            <ProductPrices>
                                {formatCurrent(openItem.price)}
                            </ProductPrices>
                        </ProductBlock>
                        <CountItem {...counter}/>
                        {openItem.toppings && <Toppings {...toppings}/>}
                        {openItem.choices && <Choices {...choices} openItem={openItem}/>}
                        <TotalPriceItem>
                            <span>Цена:</span>
                            <span>
                                {formatCurrent(totalPriceItems(order))}
                            </span>
                        </TotalPriceItem>
                        <CheckButton 
                            onClick={isEdit ? editOrder : addToOrder}
                            disabled={order.choices && !order.choice}
                        >
                            Добавить
                        </CheckButton>
                    </Content>
                </Modal>
            </Overlay>
        </>
    );
};