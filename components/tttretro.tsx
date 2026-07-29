"use client";

import { AnimatePresence, motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import styles from "./tttretro.module.css";
import { useHydratedReducedMotion } from "./useHydratedReducedMotion";

type Mark = "X" | "O";
type Cell = Mark | null;
type Outcome = Mark | "draw" | null;

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const;

function getOutcome(board: Cell[]): Outcome {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return board.every(Boolean) ? "draw" : null;
}

export default function RetroTicTacToe({
  onPlayerWin,
}: {
  onPlayerWin?: () => void;
}) {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [isComputerTurn, setIsComputerTurn] = useState(true);
  const [outcome, setOutcome] = useState<Outcome>(null);
  const reducedMotion = useHydratedReducedMotion();

  const finishGame = useCallback(
    (result: Exclude<Outcome, null>) => {
      setOutcome(result);
      if (result === "O") onPlayerWin?.();
    },
    [onPlayerWin],
  );

  useEffect(() => {
    if (!isComputerTurn || outcome) return;

    const delay = board.every((cell) => cell === null) ? 620 : 420;
    const timer = window.setTimeout(() => {
      const available = board
        .map((cell, index) => (cell === null ? index : -1))
        .filter((index) => index !== -1);

      if (available.length === 0) {
        finishGame("draw");
        return;
      }

      const nextBoard = [...board];
      const move = available[Math.floor(Math.random() * available.length)];
      nextBoard[move] = "X";
      setBoard(nextBoard);

      const result = getOutcome(nextBoard);
      if (result) finishGame(result);
      else setIsComputerTurn(false);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [board, finishGame, isComputerTurn, outcome]);

  const handleMove = (index: number) => {
    if (board[index] || outcome || isComputerTurn) return;

    const nextBoard = [...board];
    nextBoard[index] = "O";
    setBoard(nextBoard);

    const result = getOutcome(nextBoard);
    if (result) finishGame(result);
    else setIsComputerTurn(true);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsComputerTurn(true);
    setOutcome(null);
  };

  const status =
    outcome === "X"
      ? "The bot took this round"
      : outcome === "O"
        ? "You unlocked the résumé"
        : outcome === "draw"
          ? "A perfectly balanced draw"
          : isComputerTurn
            ? "The bot is thinking"
            : "Your move";

  return (
    <div className={styles.game}>
      <div className={styles.gameHeader}>
        <div>
          <p>PLAYER O</p>
          <h3>TIC—TAC—TOE</h3>
        </div>
        <span className={styles.scoreTag}>BEST OF ONE</span>
      </div>

      <div className={styles.boardWrap}>
        <div className={styles.board} aria-label="Tic-tac-toe board">
          {board.map((mark, index) => (
            <motion.button
              key={index}
              type="button"
              className={styles.square}
              onClick={() => handleMove(index)}
              disabled={Boolean(mark) || Boolean(outcome) || isComputerTurn}
              aria-label={
                mark
                  ? `Square ${index + 1}: ${mark}`
                  : `Play square ${index + 1}`
              }
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: 12, scale: 0.92, rotate: -2 }
              }
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.34,
                delay: index * 0.035,
                ease: [0.2, 0.75, 0.25, 1],
              }}
              whileHover={
                reducedMotion || mark || outcome || isComputerTurn
                  ? undefined
                  : { scale: 0.97 }
              }
              whileTap={reducedMotion ? undefined : { scale: 0.92 }}
            >
              <AnimatePresence mode="wait">
                {mark && (
                  <motion.span
                    key={mark}
                    className={mark === "X" ? styles.markX : styles.markO}
                    initial={{
                      opacity: 0,
                      x: 0,
                      y: 0,
                      scale: 0,
                      rotate: -180,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    {mark}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {outcome && (
            <motion.div
              className={styles.resultOverlay}
              initial={
                reducedMotion ? false : { opacity: 0, y: 16, scale: 0.94 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
            >
              <p>{status}</p>
              <motion.button
                type="button"
                onClick={resetGame}
                whileHover={reducedMotion ? undefined : { y: -2, scale: 1.03 }}
                whileTap={reducedMotion ? undefined : { scale: 0.96 }}
              >
                <RefreshCw aria-hidden="true" />
                Play again
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={styles.status} aria-live="polite">
        {!outcome && isComputerTurn && (
          <span className={styles.thinkingDots} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        )}
        {status}
      </div>
    </div>
  );
}
