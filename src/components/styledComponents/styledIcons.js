import styled from 'styled-components'
const StyledIcons = styled.div`
flex:1;
  margin-bottom: 10px;

.icon-container{
  position: relative;
  padding: 5px;
  border-radius: 2px;
  box-shadow: 4px 4px 6px rgba(2,2,2,.6)
  font-size: .8rem;
  color: white;
  margin-right:6px;
  transition: all .6s linear;
  background-color: #000016;
align-self: center;   
  &:hover {
 background-color: #ff5600;
  }
  @media screen and (max-width: 768px){
    padding: 4px;
  font-size: .75rem;
  }
}

`
 export default StyledIcons
 