import styled from "styled-components";

const Button = styled.button`
  border: 1px solid ${({ color }) => (color ? color : "green")};
  color: ${({ color }) => (color ? color : "green")};
  background-color: transparent;
  padding: ${({ padding }) => padding && padding};;
  border-radius: 50px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 12px;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    width: 9px;
    height: 9px;
    background-color: ${({ color }) => (color ? color : "green")};
    border-radius: 50%;
    margin-left: 7.5px;
    top: 11.5px;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export default Button;
