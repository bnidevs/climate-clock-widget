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
`

function Magnify({ text }) {
    return (
        <Text>
            {[...text].map(c => 
                <Resize size={/\d/.test(c) ? 3 : 2}>
                    {c}
                </Resize>
            )}
        </Text>
    );
}

export { Row, Col, Magnify };
