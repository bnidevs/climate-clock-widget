import styled from 'styled-components';
import { Col } from './Basics';
import { DefaultBox } from './Box';
import { LIFELINE, TYPE_COLORS } from '../Constants';
import LogoSVG from '../assets/images/climateclock.svg';

const LogoBox = styled.div`
    background-color: black;
    padding: 5px;
`

const Logo = styled.img`
    width: 6em;
`

const Tagline = styled(DefaultBox)`
    text-align: center;
    padding: 5px;
`

function Media() {
    return (<Col>
        <LogoBox>
            <Logo src={LogoSVG} />
        </LogoBox>
        <Tagline color={TYPE_COLORS[LIFELINE]} inverse>
            #ActInTime
        </Tagline>
    </Col>);
}

export default Media;
