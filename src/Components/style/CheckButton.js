import styled from 'styled-components';

export const CheckButton = styled.button`
    width: 170px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    line-height: 25px;
    background: #299B01;
    border: 1px solid transparent;
    margin: 0 auto;
    color: #FFFFFF;

    &:hover {
        background: #fff;
        color: #299B01;
        border-color: #299B01;
    }

    &:disabled {
        color: #bbb;
        background: #ccc;
        pointer-events: none;
    }
`;