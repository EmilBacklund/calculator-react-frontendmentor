import styled from 'styled-components';
import styles from './Head.module.css';

const RadioBackground = styled.div`
  position: relative;
  width: 71px;
  height: 26px;
  background-color: ${(props) => props.theme.primary.calculatorColor};
  border-radius: 13px;
`;

const RadioNumberContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 5px;
`;

const RadioNumberIndicator = styled.div`
  width: 71px;
  display: flex;
  justify-content: space-around;
  font-size: 12px;
`;

const RadioButton = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.primary.tertiaryBtn.buttonColor};
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  cursor: pointer;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 26px;
`;

const Head = (props) => {
  return (
    <div className={styles.head}>
      <RadioNumberContainer>
        <RadioNumberIndicator>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </RadioNumberIndicator>
      </RadioNumberContainer>
      <div className={styles.styledHead}>
        calc
        <RadioContainer>
          THEME
          <RadioBackground>
            <RadioButton />
          </RadioBackground>
        </RadioContainer>
      </div>
    </div>
  );
};

export default Head;
