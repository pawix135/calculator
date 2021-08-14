import { ThemeProvider } from "styled-components"
import { light, dark, hc } from './themes'
import { useState } from "react"

const Theme = ( { children } ) => {

  const [theme] = useState('light');

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
