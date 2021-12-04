import styled from 'styled-components';

export const Form = styled.form`
    width:90%;
    max-width:768px;
    display:flex;
    flex-direction:column;
    align-items: center;
    
    label{
        width: 97%;
        position:relative;

        textarea {
            width:100%;
            height: 100px;
            padding:10px 0px;
            margin-top:20px;
            border:none;
            outline:none;
            color: #8792A7;
            background-color: #EEF3FC;
            resize: none;

            &:focus-within {
                border: 1px solid #8792A7;
                background-color: #fff;
                color: #000;
            }

            &::placeholder{
                opacity:0;
            }
        }

        span{
            position:absolute;
            top:0;
            left:0;
            transform:translateY(30px);
            font-size:0.825em;
            transition-duration:300ms;
            color: #8792A7;
            margin-left: 10px;
            pointer-events: none;
        }

        &:focus-within > span,
        input:not(:placeholder-shown) + span{
            background-color: #fff;
            color:#8792A7;
            transform: translate(10px, 70%);
            
        }


    }
    
    @media (max-width: 768px) {
        
        label {
            width: 100%;
        }
    }
`;
Form.displayName = 'form';

export const FirstDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    label{
        width: 100%;
        margin: 0 10px;
        position:relative;

        input{
            width:100%;
            padding:10px 0px;
            margin-top:20px;
            border:none;
            outline:none;
            color: #8792A7;
            background-color: #EEF3FC;

            &:focus-within {
                border: 1px solid #8792A7;
                background-color: #fff;
                color: #000;
            }

            &::placeholder{
                opacity:0;
            }
        }

        span{
            position:absolute;
            top:0;
            left:0;
            transform:translateY(30px);
            font-size:0.825em;
            transition-duration:300ms;
            color: #8792A7;
            margin-left: 10px;
            pointer-events: none;
        }

        &:focus-within > span,
        input:not(:placeholder-shown) + span{
            background-color: #fff;
            color:#8792A7;
            transform: translate(10px, 70%);
            
        }

    }
    @media (max-width: 768px) {
        flex-direction: column;

        label {
            margin: 0;
        }
    }
`;
FirstDiv.displayName = 'div';

export const Label = styled.label`
    margin-top: 20px;
    height: 20%;

    .PhoneInput {
        margin-top: 20px;
        background-color: #EEF3FC;
        input {
            margin: 0;
            color: #8792A7;
            &:focus-within {
                border: 1px solid #8792A7;
                background-color: #fff;
                color: #000;
            } 
        }
    }

    @media (max-width: 768px) {
        
    }
`;
Label.displayName = 'label';

export const ContactDataDiv = styled.div`
    
    @media (max-width: 768px) {
        
    }
`;
ContactDataDiv.displayName = 'form';

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