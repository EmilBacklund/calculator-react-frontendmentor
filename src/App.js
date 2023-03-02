import './App.css';
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Container from './components/layout/Container';
import Calculator from './components/calculator/Calculator';
import Head from './components/calculator/Head';
import Display from './components/calculator/Display';
import Keyboard from './components/calculator/Keyboard';
import { useState } from 'react';

function App() {
  const [currentTheme, setCurrentTheme] = useState('primary');

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle currentTheme={currentTheme} />
      <Container>
        <Calculator>
          <Head currentTheme={currentTheme} handleThemeChange={handleThemeChange} />
          <Display currentTheme={currentTheme} />
          <Keyboard currentTheme={currentTheme} />
        </Calculator>
      </Container>
    </ThemeProvider>
  );
}

export default App;
