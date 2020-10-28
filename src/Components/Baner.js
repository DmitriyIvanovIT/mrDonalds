import React from 'react';
import styled from 'styled-components';
import banerImg from '../image/banner.png';

const BanerBlock = styled.div`
width: 100%;
height: 210px;
background: url(${banerImg}) no-repeat center center / cover;

`;

const Baner = () => (
    <BanerBlock/>
) ;

export default Baner;