import styled from 'styled-components'
const   StyledHero = styled.div`
  min-height: calc(80vh - 70px ) ;
  background:  url(${props => props.img});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  object-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
position: relative;
`
export default StyledHero