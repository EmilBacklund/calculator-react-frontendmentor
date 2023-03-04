import { useState } from 'react';
import styled from 'styled-components';
import styles from './Head.module.css';

const StyledHead = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  align-items: center;
  color: ${(props) => props.theme[props.themeKey].displayHeaderTextColor};
`;

const RadioBackground = styled.div`
  position: relative;
  width: 71px;
  height: 26px;
  background-color: ${(props) => props.theme[props.themeKey].calculatorColor};
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
  color: ${(props) => props.theme[props.themeKey].displayHeaderTextColor};
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 26px;
  letter-spacing: 1px;
`;

const RadioButton = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: ${(props) =>
    props.theme[props.themeKey].tertiaryBtn.buttonColor};
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.position};
  cursor: pointer;
  transition: all;
  transition-duration: 300ms;

  &:hover {
    background-color: ${(props) =>
      props.theme[props.themeKey].tertiaryBtn.buttonHoverColor};
  }
`;

const Head = (props) => {
  const [radioButtonPosition, setRadioButtonPosition] = useState('5px');

  const handleRadioButtonClick = () => {
    switch (radioButtonPosition) {
      case '5px':
        props.handleThemeChange('secondary');
        setRadioButtonPosition('27.5px');
        break;
      case '27.5px':
        props.handleThemeChange('tertiary');
        setRadioButtonPosition('50px');
        break;
      case '50px':
        props.handleThemeChange('primary');
        setRadioButtonPosition('5px');
        break;
      default:
        props.handleThemeChange('primary');
        setRadioButtonPosition('5px');
        break;
    }
  };

  return (
    <div className={styles.head}>
      <RadioNumberContainer>
        <RadioNumberIndicator themeKey={props.currentTheme}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </RadioNumberIndicator>
      </RadioNumberContainer>
      <StyledHead themeKey={props.currentTheme}>
        <span className={styles.calc}>calc</span>
        <RadioContainer>
          THEME
          <RadioBackground themeKey={props.currentTheme}>
            <RadioButton
              themeKey={props.currentTheme}
              position={radioButtonPosition}
              onClick={handleRadioButtonClick}
            />
          </RadioBackground>
        </RadioContainer>
      </StyledHead>
    </div>
  );
};

export default Head;
