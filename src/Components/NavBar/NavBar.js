import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import logoSign from '../../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    background: #299B01;
    justify-content: space-between;
    padding: 30px;
    box-sizing: border-box;
    color: white;
`;

const Logo = styled.a`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    line-height: 42px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
    height: 50px;
`;

const Login = styled.button`
    display: flex;
    align-items center;
    flex-direction: column;
`;

const LoinImage = styled.img`
    width: 32px;
    height: 32px;
`;

const LoginText = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    margin-top: 3px;
`;


const NavBar = () => (
    <NavBarStyled>
        <Logo href="/">
            <ImgLogo src={logoImg} alt='logo'/>
            <H1>MRDonald’s</H1>
        </Logo>
        <Login>
            <LoinImage src={logoSign} alt='logo'/>
            <LoginText>Войти</LoginText>
        </Login>
    </NavBarStyled>
);

export default NavBar;