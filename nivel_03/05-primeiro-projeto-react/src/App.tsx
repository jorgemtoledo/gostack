import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle  from './styles/global';
import Routes from './routes';

// function App() {
//   return <Routes />
// }

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <GlobalStyle />
    </>
);

export default App;
