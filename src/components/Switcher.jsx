import { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
`

const SwitcherWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 11px;
  padding-right: 15px;
  letter-spacing: 1.3px;
  align-self: center;
  color: ${ ( { theme } ) => theme.switch.color };
  justify-content: center;
`

const Switch = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 60px;
  height: 20px;
  border-radius: 25px;
  background-color: ${ ( { theme } ) => theme.switch.background };
  position: relative;
  .xd{
    width: 100%;
    display: grid;
    font-size: 12px;
    color: ${( { theme } ) => theme.switch.color };
    top: -15px;
    grid-template-columns: 1fr 1fr 1fr;
    div{
      margin: auto;
    }
    position: absolute;
  }
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  padding: 5px;
  margin: auto;
  opacity: ${ ( { enabled } ) => enabled ? 1 : 0 };
  background-color: ${ ( { theme } ) => theme.switch.dot };
`

const Switcher = ( { changeTheme } ) => {

  const [dots, setDots] = useState([
    { id: 'beczka1', theme: 'dark', enabled: true },
    { id: 'beczka2', theme: 'light', enabled: false },
    { id: 'beczka3', theme: 'hc', enabled: false }
  ]);

  const change = (  theme ) => {
    changeTheme(theme)
    setDots( before => before.map( dot => dot.theme === theme ? { ...dot, enabled: true } : { ...dot, enabled: false }) )
  }

  return (
    <Wrapper>
      <TextWrapper>
        THEME
      </TextWrapper>
      <SwitcherWrapper>
        <Switch>
          <div className="xd">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          {dots.map( (dot) => {
            return (
            <Dot key={dot.id} enabled={dot.enabled} onClick={( e ) => {change( dot.theme) } }>
              
            </Dot>)
          })}
          {/* <Dot onClick={change} /> */}
        </Switch>
      </SwitcherWrapper>
    </Wrapper>
  )
}

export default Switcher
