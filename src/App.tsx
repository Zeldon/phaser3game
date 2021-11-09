import React from 'react';
import { GameComponent } from 'phaser-react-tools';
import Game  from './scenes/game';
import Preloader from './scenes/preloader';

function App() {
  return (
    <>
      <GameComponent
        config={{
          backgroundColor: '#333333',
          height: 250,
          width: 400,
          scene: [Preloader, Game],
          scale: {
            zoom:2,
          },
          physics:{
            default: 'arcade',
            arcade: {gravity:{y:0}}
          },
        }}
      >
      </GameComponent>
    </>
  );
}

export default App;
