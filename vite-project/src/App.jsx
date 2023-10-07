import './App.css';
import { useState } from 'react';
import Flashcard from './components/Flashcard';

// Sample dataset
const cardsData = [
  { id: 1, chinese: '你好', english: 'Hello' },
  { id: 2, chinese: '欢迎', english: 'Welcome' },
  { id: 3, chinese: '网页设计', english: 'web design' },
  { id: 4, chinese: '软件工程', english: 'software development' },
  { id: 5, chinese: '手机', english: 'smartphone' },
  { id: 6, chinese: '计算机', english: 'computer' },
  { id: 7, chinese: '图形学', english: 'graphics' },
  { id: 8, chinese: '喜欢', english: 'like' },
  { id: 9, chinese: '网络安全', english: 'cybersecurity' },
  { id: 10, chinese: '软件工程', english: 'software development' },
];


const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [shuffledCards, setShuffledCards] = useState(cardsData); 


  const handleNext = () => {
    if (currentCardIndex < cardsData.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
    setIsCorrect(null);
    setUserInput('');
  };

  const handleBack = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
    setIsCorrect(null);
    setUserInput('');
  };

  const handleGuess = () => {
    if (userInput.toLowerCase() === shuffledCards[currentCardIndex].english.toLowerCase()) {
        setIsCorrect(true);
        setStreak(prevStreak => {
            const newStreak = prevStreak + 1;
            setMaxStreak(prevMax => Math.max(prevMax, newStreak));
            return newStreak;
        });
    } else {
        setIsCorrect(false);
        setStreak(0); 
    }
};

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleShuffle = () => {
    const shuffled = [...cardsData].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentCardIndex(0);  
  };


  return (
    <div className="App">
      <h1>Learning Chinese Words</h1>
      <h2>Want to learn some new Chinese words? Practice!</h2>
      <p>Number of Card: {cardsData.length}</p>
      <p>Streak: {streak} Max Streak: {maxStreak}</p>
      <div className="flashcards-app">
        <Flashcard card={shuffledCards[currentCardIndex]} /> {/* Use shuffledCards state here */}
      </div>
      <div className="input-group">
        <input 
          className="guess-input" 
          value={userInput} 
          onChange={handleInputChange} 
          placeholder="Enter your guess here"
        />
        <button className="action-button" onClick={handleGuess}>Submit</button>
      </div>
      <div className="navigation-buttons">
        <button className="action-button" onClick={handleBack}>Back</button>
        <button className="action-button" onClick={handleNext}>Next</button>
        <button className="action-button" onClick={handleShuffle}>Shuffle</button>
      </div>
      {isCorrect !== null && (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect!'}
        </div>
      )}
      
    </div>
  );
}

export default App