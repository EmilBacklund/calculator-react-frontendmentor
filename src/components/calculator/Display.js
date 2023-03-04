import styled from 'styled-components';

const Background = styled.div`
  height: 88px;
  width: 100%;
  background-color: ${(props) => props.theme[props.themeKey].displayColor};
  border-radius: 10px;
  margin-bottom: 24px;

  @media (min-width: 609px) {
    height: 128px;
  }
`;

const CurrentOperand = styled.div`
  font-size: 2rem;

  @media (min-width: 609px) {
    font-size: 2.5rem;
  }
`;

const PreviousOperand = styled.div`
  font-size: 1.2rem;

  @media (min-width: 609px) {
    font-size: 1.5rem;
  }
`;

const OperandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  height: 100%;
  padding-right: 24px;

  @media (min-width: 609px) {
    padding-right: 32px;
  }
`;

const Display = (props) => {
  return (
    <Background themeKey={props.currentTheme}>
      <OperandContainer>
        <PreviousOperand>
          {props.previousOperand} {props.operation}
        </PreviousOperand>
        <CurrentOperand>{props.currentOperand}</CurrentOperand>
      </OperandContainer>
    </Background>
  );
};

export default Display;
