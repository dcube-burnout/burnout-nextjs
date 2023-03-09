import '../../src/styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#ff6624',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    mode: 'dark',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />{' '}
    </ThemeProvider>
  );
}
