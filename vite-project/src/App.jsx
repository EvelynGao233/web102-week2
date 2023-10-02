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

  const handleNext = () => {
    const randomIndex = Math.floor(Math.random() * cardsData.length);
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div className="App">
      <h1>Learning Chinese Words</h1>
      <h2>Want to learn some new Chinese words? Practice!</h2>
      <p>Number of Card: {cardsData.length}</p>
      <div className="flashcards-app">
        <Flashcard card={cardsData[currentCardIndex]} />
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App