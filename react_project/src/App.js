import React, {useState} from 'react'

function App() {
  const [likes, setLikes] = useState (0)
  const [value, setValue] = useState ('ТЕКСТ В ИНПУТЕ')



  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input 
        type="text" 
        value = {value}
        onChange={event => setValue(event.target.value)}
      />
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
}

export default App;
