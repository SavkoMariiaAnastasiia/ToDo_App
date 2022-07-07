import styled, {createGlobalStyle} from "styled-components"

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
export const Bg = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(-45deg, #eea88b, #eac0ae, #8abfe3, #8cdaa8);
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }`

export const Appp = styled.div`
  display: flex;
  flex-direction:  column;
  align-items: center;
  height: auto;
`;

export const Item = styled.div`
  display: flex;
  width: 800px;
  padding: 15px;
  border: 1px solid #305020;
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

export const Status = styled.div`
    text-align: center;
    margin-top: 5px;
    width: 200px;
    height: 20px;
  background: ${props => props.color};
    border-radius: 3px;
` ;
export const Icons = styled.div`
    margin-left: 125px;
` ;