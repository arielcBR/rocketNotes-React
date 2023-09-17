import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => 
        isNew ? "transparent" : ({theme}) => theme.COLORS.BACKGROUND_900};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    color: ${({theme}) => theme.COLORS.GRAY_300};
    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;
    
    > button {
        border: none;
        background: none
    }
    
    .button-delete{
        color: ${({theme}) => theme.COLORS.RED};
    }

    .button-add{
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > input{
        background: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.WHITE};
        padding: 12px;
        height: 56px;
        width: 100%;
        
        &::placeholder{
            color: ${({theme}) => theme.GRAY_300};
        }
    }
`;