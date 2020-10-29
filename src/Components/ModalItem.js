import React from 'react';
import styled from 'styled-components';
import { CheckButton } from './CheckButton';

const Overlay = styled.div`
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
    
    margin-bottom: auto;
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

const ModalItem = ({ openItem, setOpenItem }) => {

    const closeModal = e => {
        if(e.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    if (!openItem) return null;
    
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
                                {openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}
                            </ProductPrices>
                        </ProductBlock>
                        <CheckButton>Добавить</CheckButton>
                    </Content>
                </Modal>
            </Overlay>
        </>
    );
};

export default ModalItem;