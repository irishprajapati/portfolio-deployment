declare module 'next-themes' {
  import type { ComponentType, ReactNode } from 'react';

  export type ThemeProviderProps = {
    children: ReactNode;
    attribute?: 'class' | 'data-theme';
    defaultTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
  };

  export const ThemeProvider: ComponentType<ThemeProviderProps>;

  export function useTheme(): {
    theme?: string;
    resolvedTheme?: 'light' | 'dark';
    setTheme: (theme: string) => void;
  };
}

