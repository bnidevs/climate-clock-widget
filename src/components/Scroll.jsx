import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { TitleBox } from './Box';
import { TYPE_COLORS, LIFELINE, FONTS, ANIMATION_FACTOR } from '../Constants';

const NewsBox = styled(TitleBox)`
    display: flex;
    width: calc(90vw - 7em);
    overflow: hidden;
`;

const scrollAnim = keyframes`
    from {
        transform: translateX(calc(90vw - 7em));
    }
    to {
        transform: translateX(-100%);
    }
`;

const NewsMover = styled(TitleBox)`
    padding: 0;
    white-space: nowrap;
    transform: translateX(calc(90vw - 7em));
    animation: ${scrollAnim} ${(props) => props.movetime}s linear infinite;
`;

const NewsLink = styled.a`
    text-decoration: none;
    font-family: ${FONTS.REG}, Lucida Console, Monaco, monospace;
    color: ${(props) => props.color};
`;

function Scroll({ elements, separator }) {
    const [movetime, setMoveTime] = useState(0);

    useEffect(() => {
        setMoveTime(elements.reduce((a, c) => a + c.headline.length, 0) / ANIMATION_FACTOR);
    }, [elements]);

    return (
        <NewsBox inverse>
            <NewsMover movetime={movetime} movedelay={0}>
                {elements.map((e, i) => (
                    <NewsLink
                        color={TYPE_COLORS[LIFELINE]}
                        href={e.link}
                        key={i}
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
