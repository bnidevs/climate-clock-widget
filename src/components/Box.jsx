import styled from 'styled-components';
import { DEADLINE, LIFELINE, TYPE_COLORS } from '../Constants';

import { Row } from './Basics';

const DefaultBox = styled.div`
    font-family: katwijk_monoblack, Lucida Console, Monaco, monospace;
    background-color: ${(props) => (props.inverse ? '#000' : props.color)};
    color: ${(props) => (props.inverse ? props.color : '#000')};
`;

const TitleBox = styled(DefaultBox)`
    font-size: 1em;
    font-weight: 400;
    padding: 5px;
`;

const DataBox = styled(DefaultBox)``;

function BoxTop({ box_type, box_titles }) {
    return (
        <Row>
            <TitleBox color={TYPE_COLORS[box_type]}>
                {box_type.toUpperCase()}
            </TitleBox>
            <TitleBox color={TYPE_COLORS[box_type]} inverse={true}>
                {box_titles[0].toUpperCase()}
            </TitleBox>
        </Row>
    );
}

function BoxData({ box_type, data }) {
    return <DataBox color={TYPE_COLORS[box_type]}>{data}</DataBox>;
}

function Box({ box_type, box_titles, box_data }) {
    return (
        <>
            <BoxTop box_type={box_type} box_titles={box_titles} />
            <BoxData box_type={box_type} data={box_data} />
        </>
    );
}

export default Box;
