import styled from 'styled-components';

export const BeforeAfter = styled.div`
    display: flex;
    justify-content: center;
`;
BeforeAfter.displayName = 'BeforeAfter';

export const TopArrow = styled.img`
    display: flex;
    align-self: flex-start;

    @media (max-width: 414px) {
        display: none;
    }
`;
TopArrow.displayName = 'TopArrow';

export const DownArrow = styled.img`
    display: flex;
    align-self: flex-end;

    @media (max-width: 414px) {
        display: none;
    }
`;
DownArrow.displayName = 'DownArrow';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
Content.displayName = 'Content';

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #121212;
    font-size: 56px;
    font-weight: 800;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;
H1.displayName = 'h1';

export const H2 = styled.h2`

    text-transform: uppercase;
    color: #018FDE;
    font-size: 28px;
    font-weight: 800;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`;
H2.displayName = 'h2';

export const IMG = styled.img`

    width: 100%;
    text-transform: uppercase;
    color: #018FDE;
    font-size: 28px;
    font-weight: 800;

`;
IMG.displayName = 'img';

export const MiddleDiv = styled.div`
    display: flex;

    p {
        display: flex;
    }

    @media (max-width: 414px) {
        flex-direction: column;
        align-items: center;

        p {
            width: 164px;
            text-align: center;
        }
    }
`;
MiddleDiv.displayName = 'MiddleDiv';

export const ButtonDiv = styled.div`
    width: 211px;
    height: 40px;
    border: 1px solid #121212;
    position: relative;
    margin: 10px;

    &:hover {
        border: 1px solid transparent;
    }
`;
ButtonDiv.displayName = 'ButtonDiv';

export const ModalButton = styled.button`
    width: 211px;
    height: 40px;
    border: none;
    background: #000;
    color: #fff;
    padding: 8px 24px 8px 24px;
    cursor: pointer;
    position: absolute;
    top: -4px;
    right: -4px;

    &:hover {
        top: 0;
        right: 0;
    }

    &:active {
        color: #8792A7;
    }
`;
ModalButton.displayName = 'ModalButton';

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    margin: 10%;

    h2 {
        color: #018FDE;
        span {
            color: #000;
        }
    }

    @media (max-width: 768px) {
        
    }
`;
FormWrapper.displayName = 'FormWrapper';



