import { useState, createContext } from 'react';
import Portfolio from './Components/Portfolio';
import 'animate.css';

export const ThemeContext = createContext(null);

function App() {
    const [mode, setMode] = useState('light');
    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            <Portfolio />
        </ThemeContext.Provider>
    );
}

export default App;
