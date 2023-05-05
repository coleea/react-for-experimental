import { useEffect, useState } from 'react';
import './App.css'
import ArrayKeyTest from './ArrayKeyTest.tsx'

function App() {

    const [someState, setSomeState] = useState(0);

    useEffect(() => {
        console.log('useEffect is called');
        return () => console.log('cleanup function is called')        
    }, [someState]);

    return (
    <>
        <button onClick={() => setSomeState(Math.random())}>change state and component will re-mount</button>
    </>
    )
}

export default App
