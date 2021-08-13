import styled from "styled-components"

const Wrapper = styled.div`
  border-radius: 5px;
  height: 100px;
  margin: 20px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 25px;
  font-size: 30px;
  background-color: ${ ( { theme } ) => theme.results.background };
  color: ${ ( { theme } ) => theme.results.color };
`


const ResultsSection = ( { math } ) => {

  return (
    <Wrapper className="results">
        <span>{math}</span>
    </Wrapper>
  )
}

export default ResultsSection
