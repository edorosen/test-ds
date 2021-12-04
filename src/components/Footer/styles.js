import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5% 10%;
    background-color: #000;
    

    @media (max-width: 768px) and (min-width: 540px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        
    }

    @media (max-width: 540px) {
        
        flex-direction: column;
    }
`;
FooterWrapper.displayName = 'div';

export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        text-transform: uppercase;
        color: #fff;
        margin: 0;
    }

    h4 {
        display: flex;
        justify-content: space-between;
        span {
            margin-right: 20px;
            color: #fff;
            font-size: 14px;
            font-weight: 400;
        }

        p {
            display: flex;
            flex-direction: column;
            margin: 0;
            line-height: normal;
            font-weight: 400;

            span {
                margin: 0;
                margin-bottom: 10px;
                color: #fff;
                font-size: 14px;
                font-weight: 400;
            }
        }
    }

    img {
        width: 50%;
    }

    p {
        color: #fff;
        font-size: 14px;
        line-height: 40px;
    }
    
    @media (max-width: 768px) {
        margin-top: 20px;

        h4 {
            justify-content: inherit;
        }
        
    }
`;
FooterDiv.displayName = 'div';

export const SecFooterDiv = styled.div`
    color: #fff;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 45%;

    #adress {
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    h4 {
        margin: 0;

        h2 {
            text-transform: uppercase;
            margin: 0;

        }

        p {
            font-size: 14px;
            font-weight: 400;
            span {
                font-size: 14px;
                font-weight: 400;
            }
        }
    }
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(1,1fr);               
        grid-row-start: 2;
        grid-column-start: 1;
        grid-row-end: 2;
        grid-column-end: 3;
        display: flex;
        width: 500px;
        margin-top: 20px; 

        #adress {
            flex-direction: row;
        }
    }

    @media (max-width: 540px) {
        flex-direction: column;
        #adress {
            flex-direction: column;
        }
    }
`;
SecFooterDiv.displayName = 'div';