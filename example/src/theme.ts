import { createStyleSheet } from 'react-native-unistyles';

export type Theme = {
  colors: {
    active: string;
    inactive: string;
    background: string;
    shadow: string;
  };
};

declare module 'react-native-unistyles' {
  export interface UnistylesCustomTheme extends Theme {}
}

export const defaultTheme: Theme = {
  colors: {
    active: '#FFFFFF',
    inactive: '#000000',
    background: '#FFFFFF',
    shadow: '#000000',
  },
};

export const stylesheet = createStyleSheet({});
