import styled from "styled-components";
import backgroundImage from '../../assets/background.png';


export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0 136px;
    text-align: center;

    > h1{
        font-size: 48px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > h2{
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin: 84px 0 24px;
    }
    
    > p{
        font-size: 14px;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    
    > a{
        margin-top: 124px;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImage}) no-repeat center center;
    background-size: cover;

`;