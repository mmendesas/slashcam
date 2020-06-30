import styled from 'styled-components';

export const Container = styled.section`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Header = styled.div`
  background-color: #fae4c5;
  height: 75px;
  padding: 15px;

  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  color: ${props => props.color || '#333'};
  font-weight: bold;
  font-size: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  background-color: #fff7ec;
  padding: 10px;
`;

export const Footer = styled.div`
  background-color: #fae4c5;
  height: 75px;
  padding: 10px;

  display: flex;
  align-items: center;

  button {
    font-size: 14px;
  }

  input {
    margin: 0;
    margin-right: 10px;
    width: 215px;
  }
`;
