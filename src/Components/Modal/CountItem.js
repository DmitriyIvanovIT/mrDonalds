import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
    text-align: center;
    margin: 0 8px;
`;

const ButtonCount = styled.button`
    border: 1px solid #299B01;
    color: #299B01;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
`;

const CountItem = ({ count, setCount, onChange  }) => {

    return (
        <CountWrapper>
            <span>Количество</span>
            <div>
                <ButtonCount disabled={count <= 1} onClick={()=>setCount(count - 1)}>-</ButtonCount>
                <CountInput 
                    type='number' 
                    min='1' 
                    max='100' 
                    value={count < 1 ? 1 : count > 100 ? 100 : count} 
                    onChange={onChange}
                />
                <ButtonCount disabled={count >= 100} onClick={()=>setCount(+count + 1)}>+</ButtonCount>
            </div>
        </CountWrapper>
    )
};

export default CountItem;