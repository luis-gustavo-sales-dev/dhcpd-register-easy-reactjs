import styled from 'styled-components';

export const Container = styled.header`
  background: ${ ({theme}) => theme.colors.shape };
  border-bottom: 4px solid ${ ({ theme }) => theme.colors.blue } ;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 50px ;
  }
`;