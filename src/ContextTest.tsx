import { useState } from 'react'
import * as React from 'react'

// React.use

const SomeContext = React.createContext(true)

export function AppForContext() {

    const [darkTheme, setDarkTheme] = useState(true);
    const toggleTheme = () => setDarkTheme(prev => !prev)

    return (
        <>
            <SomeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>toggle theme</button>
                {/* <Child /> */}
                <SecondChild />
            </SomeContext.Provider>
        </>
    )
}


export function Child() {
    console.log('child re-render');
    
    return (
        <SomeContext.Consumer>
            {(theme) => <div className="">테마 : {JSON.stringify(theme)}</div>}
        </SomeContext.Consumer>
    )
}

export function SecondChild() {
    const contextValue = React.useContext(SomeContext)
    // React.use
    // React.use
    return (
        <>
            <div className="">테마 : {JSON.stringify(contextValue)}</div>
        </>
    )
}