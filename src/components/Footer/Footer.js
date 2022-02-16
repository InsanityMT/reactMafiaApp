import React from 'react'
import styled from 'styled-components'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import {
    StyledSmallText,
    StyledText,
    CustomRedButton,
    Logo,
    StyledNavbar,
    StyledNavLink,
} from '../Shared.style'
import { ConstantBlack } from '../Constants'
import {
    FooterContainer,
    MainPartFooter,
    FeedBackContainer,
    FootNavsContainer,
    FootNavs,
    ImagesContainer,
    StyledNav
} from './Footer.style'

const Footer = () => {

    return (
        <>
            <FooterContainer>
                <MainPartFooter>
                    <StyledNavbar position="relative" expand="lg">
                        <Container>
                            <Row xs="auto">
                                <Col xxl={7} xl={5}>
                                    <StyledNav className="me-auto">
                                        <Logo href="#home">MAFIA</Logo>

                                        <StyledNavLink
                                            href="#watch"
                                            marginLeft="17.5%"
                                        >
                                            Играть
                                        </StyledNavLink>
                                        <StyledNavLink
                                            href="#clubs"
                                            marginLeft="17.5%"
                                        >
                                            Смотреть
                                        </StyledNavLink>
                                        <StyledNavLink
                                            href="#play"
                                            marginLeft="17.5%"
                                        >
                                            Клубы
                                        </StyledNavLink>
                                        <StyledNavLink
                                            href="#link"
                                            marginLeft="17.5%"
                                        >
                                            Вход
                                        </StyledNavLink>
                                    </StyledNav>
                                </Col>
                            </Row>
                            <FeedBackContainer adaptive={true}>
                                <StyledText
                                    isBold="700"
                                    isWidth="100%"
                                    marginLeft="0%"
                                >
                                    Обратная связь
                                </StyledText>
                                <StyledSmallText
                                    marginTop="20px"
                                    marginBottom="19px"
                                >
                                    Вы можете написать нам об ошибках, внести
                                    свои предложения, а также по любым другим
                                    вопросам, связанным с проектом
                                </StyledSmallText>
                                <CustomRedButton
                                    variant="danger"
                                    isWidth="90%"
                                    borderRadius="15px"
                                    isHeight="74px"
                                    feedback={true}
                                >
                                    Написать Сообщение
                                </CustomRedButton>
                            </FeedBackContainer>
                        </Container>
                    </StyledNavbar>
                    <FootNavsContainer>
                        <StyledSmallText
                            textAling="center"
                            marginTop="70px;"
                            marginLeft="7%"
                        >
                            © 2021 Все права защищены
                        </StyledSmallText>
                        <StyledText isBold={false} isWidth="short">
                            example@gmail.com
                        </StyledText>
                        <FootNavs>
                            <ImagesContainer bg={ConstantBlack}>
                                <img
                                    src="/images/twitterNav.png"
                                    width="25px"
                                    height="21px"
                                />
                            </ImagesContainer>
                            <ImagesContainer bg={ConstantBlack}>
                                <img
                                    src="/images/instagramNav.png"
                                    width="24px"
                                    height="23px"
                                />
                            </ImagesContainer>
                            <ImagesContainer bg="white">
                                <img
                                    src="/images/facebookNav.png"
                                    width="13px"
                                    height="28px"
                                />
                            </ImagesContainer>
                        </FootNavs>
                    </FootNavsContainer>
                </MainPartFooter>
                <FeedBackContainer adaptive={false}>
                    <StyledText isBold="700" isWidth="100%" marginLeft="0%">
                        Обратная связь
                    </StyledText>
                    <StyledSmallText marginTop="20px" marginBottom="19px">
                        Вы можете написать нам об ошибках, внести свои
                        предложения, а также по любым другим вопросам, связанным
                        с проектом
                    </StyledSmallText>
                    <CustomRedButton
                        variant="danger"
                        isWidth="90%"
                        borderRadius="15px"
                        isHeight="74px"
                    >
                        Написать Сообщение
                    </CustomRedButton>
                </FeedBackContainer>
            </FooterContainer>
        </>
    )
}

export default Footer
