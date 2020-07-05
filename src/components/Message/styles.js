import styled from 'styled-components';

export const Container = styled.li`
  color: ${props => (props.remote ? '#979494' : '#fff')};
  max-width: 200px;
  min-height: 40px;
  background-color: ${props => (props.remote ? '#fff' : '#f8a832')};
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  align-self: ${props => (props.remote ? 'flex-end' : 'flex-start')};

  strong {
    color: #333;
  }
`;
