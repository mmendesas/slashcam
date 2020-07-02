import styled from 'styled-components';

export const Container = styled.div`
  label {
    font-weight: regular;
    font-size: 20px;
  }

  input {
    height: 44px;
    border-radius: 6px;
    background-color: #fff;
    color: #333;
    border: solid 1px #ccc;
    padding: 0 15px;
    width: 200px;
    margin: 5px 10px;

    ::placeholder {
      color: #ccc;
    }
  }
`;
