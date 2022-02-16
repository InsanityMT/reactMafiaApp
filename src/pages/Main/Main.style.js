import styled from 'styled-components'

const MafiaOnlineContainer = styled.div`
    margin-left: 5%;
    height: 412px;
`
const StyledBackground = styled.div`
    background-image: url('/images/bg.png');
    
    color: white;
    height: 1024px;
    width: 100%;
    padding-left: 5%;
    padding-top: 2%;
    background-position: right top;
    background-repeat: no-repeat;
`

const StyledMainContent = styled.div`
    width: 40%;
    @media (max-width: 1550px) {
        width: 50%;
    }
    @media (max-width: 1230px) {
        width: 60%;
    }
    @media (max-width: 1020px) {
        width: 80%;
    }
    @media (max-width: 770px) {
        width: 95%;
    }
`

const StyledMainMafiaOnline = styled.div`
    display: flex;
    height: 515px;
    width: 100%;
    padding-left: 5%;
    margin-top: 100px;
    @media (max-width: 1200px) {
        display: block;
        height: auto;
    }
`

export {
    MafiaOnlineContainer,
    StyledBackground,
    StyledMainContent,
    StyledMainMafiaOnline,
}
