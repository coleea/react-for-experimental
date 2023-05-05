import { useState, useEffect, } from 'react'
import * as React from 'react'

// React.use()

export function UseHookTest({url} : {url : string}) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        setIsError(false)
        setIsLoading(true)
        setData(undefined)

        fetch(url)
        .then(r => r.json())
        .then((r) => {
            console.log('setdata');            
            console.log(r);            
            setData(r)
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false))
    }, [url]);

    return isLoading
    ? (
        <div className="">Loading</div>
    ) 
    : isError 
    ? (
        <div className="">Error</div>
    )
    : (
        <div className="">{JSON.stringify(data, null, 4)}</div>
    )

}