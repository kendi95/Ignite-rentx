import "styled-components";
import { theme } from './theme';

export module "styled-components" {
  type ThemeType = typeof theme;
  
  export interface DefaultTheme extends ThemeType {}
}