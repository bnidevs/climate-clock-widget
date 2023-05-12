import { useState, useEffect } from 'react';
import { Call } from './util/Data';
import Box from './components/Box';
import Cycler from './components/Cycler';
import Scroll from './components/Scroll';
import { LogoCtnr, TaglineCtnr } from './components/Media';
import { Row, Col } from './components/Basics';

function App() {
    const [deadlines, setDeadlines] = useState([]);
    const [lifelines, setLifelines] = useState([]);
    const [newsfeed, setNewsfeed] = useState([]);
    const [newsSep, setNewsSep] = useState('|');

    useEffect(() => {
        const call = async () => {
            const data = await Call();
            setDeadlines(data.deadlines);
            setLifelines(data.lifelines);
            setNewsfeed(data.newsfeed.newsfeed);
            setNewsSep(data.newsfeed.separator);
        };

        call();
    }, []);

    return (
        <Row>
            <Col>
                <Row>
                    <Cycler>
                        {deadlines.map((k, i) => {
                            return <Box box_data={k} key={i} />;
                        })}
                    </Cycler>
                    <Cycler>
                        {lifelines.map((k, i) => {
                            return <Box box_data={k} key={i} />;
                        })}
                    </Cycler>
                </Row>
                <Scroll elements={newsfeed} separator={newsSep} />
            </Col>
            <Col>
                <LogoCtnr />
                <TaglineCtnr />
            </Col>
        </Row>
    );
}

export default App;
