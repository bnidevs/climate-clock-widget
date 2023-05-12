import styled from 'styled-components';
import { Col, DefaultBox } from './Basics';
import { LIFELINE, TYPE_COLORS, FONTS } from '../Constants';
import LogoSVG from '../assets/images/climateclock.svg';

const LogoBox = styled.div`
    display: flex;
    background-color: black;
    aspect-ratio: 1 / 1;
    height: 100%;

    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    width: 75%;
`;

const Tagline = styled(DefaultBox)`
    font-family: ${FONTS.REG}, Lucida Console, Monaco, monospace;
    text-align: center;
    padding: 5px;
    width: 7em;
`;

function LogoCtnr() {
    return (
        <LogoBox>
            <Logo src={LogoSVG} />
        </LogoBox>
    );
}

function TaglineCtnr() {
    return (
        <Tagline color={TYPE_COLORS[LIFELINE]} inverse>
            #ActInTime
        </Tagline>
    );
}

export { LogoCtnr, TaglineCtnr };
