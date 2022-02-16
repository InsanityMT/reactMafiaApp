import styled from 'styled-components'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { ConstantBlack, ConstantRed } from './Constants'

const StyledText = styled.h5`
    font-family: 'Roboto', sans-serif;
    font-weight: ${(props) => props.isBold};
    font-size: 31.5px;
    color: white;
    text-align: ${(props) => props.textAlign};
    margin-top: 60px;
    margin-left: ${(props) => props.marginLeft};
    width: ${(props) => props.isWidth};
    @media (max-width: 1600px) {
      width: ${(props) => {
          if (props.primary === true) return '40%'
      }}
    }
    @media (max-width: 1370px) {
    width: ${(props) => (props.primary ? '60%' : '80%')}
    }
    @media (max-width: 1400px) {
    margin-left: ${(props) => {
        if (props.primary === true) return '20%'
    }}
    }
    @media (max-width: 1200px) {  
      width: ${(props) => {
          if (props.primary === true) return '70%'
      }}
    } 
      @media (max-width: 950px) {
      margin-left: ${(props) => {
          if (props.primary === true) return '15%'
      }}  
`

const StyledSmallText = styled.h5`
    color: white;
    font-size: 20px;
    margin-bottom: ${(props) => props.marginBottom};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-align: ${(props) => props.textAlign};
    margin-top: ${(props) => props.marginTop};
    margin-left: ${(props) => props.marginLeft};
`

const StyledBigText = styled.h1`
    color: ${ConstantRed};
    font-size: 100px;
    line-height: 1.5;
    margin-top: 150px;
    margin-bottom: 30px;
    font-family: 'Oswald', sans-serif;
    @media (max-width: 12450px) { ... }
`

const CustomDarkButton = styled(Button)`
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin-left: 5%;
    height: 72px;
    width: 40%;
    background-color: ${ConstantBlack};
    border: 1px solid #fffefe;
    border-radius: 19.4022px;
    line-height: 28px;
    padding-left: 4%;
    padding-right: 4%;
`

const CustomRedButton = styled(Button)`
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    background-color: ${ConstantRed};
    border: none;
    width: ${(props) => props.isWidth};
    height: ${(props) => props.isHeight};
    border-radius: ${(props) => props.borderRadius};
    @media (max-width: 991px) {
        height: ${(props) => (props.feedback ? '85px' : '68px')};
    }
`
const StyledNavLink = styled(Nav.Link)`
    color: white !important;
    margin-left: ${(props) => props.marginLeft};
    font-family: 'Raleway', sans-serif;
    font-size: 25px;
    @media (max-width: 1200px) {
        margin-left: 5%;
    }
`

const Logo = styled(StyledNavLink)`
    font-size: 64px;
    font-family: 'Keania One', cursive;
    color: white !important;
    margin-top: -32px;
`

const StyledNavbar = styled(Navbar)`
    background-color: transparent;
    position: absolute;
    font-size: 36px;
    margin-left: 3%;
    position: ${(props) => props.position};
    margin-top: 2%;
`

export {
    StyledText,
    StyledSmallText,
    StyledBigText,
    CustomDarkButton,
    CustomRedButton,
    Logo,
    StyledNavbar,
    StyledNavLink,
}
