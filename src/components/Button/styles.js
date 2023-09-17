import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({theme})=> theme.COLORS.ORANGE};
    border: none;
    border-radius: 10px;
    color: ${({theme})=> theme.COLORS.BACKGROUND_800};
    font-weight: 500;
    margin-top: 16px;
    padding: 16px;
    height: 56px;
    width: 100%;

    &:disabled{
        opacity: 0.5;
    }
`;