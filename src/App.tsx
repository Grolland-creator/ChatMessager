import React from 'react';
import GreatProjectPage from "./pages/GreatProjectPage/GreatProjectPage";


function App() {

  return (
    <main className="App">
      <GreatProjectPage isCorrectWidth={document.documentElement.clientWidth > 700}/>
    </main>
  );
}

export default App;
