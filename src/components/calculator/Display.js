import styled from 'styled-components';

const Background = styled.div`
  height: 128px;
  width: 100%;
  background-color: ${(props) => props.theme[props.themeKey].displayColor};
  border-radius: 10px;
  margin-bottom: 24px;
`;

const Value = styled.div`
  text-align: right;
  line-height: 128px;
  font-size: 56px;
  padding-right: 32px;
`;

const Display = (props) => {
  return (
    <Background themeKey={props.currentTheme}>
      <Value>0</Value>
    </Background>
  );
};

export default Display;
