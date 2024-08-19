import { useState } from 'react';
import styles from './style.module.css'

export function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X')

  function handlePlay(squareIndex: number) {
    if (squares[squareIndex]) return

    setSquares(state => (state.map((square, i) => i === squareIndex ? currentPlayer : square)))
    setCurrentPlayer(prev => prev === 'X' ? 'O' : 'X')
  }

  function handleReset() {
    setSquares(state => state.map(() => null))
    setCurrentPlayer('X')
  }

  function calculateWinner() {
    const possibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < possibilities.length; i++) {
      const [a, b, c] = possibilities[i]

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    return null
  }

  const winner = calculateWinner()
  let status;

  if (winner) {
    status = `Winner: ${winner}`
  } else if (!winner && squares.every((square) => square)) {
    status = 'This is a draw'
  } else {
    status = `Next Player: ${currentPlayer}`
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>

        <div className={styles.board}>
          {squares.map((square, i: number) =>
            <button
              className={styles.square}
              key={i}
              onClick={() => handlePlay(i)}
              disabled={squares[i] || winner}
            >
              {square}
            </button>
          )}
        </div>

        <h2>{status}</h2>

        <button onClick={handleReset}>Restart</button>
      </div>
    </div>
  )
}
