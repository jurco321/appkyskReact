import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from "./components/mainPage";

const rootElement = document.getElementById('root');
if (rootElement) {

    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <MainPage/>
        </React.StrictMode>
    );

}


