import styled from "styled-components";

class ButtonGroupProps {
  isActive?: boolean;
}

export const Container = styled.button<ButtonGroupProps>`
  padding: 6px;
  text-align: center;
  font-size: 1rem;
  border-radius: 2px;
  background: ${({ isActive, theme }) => isActive ? theme.colors.green : theme.colors.textTitle};
  color: ${({ theme }) => theme.colors.shape };
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border: none;
  text-transform: uppercase ;

  &:hover {
    background: ${({ theme }) => theme.colors.green };
    box-shadow: 3px 5px 5px ${({ theme }) => theme.colors.greenLight100};
    border-radius: 6px;
    transition: all 0.4s ease;
    transform: scale(1.05);
  }
`;