import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Logo } from '../Shared.style'
import { CustomDarkNavLink, CustomRedNavLink } from './Header.style'
import { StyledNavbar, StyledNavLink } from '../../components/Shared.style'

const Header = () => {
    return (
        <StyledNavbar variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Logo href="#home">MAFIA</Logo>
                    <StyledNavLink href="#watch" marginLeft="40px">
                        Смотреть
                    </StyledNavLink>
                    <StyledNavLink href="#clubs" marginLeft="40px">
                        Клубы
                    </StyledNavLink>
                    <CustomDarkNavLink href="#play" marginLeft="40px">
                        Играть
                    </CustomDarkNavLink>
                    <CustomRedNavLink href="#link" marginLeft="40px">
                        Вход
                    </CustomRedNavLink>
                </Nav>
            </Navbar.Collapse>
        </StyledNavbar>
    )
}

export default Header
