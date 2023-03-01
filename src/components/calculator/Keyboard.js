import styled from 'styled-components';

const KeyboardBackground = styled.div`
  background-color: ${(props) => props.theme.primary.calculatorColor};
  padding: 32px 30px;
  border-radius: 10px;
  cursor: pointer;
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

const Keyboard = (props) => {
  return (
    <KeyboardBackground>
      <Button>7</Button>
    </KeyboardBackground>
  );
};

export default Keyboard;
