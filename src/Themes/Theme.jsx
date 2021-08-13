import { ThemeProvider } from "styled-components"
import { light, dark, hc } from './themes'
import { GlobalStyles } from "./globalStyles"
import { useState } from "react"

const Theme = ( { children } ) => {

  const [theme, setTheme] = useState('light');

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
    <ThemeProvider theme={thm}>
      { children }
    </ThemeProvider>
  )
}

export default Theme
