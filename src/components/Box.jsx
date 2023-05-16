import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TYPE_COLORS, FONTS } from '../Constants';
import { Wranglers } from '../util/Data';

import { Row, Magnify, DefaultBox } from './Basics';

import '../static/App.css';

const TitleBox = styled(DefaultBox)`
    font-family: ${(props) => props.font}, Lucida Console, Monaco, monospace;
    font-size: 1em;
    font-weight: 400;
    padding: 5px;

    flex-grow: ${(props) => (props.expand ? 100 : 0)};
`;

const DataBox = styled(DefaultBox)`
    font-family: ${FONTS.BOLD}, Lucida Console, Monaco, monospace;
    font-weight: 400;
    padding: 5px 5px 10px 15px;
    text-transform: uppercase;

    display: flex;
    align-items: flex-end;
    height: 5em;
`;

const UnitBox = styled(DefaultBox)`
    font-size: 2em;
    font-weight: 400;
    padding: 3px;
    text-transform: uppercase;
`;

function BoxTop({ box_type, box_titles }) {
    return (
        <Row>
            <TitleBox color={TYPE_COLORS[box_type]} font={FONTS.BOLD}>
                {box_type.toUpperCase()}
            </TitleBox>
            <TitleBox
                color={TYPE_COLORS[box_type]}
                font={FONTS.REG}
                inverse
                expand
            >
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
            <Magnify
                text={currVal && Wranglers[data_type](currVal, data_resolution)}
            />
            <UnitBox>{data_unit}</UnitBox>
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
export { TitleBox };
