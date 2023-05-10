import ReactDOM from 'react-dom/client'

// import {UseHookTest} from './UseHookTestBefore.tsx'
import React, { Suspense } from 'react'
import App from './App.tsx'
import AppComponentIsNeverUnmounted from './AppComponentIsNeverUnmounted.tsx'
import {FetchExample} from './FetchExample.tsx'
import ReRenderTest from './ReRenderTest.tsx'
import {AppForContext} from './ContextTest.tsx'
import {UseHookTest} from './UseHookTestAfter.tsx'
import {LazyCallTest} from './LazyCallTest.tsx'

import './index.css'
import { IAmPromise } from './IAmPromise.tsx'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
    // <FetchExample />  
    // <ReRenderTest />
    // <AppForContext />
    // <Suspense fallback={"loading..."}>
      // <UseHookTest url={"https://jsonplaceholder.typicode.com/todos/1"} shouldFetch />
    // </Suspense>
    // <LazyCallTest />
    // <div className="" style={{border : "1px solid red"}}>
    //     <div className="">i am parent component</div>
    // </div>
    <div className="" style={{border : "1px solid red"}}>
          <div className="">i am parent component</div>
          {/* @ts-expect-error Async Server Component */}
          <IAmPromise/>      
    </div>
)

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <AppComponentIsNeverUnmounted />
//   </React.StrictMode>,
// )
