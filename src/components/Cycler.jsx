import { useEffect, useState } from 'react';
import { Fill } from './Basics';

function Cycler({ children }) {
    const [cycle, setCycle] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCycle(cycle + 1);
        }, 5000);
    }, [cycle]);

    return <Fill>{children[cycle % children.length]}</Fill>;
}

export default Cycler;
