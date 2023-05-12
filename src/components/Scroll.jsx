import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { TitleBox } from './Box';
import { TYPE_COLORS, LIFELINE, FONTS } from '../Constants';

const NewsBox = styled(TitleBox)`
    display: flex;
    width: calc(90vw - 7em);
    overflow: hidden;
`;

const scrollAnim = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
`;

const NewsMover = styled(TitleBox)`
    padding: 0;
    white-space: nowrap;
    transform: translateX(100%);
    animation: ${scrollAnim} ${(props) => props.movetime / 10}s linear infinite;
    animation-delay: ${(props) => props.movedelay / 10}s;
`;

const NewsLink = styled.a`
    text-decoration: none;
    font-family: ${FONTS.REG}, Lucida Console, Monaco, monospace;
    color: ${(props) => (props.inverse ? props.color : '#000')};
`;

function Scroll({ elements, separator }) {
    const [pos, setPos] = useState(0);
    const [movetime, setMoveTime] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setPos(pos + 2);
        }, 50);
    }, [pos]);

    useEffect(() => {
        setMoveTime(elements.reduce((a, c) => a + c.headline.length, 0));
    }, []);

    return (
        <NewsBox inverse>
            <NewsMover movetime={movetime} movedelay={0}>
                {elements.map((e, i) => (
                    <NewsLink
                        color={TYPE_COLORS[LIFELINE]}
                        href={e.link}
                        key={i}
                        inverse
                    >
                        {e.headline}
                        {separator}
                    </NewsLink>
                ))}
            </NewsMover>
            <NewsMover movetime={movetime} movedelay={movetime / 2}>
                {elements.map((e, i) => (
                    <NewsLink
                        color={TYPE_COLORS[LIFELINE]}
                        href={e.link}
                        key={i}
                        inverse
                    >
                        {e.headline}
                        {separator}
                    </NewsLink>
                ))}
            </NewsMover>
        </NewsBox>
    );
}

export default Scroll;
