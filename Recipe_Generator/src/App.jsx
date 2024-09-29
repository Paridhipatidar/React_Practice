import React from 'react';
import Recipe from './Recipe'; // Import the Recipe component
import './App.css'; // Assuming you have some global styles

function App() {
  return (
    <div className="App">
      <h1>Fetch a Joke or Recipe</h1>
      {/* Render the Recipe component */}
      <Recipe />
    </div>
  );
}

export default App;

