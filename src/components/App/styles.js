import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Montserrat;
  }
`;

export const Wrapper = styled.div`
  background: linear-gradient(180deg, #FFFFFF 0%, #E6EDFA 100%);
  overflow: hidden;
  width: 100%;
  height: 100%;
`;