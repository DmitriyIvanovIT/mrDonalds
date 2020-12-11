import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import logoSign from '../../image/sign.svg';
import { Context } from '../Functions/contex';

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

const User = styled.div`
    display: flex;
    align-items center;
    flex-direction: column;
`;

const UserHeader = styled.div`
    display: flex;
    align-items center;
    width: 100%;
    justify-content: space-between;
`;

const LoinImage = styled.img`
    width: 32px;
    height: 32px;
`;

const UserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
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

const LogoutText = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-top: 3px;
`;

const UserName = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-top: 3px;
`;

const NavBar = () => {
    const { auth: { authentication, login, logOut } } = useContext(Context);

    return (
        <NavBarStyled>
            <Logo href="/">
                <ImgLogo src={logoImg} alt='logo'/>
                <H1>MRDonald’s</H1>
            </Logo>
            {authentication ?
                <User>
                    <UserHeader>
                        <UserImage src={authentication.photoURL} alt={authentication.displayName}/>
                        <LogoutText onClick={logOut}>Выйти</LogoutText>
                    </UserHeader>
                    <UserName>{authentication.displayName}</UserName>
                </User> :
                <Login onClick={login}>
                    <LoinImage src={logoSign} alt='logo'/>
                    <LoginText>Войти</LoginText>
                </Login>
            }
        </NavBarStyled>
    )
};

export default NavBar;