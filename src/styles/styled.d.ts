import 'styled-components';
import colors from './theme';

// Esse arquivo serve para sobrescrever o theme do props do styled-component pelo que nós criamos via theme.ts.
// Arquivos .d.ts servem justamente para sobrescrever tipos já definidos
// declare module acessa o módulo styled component já existente 
declare module 'styled-components' {
  // Aqui é criado um novo tipo do modelo theme.ts
  // O nome do tipo será ThemeType
  type ThemeType = typeof colors

  // Aqui ele está pegando o tema padrão do StyledComponent e adicionando os campos do ThemeType
  // Agora a variável theme terá mais valores.
  // Veja um arquivo styled.ts que pegue o theme que vai ver que o typescript mostra opções para theme.colors.primary, por exemplo, pois agora tem o color dentro de theme.
  export interface DefaultTheme extends ThemeType {}
}