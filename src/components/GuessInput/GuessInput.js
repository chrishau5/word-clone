import React from 'react';

function GuessInput({ handleAddGuess, status }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(e) => {
        e.preventDefault();
        handleAddGuess(tentativeGuess);

        setTentativeGuess('');
        console.log({ tentativeGuess });
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        disabled={status !== 'inProgress'}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        minLength={5}
        maxLength={5}
        id='guess-input'
        type='text'
        value={tentativeGuess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
