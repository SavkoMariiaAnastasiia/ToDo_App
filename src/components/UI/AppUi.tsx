import styled, {createGlobalStyle} from "styled-components"

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #59362a;
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
  border: 2px solid #5B6125;
  margin-top: 15px;
  justify-content: space-between;
  border-radius: 5px;
`;
export const Inp = styled.div`
  display: flex;
  margin-right: 130px;
  width: 700px;
  padding: 20px;
  margin-top: 15px;
  justify-content: space-between;
`;
