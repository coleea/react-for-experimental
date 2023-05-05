import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AppComponentIsNeverUnmounted from './AppComponentIsNeverUnmounted.tsx'
import {FetchExample} from './FetchExample.tsx'
import ReRenderTest from './ReRenderTest.tsx'
import './index.css'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
    // <FetchExample />  
    <ReRenderTest />
)

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <AppComponentIsNeverUnmounted />
//   </React.StrictMode>,
// )
