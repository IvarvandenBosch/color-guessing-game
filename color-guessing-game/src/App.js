import { useEffect, useState } from 'react';
import './App.css'
const App = () => {
  const [colors, setColors] = useState(["#822221", "#83161", "#92832"]);
  const [randomIndex, setRandomIndex] = useState(0);
  const [won, setWon] = useState()
  const [score, setScore] = useState(0)
  
  function colorGenerator() {
    // https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript/5092846#5092846
    const randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    const randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    const randomColor3 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    setColors([randomColor1, randomColor2, randomColor3])
    
    const randNum = Math.floor(Math.random() * 2)
    setRandomIndex(randNum)
  }

  function checkIfWon(index) {
    if (colors[index] === colors[randomIndex]) {
      console.log("correct!")
      setWon('correct')
      setScore(prevScore => prevScore + 1)
      colorGenerator()
    } else {
      console.log("Incorrect D:")
      setScore(prevScore => prevScore - 1)
      setWon('incorrect')
    }
  }



  useEffect(() => {
    colorGenerator()
  }, []);

  return (
    <main>
      <div className='score-container'>
        <p className='score'>score: {score}</p>
        <button className='button' onClick={() => setScore(0)}>Reset Score</button>
      </div>
      <div className='color-display' style={{backgroundColor: colors[randomIndex]}}></div>
      <span className='center'>
        <p>{won === 'correct' ? 'Correct!' : won === 'incorrect' ? 'Incorrect D:' : ''}</p>
      </span>
      <div className='buttons'>
        {colors.map((btn, index) => {
          return <button className="button" onClick={() => checkIfWon(index)}>{colors[index]}</button>
        })}
      </div>
    </main>
  );
};

export default App;
