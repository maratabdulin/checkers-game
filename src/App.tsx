import React, { useEffect, useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import BoardModel from './models/BoardModel';

const App = () => {
    const [board, setBoard] = useState<BoardModel>(new BoardModel());

    const restart = () => {
        const newBoard = new BoardModel();
        newBoard.createCells();
        setBoard(newBoard);
    };

    useEffect(() => {
        return () => {
            restart();
        };
    }, []);

    return (
        <div className="App">
            <Board board={board} onSetBoard={setBoard} />
        </div>
    );
};

export default App;
