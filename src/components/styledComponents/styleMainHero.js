import styled from 'styled-components'

 const StyleMainHero = styled.div`
 
  min-height:  80vh;
  background-image: url(${props => props.img});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  object-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-text: center;
 
 

`

export default StyleMainHero