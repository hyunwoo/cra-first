import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardProps } from './Components/Card';

function App() {
  const onClickCard = (value: string) => {
    alert(value);
  };
  const cardData: Omit<CardProps, 'onClick'>[] = [
    {
      title: 'Card 1',
      body: 'This is the first card',
    },
    {
      title: 'Card 2',
      body: 'This is the second card',
    },
    {
      title: 'Card 3',
      body: 'This is the third card',
    },
  ];
  return (
    <div className='App'>
      <header className='App-header'>
        {cardData.map((card) => (
          <Card
            title={card.title}
            body={card.body}
            onClick={onClickCard}
          ></Card>
        ))}
      </header>
    </div>
  );
}

export default App;
