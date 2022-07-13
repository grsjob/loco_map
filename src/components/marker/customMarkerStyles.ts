import styled from "styled-components";

export const Popup = styled.div`
  position: absolute;
  background: #fff;
  padding: 5px 10px;
  min-width: 100px;
  left: 30px;
  top: -40px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  &:after {
    content: "";
    left: 0;
    bottom: -7px;
    position: absolute;
    border: 5px solid transparent;
    border-left: 5px solid #fff;
    border-top: 5px solid #fff;
  }
`;

export const Icon = styled.img``;
