import styled, {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Appp = styled.div`
  display: flex;
  flex-direction:  column;
  align-items: center;
`;
export const Root = styled.div`
  display: flex;
  width: 800px;
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  justify-content: space-between;
`;