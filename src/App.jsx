import { useState, useEffect } from 'react';
import { Call } from './util/Data';
import Box from './components/Box';
import Cycler from './components/Cycler';
import Media from './components/Media';
import { Row } from './components/Basics';

function App() {
    const [deadlines, setDeadlines] = useState([]);
    const [lifelines, setLifelines] = useState([]);
    const [newsfeed, setNewsfeed] = useState({});

    useEffect(() => {
        const call = async () => {
            const data = await Call();
            setDeadlines(data.deadlines);
            setLifelines(data.lifelines);
        };

        call();
    }, []);

    return (
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
            {/* <Scroll>
                insert newsfeed here
            </Scroll> */}
            <Media />
        </Row>
    );
}

export default App;
