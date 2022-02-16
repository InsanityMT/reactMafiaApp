import React from 'react'
import Header from '../../components/Header'
import {
    StyledBigText,
    StyledSmallText,
    StyledText,
    CustomRedButton,
    CustomDarkButton,
} from '../../components/Shared.style'
import {
    MafiaOnlineContainer,
    StyledMainMafiaOnline,
    StyledMainContent,
    StyledBackground,
} from '../../pages/Main/Main.style'
import styled from 'styled-components'
import Footer from '../../components/Footer/Footer'

const Main = () => {
    const StyledImg = styled.img`
        src: url('/images/mafiaWindow.png');
        width: 644px;
        height: 412px;
        @media (max-width: 1200px) {
            margin-left: 15%;
            width: 70%;
            height: auto;
        }
    `
    return (
        <>
            <Header />
            <StyledBackground>
                <StyledMainContent>
                    <StyledBigText>ИГРАЙ. ДУМАЙ. ПОБЕЖДАЙ.</StyledBigText>
                    <StyledSmallText marginBottom="60px">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </StyledSmallText>
                    <CustomRedButton
                        variant="danger"
                        borderRadius="18.225px"
                        isWidth="36%"
                        isHeight="68px"
                    >
                        Играть
                    </CustomRedButton>
                    <CustomDarkButton variant="dark">
                        Присоединиться к комнатам
                    </CustomDarkButton>
                </StyledMainContent>
            </StyledBackground>
            <StyledMainMafiaOnline>
                <StyledImg
                    src="/images/mafiaWindow.png"
                    width="644px"
                    height="412px"
                />
                <MafiaOnlineContainer>
                    <StyledText
                        isBold="900"
                        isWidth="30%"
                        marginLeft="30%"
                        primary={true}
                    >
                        MAFIA - играй в мафию онлайн
                    </StyledText>
                    <StyledText isBold="400" isWidth="70%" marginLeft="10%">
                        Играй в мафию онлайн уже сегодня, для игры нужна только
                        веб-камера и телефон.
                    </StyledText>
                </MafiaOnlineContainer>
            </StyledMainMafiaOnline>
            <Footer />
        </>
    )
}

export default Main
