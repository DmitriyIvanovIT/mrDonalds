import React from 'react';
import styled from 'styled-components';
import Baner from './Baner';
import DBMenu from './DBMenu';
import ListItem from './ListItem';


const MenuStyled = styled.main`
    background: #ccc;
    margin-top: 80px;
    font-family: inheirt;
    display: flex;
    flex-direction: column;
    margin-left: 380px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;



const Menu = ({ setOpenItem }) => (
    <>
        <MenuStyled>
            <Baner/>
            <SectionMenu >
                <h2>Бургеры</h2>
                <ListItem 
                    itemList={DBMenu.burger}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
            <SectionMenu >
                <h2>Закуски / Напитики</h2>
                <ListItem 
                    itemList={DBMenu.other}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
        </MenuStyled>
    </>
);

export default Menu;