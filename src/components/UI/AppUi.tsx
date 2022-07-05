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

export const MyModal = styled.div` 
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: none;
    background: rgba(0,0,0, 0.5);
    &:active{
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;
export const MyModalContent = styled.div`
    padding: 25px;
    background: white;
    border-radius: 16px;
    min-width: 250px;
` ;
