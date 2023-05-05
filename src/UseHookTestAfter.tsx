import { useState, useEffect, use } from 'react'
import * as React from 'react'

// React.use()

export function UseHookTest({url} : {url : string}) {
    
    const data = use(fetch(url).then(r => r.json()))

    return <div className="">{JSON.stringify(data, null, 4)}</div>
}