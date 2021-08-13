import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import TopSection from './components/ThemeSection';
import ResultsSection from './components/ResultsSection'
import KeysSection from './components/KeysSection'
import { useState } from 'react';
import { light, dark, hc } from './Themes/themes'
import { GlobalStyles } from "./Themes/globalStyles"

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 500px;
  @media (max-width: 500px){
    width: 80vw;

  }

`

const App = () => {

  const [theme, setTheme] = useState('dark');
  const [math, setMath] = useState("");

  const changeTheme = (type) => {
    setTheme(type)
  }

  const thm = () => {
    switch( theme ){
      case "dark":
        return dark;
      case "light":
        return light;
      case "hc":
        return hc;
      default:
        return dark;
    }
  }

  return (
    <ThemeProvider theme={thm} >
      <GlobalStyles />
      <Wrapper>
        <TopSection changeTheme={changeTheme} />
        <ResultsSection math={math} />
        <KeysSection setMath={setMath} math={math} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
