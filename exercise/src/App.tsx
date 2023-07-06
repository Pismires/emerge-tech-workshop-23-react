import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Code01 from './pages/Code01';
import Code02 from './pages/Code02';
import Exercise02 from './pages/Exercise02';
import Exercise03 from './pages/Exercise03';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<></>} />
                    <Route path="code-1" element={<Code01/>} />
                    <Route path="code-2" element={<Code02/>} />
                    <Route path="exercise-2" element={<Exercise02/>} />
                    <Route path="exercise-3" element={<Exercise03/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
