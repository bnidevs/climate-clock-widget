import { useEffect, useState } from 'react';

function Cycler({ children }) {
    const [cycle, setCycle] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCycle(cycle + 1);
        }, 5000);
    }, [cycle]);

    return <div>{children[cycle % children.length]}</div>;
}

export default Cycler;
