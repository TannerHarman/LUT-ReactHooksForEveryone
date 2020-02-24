import React, { useRef, useMemo } from 'react';
import useTitleInput from './hooks//useTitleInput';
import Toggle from './Toggle';
import Counter from './Counter'

const App = () => {

  const [name, setName] = useTitleInput('');
  const ref = useRef();

  const reverseWord = (word) => {
    console.log('function called');
    return word
      .split('')
      .reverse()
      .join('');
  }

  const title = `Level Up Dishes`

  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  return (

    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>{TitleReversed}</h1>
      <Toggle />

      <form onSubmit={(e) => {
        e.preventDefault();
      }}
      >
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <button>Submit</button>
      </form>

    </div>
  );
};

export default App;
