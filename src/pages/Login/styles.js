import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  #logo {
    align-self: flex-start;
    margin-bottom: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 30px;
`;

export const FormContent = styled.section`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  button {
    margin-top: 30px;
  }
`;
