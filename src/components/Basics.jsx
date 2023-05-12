import styled from 'styled-components';

const Row = styled.div`
    display: flex;
`;

const Col = styled(Row)`
    flex-direction: column;
`;

const Text = styled.p`
    margin: 0;
`;

const Resize = styled.span`
    font-size: ${(props) => props.size}em;
`;

const Fill = styled.div`
    width: 100%;
    height: 100%;
`;

const DefaultBox = styled.div`
    background-color: ${(props) => (props.inverse ? '#000' : props.color)};
    color: ${(props) => (props.inverse ? props.color : '#000')};
`;

function Magnify({ text }) {
    return (
        <Text>
            {[...text].map((c, i) => (
                <Resize size={/\d/.test(c) ? 3 : 2} key={i}>
                    {c}
                </Resize>
            ))}
        </Text>
    );
}

export { Row, Col, Magnify, DefaultBox, Fill };
