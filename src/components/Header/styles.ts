import styled from 'styled-components';

export const Container = styled.header`
  background: var(--shape);
  border-bottom: 4px solid var(--blue) ;
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