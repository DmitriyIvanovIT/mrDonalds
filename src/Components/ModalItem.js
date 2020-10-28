import React from 'react';
import styled from 'styled-components';

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Baner = styled.div`
    width: 100%;
    height: 30%;
    background: url(${({ img }) => img}) no-repeat center center / cover;
    margin-bottom: 20px;
`;

const ProductBlock = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 37px;
    margin-bottom: auto;
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

const ModalButton = styled.button`
    width: 170px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    line-height: 25px;
    background: #299B01;
    margin: 0 auto;
    margin-bottom: 43px;
    color: #FFFFFF;
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
                    <ProductBlock>
                        <ProductName>{openItem.name}</ProductName>
                        <ProductPrices>
                            {openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}
                        </ProductPrices>
                    </ProductBlock>
                    <ModalButton>Добавить</ModalButton>
                </Modal>
            </Overlay>
        </>
    );
};

export default ModalItem;