import React, { useContext } from 'react';
import styled from 'styled-components';
import Baner from './Baner';
import ListItem from './ListItem';
import { Context } from '../Functions/contex';


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

const Menu = () => {

    const { openItem: { setOpenItem }, dbMenu } = useContext(Context);

    return (
        <>
            <MenuStyled>
                <Baner/>
                {   dbMenu ?
                    <>
                        <SectionMenu >
                            <h2>Бургеры</h2>
                            <ListItem 
                                itemList={dbMenu.burger}
                                setOpenItem={setOpenItem}
                            />
                        </SectionMenu>
                        <SectionMenu >
                            <h2>Закуски / Напитики</h2>
                            <ListItem 
                                itemList={dbMenu.other}
                                setOpenItem={setOpenItem}
                            />
                        </SectionMenu>
                    </> : 
                        <div>Loanding</div>
                }
            </MenuStyled>
        </>
    );
}

export default Menu;