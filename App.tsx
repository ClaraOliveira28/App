import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { NewProduct } from './src/screens/NewProduct';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <NewProduct />
    </ThemeProvider>
  );
}
