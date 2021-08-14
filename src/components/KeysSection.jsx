import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  background-color: ${ ( { theme } ) => theme.keys.background };
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(5fr);
  grid-template-areas: 
              "num7 num8 num9 del"
              "num4 num5 num6 numplus"
              "num1 num2 num3 numminus"
              "numdot num0 numdivide nummultiply"
              "reset reset sum sum";
  padding: 20px;
  column-gap: 20px;
  row-gap: 20px;
  border-radius: 5px;
`

const NumberButton = styled.button`
  grid-area: num${props => props.number};
  padding: 10px 0px;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: ${ ( { theme } ) => theme.keys.number.background};
  box-shadow: ${ ( { theme } ) => theme.keys.number.shadow};
  font-weight: 900;
  font-size: 32px;
  color: ${ ( { theme } ) => theme.keys.number.color };
`

const DeleteButton = styled(NumberButton)`
  grid-area: del;
  color: ${ ( { theme } ) => theme.keys.delete.color};
  background-color: ${ ( { theme } ) => theme.keys.delete.background};
  box-shadow: ${ ( { theme } ) => theme.keys.delete.shadow};
  font-size: ${ ( { theme } ) => theme.keys.delete.size}; 
`

const ResetButton = styled(NumberButton)`
  grid-area: reset;
  color: ${ ( { theme } ) => theme.keys.reset.color};
  background-color: ${ ( { theme } ) => theme.keys.reset.background};
  box-shadow: ${ ( { theme } ) => theme.keys.reset.shadow};
  font-size: ${ ( { theme } ) => theme.keys.reset.size}; 
`
const SumButton = styled(NumberButton)`
  grid-area: sum;
  color: ${ ( { theme } ) => theme.keys.sum.color};
  background-color: ${ ( { theme } ) => theme.keys.sum.background};
  box-shadow: ${ ( { theme } ) => theme.keys.sum.shadow};
  font-size: ${ ( { theme } ) => theme.keys.sum.size}; 
`

const KeysSection = ( { setMath, math } ) => {


  const addMath = ( e ) => {
    
    let value = e.target.innerText;
    
    if ( !value || value === '' ) return;
    if ( value === "RESET" ){ 
      setMath("");
      return;
    }
    if ( value === "DEL" ) { 
      setMath( bef => {
        console.log(bef);
        return bef.slice(0, -1);
      }); 
      console.log('klik');
      return;
    }

    setMath( bef => {
      let newEval = bef + e.target.innerText;
      console.log(e.target.innerText);
      return newEval;
    } );
  }

  const sum = () => {
    if ( math === undefined || math === "" || math.trim() === ""){
      setMath("NaN");
      setTimeout(() => {
        setMath("");
      }, 1000);
      return;
    } 
    try{
      // eslint-disable-next-line no-eval
      let evl = eval(math.replace('x', '*')).toFixed(2);
      setMath( evl + '' );
    }catch( error ){
      setMath("Error")
      setTimeout(() => {
        setMath("");
      }, 1000)
    }

  }

  return (
    <Wrapper className="keys">
      <NumberButton onClick={addMath} number="7">7</NumberButton>
      <NumberButton onClick={addMath} number="8">8</NumberButton>
      <NumberButton onClick={addMath} number="9">9</NumberButton>
      <DeleteButton onClick={addMath}>DEL</DeleteButton>
      <NumberButton onClick={addMath} number="4">4</NumberButton>
      <NumberButton onClick={addMath} number="5">5</NumberButton>
      <NumberButton onClick={addMath} number="6">6</NumberButton>
      <NumberButton onClick={addMath} number="plus">+</NumberButton>
      <NumberButton onClick={addMath} number="1">1</NumberButton>
      <NumberButton onClick={addMath} number="2">2</NumberButton>
      <NumberButton onClick={addMath} number="3">3</NumberButton>
      <NumberButton onClick={addMath} number="minus">-</NumberButton>
      <NumberButton onClick={addMath} number="dot">.</NumberButton>
      <NumberButton onClick={addMath} number="0">0</NumberButton>
      <NumberButton onClick={addMath} number="divide">/</NumberButton>
      <NumberButton onClick={addMath} number="multiply">x</NumberButton>
      <ResetButton onClick={addMath} className="reset">RESET</ResetButton>
      <SumButton onClick={sum}>=</SumButton>
    </Wrapper>
  )
}

export default KeysSection
