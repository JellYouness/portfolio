import { useState, createContext } from 'react';
import Portfolio from './Components/Portfolio';
import 'animate.css';
import Routes from './routes';

export const ThemeContext = createContext(null);

function App() {
    const [mode, setMode] = useState('light');
    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            <Routes />
        </ThemeContext.Provider>
    );
}

export default App;
