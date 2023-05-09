import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DEADLINE, LIFELINE, TYPE_COLORS } from '../Constants';
import { Wranglers } from '../util/Data';

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

const DataBox = styled(DefaultBox)`
    font-size: 1em;
    font-weight: 400;
    padding: 5px;
    text-transform: uppercase;
`;

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

function BoxData({
    box_type,
    data_initial,
    data_rate,
    data_resolution,
    data_type,
    data_unit,
}) {
    const [currVal, setCurrVal] = useState(data_initial);

    useEffect(() => {
        setTimeout(() => {
            setCurrVal(currVal + data_rate);
        }, 1000 / Math.min(10, Math.round(Math.abs(data_rate / data_resolution))));
    }, [currVal]);

    return (
        <DataBox color={TYPE_COLORS[box_type]}>
            {currVal && Wranglers[data_type](currVal, data_resolution)}
            {data_unit}
        </DataBox>
    );
}

function Box({ box_data }) {
    return (
        <>
            <BoxTop box_type={box_data.flavor} box_titles={box_data.labels} />
            <BoxData
                box_type={box_data.flavor}
                data_initial={box_data.initial}
                data_rate={box_data.rate}
                data_resolution={box_data.resolution}
                data_type={box_data.type}
                data_unit={box_data.unit}
            />
        </>
    );
}

export default Box;
