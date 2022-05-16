import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

//
// React 18v 이지만 사용하면 여백이 생김
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
//
// const el = document.getElementById('root')
// if (el === null) throw new Error('Root container missing in index.html')
//
// const root = ReactDOM.createRoot(el)
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// )
