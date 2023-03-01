import './App.css';
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Container from './components/layout/Container';
import Calculator from './components/calculator/Calculator';
import Head from './components/calculator/Head';
import Display from './components/calculator/Display';
import Keyboard from './components/calculator/Keyboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Calculator>
          <Head />
          <Display />
          <Keyboard />
        </Calculator>
      </Container>
    </ThemeProvider>
  );
}

export default App;
