import styled from 'styled-components'

const Footer = styled.div`
width: 100vw;
background: #222;
padding: 20px;
.footer-container{
display: flex;
width:80%;
margin: 0 auto;
justify-content: center;
// align-items: center;

  .footer-item{
    margin: auto;
    flex: 1;
    h3{
      font-weight: 400;
      color:lightGray;
    }
    h4{
      text-transform: capitalize;
      font-weight: 600;
      font-size: .7rem
      color: white;
    }
}
}



`
export default Footer