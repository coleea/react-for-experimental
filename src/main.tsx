import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AppComponentIsNeverUnmounted from './AppComponentIsNeverUnmounted.tsx'
import {FetchExample} from './FetchExample.tsx'
import ReRenderTest from './ReRenderTest.tsx'
import {AppForContext} from './ContextTest.tsx'
// import {UseHookTest} from './UseHookTestBefore.tsx'
import {UseHookTest} from './UseHookTestAfter.tsx'
import './index.css'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
    // <FetchExample />  
    // <ReRenderTest />
    // <AppForContext />
    <Suspense fallback={"loading..."}>
      <UseHookTest url={"https://jsonplaceholder.typicode.com/todos/1"}/>
    </Suspense>

)

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <AppComponentIsNeverUnmounted />
//   </React.StrictMode>,
// )
