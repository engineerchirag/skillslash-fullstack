import { useEffect, useState } from 'react';

const Game = () => {
    const [activePlayer, setActivePlayer] = useState('X');
    const [grid, updateGrid] = useState([]);
    const [winner, setWinner] = useState('');

    const calculateWinner = (grid) => {
        const winnerPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(var pattern = 0; pattern < winnerPattern.length; pattern++) {
            const firstValue = grid[winnerPattern[pattern][0]];
            const secondValue = grid[winnerPattern[pattern][1]];
            const thirdValue = grid[winnerPattern[pattern][2]];
            
            if (firstValue === secondValue && secondValue === thirdValue) {
                return firstValue;
            }
        }
    }

    const makeAMove = (idx) => {
        if (grid[idx] || winner) {
            return;
        }
        updateGrid((oldState) => {
            const newState = [...oldState];
            newState[idx] = activePlayer; 
            return newState;
        });
        setActivePlayer((oldState) => oldState === 'X' ? 'O' : 'X');
    }

    useEffect(() => {
        console.log('Execute only on mount')
    }, []);

    useEffect(() => {
        const win = calculateWinner(grid);
        if (win){
            setWinner(win);
        }
    }, [grid]);

    return (
        <div className="game-board">
            <h2>Active Player: {activePlayer}</h2>
            <div className="board-row">
                <button className="square" onClick={() => makeAMove(0)}>{grid[0]}</button>
                <button className="square" onClick={() => makeAMove(1)}>{grid[1]}</button>
                <button className="square" onClick={() => makeAMove(2)}>{grid[2]}</button>
            </div>
            <div className="board-row">
                <button className="square" onClick={() => makeAMove(3)}>{grid[3]}</button>
                <button className="square" onClick={() => makeAMove(4)}>{grid[4]}</button>
                <button className="square" onClick={() => makeAMove(5)}>{grid[5]}</button>
            </div>
            <div className="board-row">
                <button className="square" onClick={() => makeAMove(6)}>{grid[6]}</button>
                <button className="square" onClick={() => makeAMove(7)}>{grid[7]}</button>
                <button className="square" onClick={() => makeAMove(8)}>{grid[8]}</button>
            </div>
            { winner && (<h3>Winner : {winner}</h3>)}
        </div>
    )
}

export default Game;