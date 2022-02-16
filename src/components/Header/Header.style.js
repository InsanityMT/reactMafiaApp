import styled from 'styled-components'
import { StyledNavLink } from './../Shared.style'
import { ConstantLightRed } from '../Constants'

const CustomRedNavLink = styled(StyledNavLink)`
    padding-left: 35px !important;
    padding-right: 35px !important;
    height: 54px;
    background-color: ${ConstantLightRed};
    border-radius: 5px;
`

const CustomDarkNavLink = styled(StyledNavLink)`
    border: 1px solid ${ConstantLightRed};
    height: 54px;
    padding-left: 30px !important;
    padding-right: 30px !important;
`

export { CustomRedNavLink, CustomDarkNavLink }
