import React from 'react';
import styled from 'styled-components';
import DBMenu from './DBMenu';
import ListItem from './ListItem';
import banerImg from '../image/banner.png';

const MenuStyled = styled.main`
    background: #ccc;
    margin-top: 80px;
    font-family: inheirt;
    display: flex;
    flex-direction: column;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

const Baner = styled.div`
    width: 100%;
    height: 210px;
    background: url(${banerImg}) no-repeat center center / cover;

`;

const Menu = () => (
    <>
        <MenuStyled>
            <Baner/>
            <SectionMenu >
                <h2>Бургеры</h2>
                <ListItem itemList={DBMenu.burger}/>
            </SectionMenu>
            <SectionMenu >
                <h2>Закуски / Напитики</h2>
                <ListItem itemList={DBMenu.other}/>
            </SectionMenu>
        </MenuStyled>
    </>
);

export default Menu;