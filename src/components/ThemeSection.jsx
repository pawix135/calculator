import styled from 'styled-components'
import Switcher from './Switcher'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  color: ${ ( { theme } ) => theme.title };
  font-size: 25px;
`
const Controlls = styled.div`
  width: 100%;
`


const TopSection = ( { changeTheme } ) => {


  return (
    <Wrapper>
      <Name className="title">calc</Name>
      <Controlls>
        <Switcher changeTheme={changeTheme} />
      </Controlls>
    </Wrapper>
  )
}

export default TopSection
