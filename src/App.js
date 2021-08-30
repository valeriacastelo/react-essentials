import './App.css';
import React, {useState, useEffect} from 'react';



function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect (() => {
    console.log(`It's ${emotion} here`);
  }, [emotion]);

  useEffect (() => {
    console.log(`It's ${secondary} here`);
  }, [secondary]);

  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("happy")}>Make Happy</button>
      <button onClick={() => setSecondary("crabby")}>Make crabby</button>
      <button onClick={() => setEmotion("fustrated")}>Frustate</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthese</button>
    </>
  )
}

export default App;
