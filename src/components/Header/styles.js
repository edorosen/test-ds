import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 100%;
    // position: fixed;
    top: 0;
    z-index: 5;
    background: transparent;
`;
Wrapper.displayName = 'Wrapper';

export const TopImg = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    justify-content: flex-start;
    z-index: 5;
`;
TopImg.displayName = 'TopImg';

export const HeadImg = styled.img`
    // max-width: 10%;
    // border-radius: 50px;
    // border: 2px solid gray;
`;
HeadImg.displayName = 'HeadImg';

export const ButtonDiv = styled.div`
    width: 95px;
    height: 40px;
    border: 1px solid #121212;
    position: relative;
    margin: 10px;
    z-index: 2;
`;
ButtonDiv.displayName = 'ButtonDiv';

export const ModalButton = styled.button`
    width: 95px;
    height: 40px;
    border: 1px solid #121212;
    background: #fff;
    color: #000;
    padding: 8px 24px 8px 24px;
    cursor: pointer;
    position: absolute;
    top: -4px;
    right: -4px;

    &:hover {
        border: none;
        top: 0;
        right: 0;
    }

    &:active {
        color: #8792A7;
    }
`;
ModalButton.displayName = 'ModalButton';