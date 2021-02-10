import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1 id="heading-title">Adopt Me!</h1>
      <Pet name="Winnie" animal="Dog" breed="Samoyed" />
      <Pet name="Radar" animal="Dog" breed="Corgi" />
      <Pet name="Lucy" animal="Dog" breed="French Bulldog" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
