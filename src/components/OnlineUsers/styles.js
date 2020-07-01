import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
`;

export const Badge = styled.div`
  background-color: #e1e0dd;
  width: 50px;
  height: 40px;
  border-radius: 10px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

export const User = styled.div`
  width: 80px;
  height: 80px;
  margin: 5px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${props =>
    props.active &&
    css`
      border: 2px solid #f8a832;
    `}
`;
