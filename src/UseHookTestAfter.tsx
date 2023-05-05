import { useState, useEffect, use } from 'react'
import * as React from 'react'

// React.use()

export function UseHookTest({url, shouldFetch} : {url : string, shouldFetch :boolean}) {
    
    console.log({shouldFetch});
    
    const data = shouldFetch 
                 ? use(fetch(url).then(r => r.json()))
                 : "default value"

    return <div className="">{JSON.stringify(data, null, 4)}</div>
}