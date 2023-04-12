import { useState, useEffect } from 'react';
import { Call } from './util/Data';
import Box from './components/Box';

function App() {
    const [lines, setLines] = useState([]);
    const [newsfeed, setNewsfeed] = useState({});

    useEffect(() => {
        const call = async () => {
            const presplit = Object.values(await Call());
            console.log(presplit);
            setLines(presplit.filter(e => e.type != 'newsfeed'));
        };

        call();
    }, []);

    useEffect(() => {
        console.log(lines);
    }, [lines]);

    return (
        <>
            {lines.map((k, i) => {
                return (
                    <Box
                        box_type={k.flavor}
                        box_titles={k.labels}
                        box_data={k.timestamp}
                        key={i}
                    />
                );
            })}
        </>
    );
}

export default App;
