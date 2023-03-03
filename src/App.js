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
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state;
      }
      if (payload.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.RESET:
      return {};
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) {
    return '';
  }

  let computation = '';

  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case 'x':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
  }

  return computation.toString();
}

function App(props) {
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
