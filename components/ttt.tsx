"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RefreshCw } from "lucide-react"

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true) // X is computer, O is player
  const [winner, setWinner] = useState<string | null>(null)
  const [showOverlay, setShowOverlay] = useState(false)
  const [resetTimer, setResetTimer] = useState<NodeJS.Timeout | null>(null)
  const [resetCountdown, setResetCountdown] = useState(5)

  const calculateWinner = useCallback((squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }, [])

  const isBoardFull = useCallback((squares: (string | null)[]) => {
    return squares.every((square) => square !== null)
  }, [])

  const makeComputerMove = useCallback(() => {
    // Make a copy of the board
    const squares = [...board]

    // Find an empty square randomly
    const emptySquares = squares.map((square, index) => (square === null ? index : -1)).filter((index) => index !== -1)

    if (emptySquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptySquares.length)
      const computerMove = emptySquares[randomIndex]
      squares[computerMove] = "X"
      setBoard(squares)
      setIsXNext(false)

      // Check if computer won
      const computerWinner = calculateWinner(squares)
      if (computerWinner) {
        setWinner(computerWinner)
        setShowOverlay(true)
        startResetTimer()
      } else if (isBoardFull(squares)) {
        setWinner("draw")
        setShowOverlay(true)
        startResetTimer()
      }
    }
  }, [board, calculateWinner, isBoardFull])

  // Computer makes first move when game starts
  useEffect(() => {
    if (isXNext && board.every((square) => square === null)) {
      // Slight delay for the first move to make it feel more natural
      const timer = setTimeout(() => {
        makeComputerMove()
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isXNext, board, makeComputerMove])

  // Computer makes move after player
  useEffect(() => {
    if (isXNext && !board.every((square) => square === null) && !winner) {
      // Slight delay for computer's move to make it feel more natural
      const timer = setTimeout(() => {
        makeComputerMove()
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [isXNext, board, winner, makeComputerMove])

  // Reset countdown timer
  useEffect(() => {
    if (showOverlay && resetCountdown > 0) {
      const countdownTimer = setTimeout(() => {
        setResetCountdown(resetCountdown - 1)
      }, 1000)

      return () => clearTimeout(countdownTimer)
    } else if (showOverlay && resetCountdown === 0) {
      resetGame()
    }
  }, [showOverlay, resetCountdown])

  const handleClick = (index: number) => {
    // If square is filled or game is over or it's computer's turn, do nothing
    if (board[index] || winner || isXNext) return

    const squares = [...board]
    squares[index] = "O"
    setBoard(squares)
    setIsXNext(true)

    // Check if player won
    const playerWinner = calculateWinner(squares)
    if (playerWinner) {
      setWinner(playerWinner)
      setShowOverlay(true)
      startResetTimer()
    } else if (isBoardFull(squares)) {
      setWinner("draw")
      setShowOverlay(true)
      startResetTimer()
    }
  }

  const startResetTimer = () => {
    if (resetTimer) clearTimeout(resetTimer)
    setResetCountdown(5)
    const timer = setTimeout(() => {
      resetGame()
    }, 5000)
    setResetTimer(timer)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
    setShowOverlay(false)
    if (resetTimer) clearTimeout(resetTimer)
    setResetTimer(null)
    setResetCountdown(5)
  }

  const renderSquare = (index: number) => {
    return (
      <motion.button
        className={`w-24 h-24 border-2 border-gray-800 flex items-center justify-center text-4xl font-bold transition-colors ${
          board[index] === "X" ? "text-black" : "text-gray-800"
        }`}
        onClick={() => handleClick(index)}
        whileHover={{ backgroundColor: board[index] ? "rgba(0,0,0,0.05)" : "rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {board[index] && (
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {board[index]}
          </motion.span>
        )}
      </motion.button>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold mb-8 text-black">Tic Tac Toe</h1>

      <div className="relative">
        <div className="grid grid-cols-3 gap-2 bg-white">
          {Array(9)
            .fill(null)
            .map((_, index) => (
              <div key={index}>{renderSquare(index)}</div>
            ))}
        </div>

        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-white text-3xl font-bold mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {winner === "X" && "Computer Wins!"}
                {winner === "O" && "You Win!"}
                {winner === "draw" && "It's a Draw!"}
              </motion.div>

              <motion.button
                className="px-6 py-3 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                onClick={resetGame}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RefreshCw className="w-5 h-5" />
                Replay ({resetCountdown}s)
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 text-gray-600">
        {!winner && <p className="text-lg">{isXNext ? "Computer is thinking..." : "Your turn (O)"}</p>}
      </div>
    </div>
  )
}

