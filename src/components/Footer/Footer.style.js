import styled from 'styled-components'
import { ConstantLightRed } from '../Constants'
import { Nav } from 'react-bootstrap'

const FooterContainer = styled.div`
    border-top: 1px solid #ffffff;
    height: 335px;
    display: flex;
    color: white;
    @media (max-width: 991px) {
        display: block;
    }
`
const MainPartFooter = styled.div`
    width: 70%;
    margin-top: 50px;
    @media (max-width: 991px) {
        width: 100%;
    }
    @media (max-width: 991px) {
        margin-top: 0px;
    }
`
const FeedBackContainer = styled.div`
    margin-left: 3%;
    width: 35%;
    margin-right: 2%;
    display: ${(props) => (props.adaptive ? 'none' : 'block')};
    @media (max-width: 991px) {
        display: ${(props) => (props.adaptive ? 'block' : 'none')};
        width: 53%;
        margin-top: -13%;
        margin-right: 0%;
    }
    @media (max-width: 762px) {
        margin-top: -10%;
    }
`
const FootNavsContainer = styled.div`
    width: 100%;
    border-top: 1px solid ${ConstantLightRed};
    display: flex;
    justify-content: space-between;
`
const FootNavs = styled.div`
    display: flex;
    padding-top: 40px;
`
const ImagesContainer = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${(props) => props.bg};
    border: 1px solid white;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 13px;
`
const StyledNav = styled(Nav)`
        width: 105%;
        margin-right: 0px;
        position: relative;
        @media (max-width: 1300px) {
            width: 65%;
        }
        @media (max-width: 1200px) {
            width: 5%;
        }
    `
export {
    FooterContainer,
    MainPartFooter,
    FeedBackContainer,
    FootNavsContainer,
    FootNavs,
    ImagesContainer,
    StyledNav
}
