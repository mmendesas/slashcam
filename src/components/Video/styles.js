import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: ${props => props.width || '130px'};
  height: ${props => props.height || '100px'};

  background-color: #fae4c5;
  border-radius: 20px;
`;

export const Camera = styled.video`
  height: 100%;
  border-radius: 20px;
`;

export const Options = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 0.7s ease-out;

  :hover {
    opacity: 1;
  }
`;
