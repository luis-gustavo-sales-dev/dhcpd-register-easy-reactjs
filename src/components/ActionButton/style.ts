import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 6px;
  background: ${ ({ theme }) => theme.colors.blue };
  padding: 10px;
  color: ${ ({ theme }) => theme.colors.shape };
  cursor: pointer;
  text-decoration: none ;
  border: none ;
  text-transform: uppercase ;
  width: 100px ;

  &:hover {
    filter: brightness(1.1);
  }

`;