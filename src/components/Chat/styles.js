import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
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

export const Content = styled.section`
  flex: 1;
  background-color: #fff7ec;
  padding: 10px;
  position: relative;
  overflow-y: scroll;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
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

export const Info = styled.span`
  position: absolute;
  bottom: 10px;
  align-self: center;
  font-style: italic;
  font-weight: bold;
  color: #f8a832;
  transition: opacity 2s ease-in-out;

  opacity: ${props => (props.fadein ? 1 : 0)};
`;
