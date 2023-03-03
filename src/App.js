import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Container from './components/layout/Container';
import Calculator from './components/calculator/Calculator';
import Head from './components/calculator/Head';
import Display from './components/calculator/Display';
import Keyboard from './components/calculator/Keyboard';
import { useReducer, useState } from 'react';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  RESET: 'reset',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };
  }
}

function App() {
  const [currentTheme, setCurrentTheme] = useState('primary');
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle currentTheme={currentTheme} />
      <Container>
        <Calculator>
          <Head currentTheme={currentTheme} handleThemeChange={handleThemeChange} />
          <Display
            currentTheme={currentTheme}
            previousOperand={previousOperand}
            currentOperand={currentOperand}
            operation={operation}
          />
          <Keyboard currentTheme={currentTheme} dispatch={dispatch} />
        </Calculator>
      </Container>
    </ThemeProvider>
  );
}

export default App;
