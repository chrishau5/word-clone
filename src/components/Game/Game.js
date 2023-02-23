import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every page load.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('inProgress');

  const numOfGuesses = guesses.length;

  function calculateGameStatus(newGuesses) {
    const win = newGuesses.includes(answer);
    const lose = !win && newGuesses.length === NUM_OF_GUESSES_ALLOWED;

    if (lose) {
      return 'lose';
    } else if (win) {
      return 'win';
    } else {
      return 'inProgress';
    }
  }

  function handleAddGuess(tentativeGuess) {
    const newGuesses = [...guesses, tentativeGuess];
    setGuesses(newGuesses);
    setStatus(calculateGameStatus(newGuesses));
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
      />
      {status === 'win' && <WonBanner numOfGuesses={numOfGuesses} />}
      {status === 'lose' && <LostBanner answer={answer} />}
      <GuessInput
        status={status}
        handleAddGuess={handleAddGuess}
      />
    </>
  );
}

export default Game;
