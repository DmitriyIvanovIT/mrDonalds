import React from 'react';
import styled from 'styled-components';
import seconderyFunction from '../Functions/seconderyFunction';

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Item = styled.li`
    position: relative;
    width: 300px;
    height: 115px;
    background-image: ${({ img }) => `url(${img})`};
    background-position: center;
    background-size: cover;
    margin: 30px 30px 0 0;
    padding: 15px;
    box-sizing: inheirt;
    color: white;
    z-index: 1;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 10px black;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: rgba(0,0,0, .5);
    }

    &:hover {
        curcor: pointer;
        box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 1);
    }
`;

const Name = styled.span`
    font-size: 20px;
    line-height: 25px;
`;

const Price = styled.span`
    font-size: 20px;
    line-height: 25px;
`;

const ListItem = ({ itemList, setOpenItem }) => (
    <List>
        {itemList.map(item => (
            <Item 
                key={item.id}
                img={item.img}
                onClick={()=>{setOpenItem(item)}}
            >
                <Name>{item.name}</Name>
                <Price>{seconderyFunction(item.price)}</Price>
            </Item>
        ))}
    </List>
);

export default ListItem;