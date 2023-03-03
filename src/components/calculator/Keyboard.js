import styled from 'styled-components';
import styles from './Keyboard.module.css';
import { ACTIONS } from '../../App';

const KeyboardBackground = styled.div`
  background-color: ${(props) => props.theme[props.themeKey].calculatorColor};
  padding: 32px 30px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 480px;
  justify-content: space-between;
`;

const Button = styled.div`
  height: 64px;
  width: 101px;
  background-color: ${(props) => props.theme[props.themeKey].primaryBtn.buttonColor};
  box-shadow: inset 0px -4px 0px ${(props) => props.theme[props.themeKey].primaryBtn.buttonShadowColor};
  border-radius: 10px;
  color: ${(props) => props.theme[props.themeKey].primaryBtn.buttonTextColor};
  line-height: 64px;
  font-size: 40px;
  text-align: center;

  &:hover {
    transition: all;
    transition-duration: 250ms;
    background-color: ${(props) => props.theme[props.themeKey].primaryBtn.buttonHoverColor};
  }
`;

const Delete = styled.div`
  height: 64px;
  width: 101px;
  background-color: ${(props) => props.theme[props.themeKey].secondaryBtn.buttonColor};
  box-shadow: inset 0px -4px 0px ${(props) => props.theme[props.themeKey].secondaryBtn.buttonShadowColor};
  border-radius: 10px;
  color: ${(props) => props.theme[props.themeKey].secondaryBtn.buttonTextColor};
  line-height: 64px;
  font-size: 28px;
  text-align: center;

  &:hover {
    transition: all;
    transition-duration: 250ms;
    background-color: ${(props) => props.theme[props.themeKey].secondaryBtn.buttonHoverColor};
  }
`;

const Reset = styled.div`
  width: 227px;
  height: 64px;
  color: ${(props) => props.theme[props.themeKey].secondaryBtn.buttonTextColor};
  box-shadow: inset 0px -4px 0px ${(props) => props.theme[props.themeKey].secondaryBtn.buttonShadowColor};
  background-color: ${(props) => props.theme[props.themeKey].secondaryBtn.buttonColor};
  border-radius: 10px;
  line-height: 64px;
  font-size: 28px;
  text-align: center;

  &:hover {
    transition: all;
    transition-duration: 250ms;
    background-color: ${(props) => props.theme[props.themeKey].secondaryBtn.buttonHoverColor};
  }
`;

const EqualSign = styled.div`
  width: 227px;
  height: 64px;
  color: ${(props) => props.theme[props.themeKey].tertiaryBtn.buttonTextColor};
  box-shadow: inset 0px -4px 0px ${(props) => props.theme[props.themeKey].tertiaryBtn.buttonShadowColor};
  background-color: ${(props) => props.theme[props.themeKey].tertiaryBtn.buttonColor};
  border-radius: 10px;
  line-height: 64px;
  font-size: 28px;
  text-align: center;

  &:hover {
    transition: all;
    transition-duration: 250ms;
    background-color: ${(props) => props.theme[props.themeKey].tertiaryBtn.buttonHoverColor};
  }
`;

const Keyboard = (props, { dispatch, digit }) => {
  return (
    <KeyboardBackground themeKey={props.currentTheme}>
      <div className={styles.buttonContainer}>
        <Button themeKey={props.currentTheme} onClick={console.log(EventTarget.textContent)}>
          7
        </Button>
        <Button themeKey={props.currentTheme}>8</Button>
        <Button themeKey={props.currentTheme}>9</Button>
        <Delete themeKey={props.currentTheme}>DEL</Delete>
      </div>
      <div className={styles.buttonContainer}>
        <Button themeKey={props.currentTheme}>4</Button>
        <Button themeKey={props.currentTheme}>5</Button>
        <Button themeKey={props.currentTheme}>6</Button>
        <Button themeKey={props.currentTheme}>+</Button>
      </div>
      <div className={styles.buttonContainer}>
        <Button themeKey={props.currentTheme}>1</Button>
        <Button themeKey={props.currentTheme}>2</Button>
        <Button themeKey={props.currentTheme}>3</Button>
        <Button themeKey={props.currentTheme}>-</Button>
      </div>
      <div className={styles.buttonContainer}>
        <Button themeKey={props.currentTheme}>.</Button>
        <Button themeKey={props.currentTheme}>0</Button>
        <Button themeKey={props.currentTheme}>/</Button>
        <Button themeKey={props.currentTheme}>x</Button>
      </div>
      <div className={styles.buttonContainer}>
        <Reset themeKey={props.currentTheme}>RESET</Reset>
        <EqualSign themeKey={props.currentTheme}>=</EqualSign>
      </div>
    </KeyboardBackground>
  );
};

export default Keyboard;
