import styled from 'styled-components';
import styles from './Keyboard.module.css';

const KeyboardBackground = styled.div`
  background-color: ${(props) => props.theme.primary.calculatorColor};
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
  background-color: ${(props) => props.theme.primary.primaryBtn.buttonColor};
  box-shadow: inset 0px -4px 0px ${(props) => props.theme.primary.primaryBtn.buttonShadowColor};
  border-radius: 10px;
  color: ${(props) => props.theme.primary.primaryBtn.buttonTextColor};
  line-height: 64px;
  font-size: 40px;
  text-align: center;
`;

const Delete = styled.div`
  height: 64px;
  width: 101px;
  background-color: ${(props) => props.theme.primary.secondaryBtn.buttonColor};
  box-shadow: inset 0px -4px 0px ${(props) => props.theme.primary.secondaryBtn.buttonShadowColor};
  border-radius: 10px;
  color: ${(props) => props.theme.primary.secondaryBtn.buttonTextColor};
  line-height: 64px;
  font-size: 28px;
  text-align: center;
`;

const Reset = styled.div`
  width: 227px;
  height: 64px;
  color: ${(props) => props.theme.primary.secondaryBtn.buttonTextColor};
  box-shadow: inset 0px -4px 0px ${(props) => props.theme.primary.secondaryBtn.buttonShadowColor};
  background-color: ${(props) => props.theme.primary.secondaryBtn.buttonColor};
  border-radius: 10px;
  line-height: 64px;
  font-size: 28px;
  text-align: center;
`;

const EqualSign = styled.div`
  width: 227px;
  height: 64px;
  color: ${(props) => props.theme.primary.tertiaryBtn.buttonTextColor};
  box-shadow: inset 0px -4px 0px ${(props) => props.theme.primary.tertiaryBtn.buttonShadowColor};
  background-color: ${(props) => props.theme.primary.tertiaryBtn.buttonColor};
  border-radius: 10px;
  line-height: 64px;
  font-size: 28px;
  text-align: center;
`;

const Keyboard = (props) => {
  return (
    <KeyboardBackground>
      <div className={styles.buttonContainer}>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Delete>DEL</Delete>
      </div>
      <div className={styles.buttonContainer}>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>+</Button>
      </div>
      <div className={styles.buttonContainer}>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>-</Button>
      </div>
      <div className={styles.buttonContainer}>
        <Button>.</Button>
        <Button>0</Button>
        <Button>/</Button>
        <Button>x</Button>
      </div>
      <div className={styles.buttonContainer}>
        <Reset>RESET</Reset>
        <EqualSign>=</EqualSign>
      </div>
    </KeyboardBackground>
  );
};

export default Keyboard;
