import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [art, setArt] = useState([]);
  useEffect( () => {
    const apiKey = `K8gsyEQB`;
    axios({
      method: 'GET',
      url: `https://www.rijksmuseum.nl/api/en/collection`,
      dataResponse: 'json',
      params: {
        key: apiKey,
        format: 'json',
        hasImage: true
      }
  }).then( (response) => {
    /// save the response to state
    
    setArt(response.data.artObjects);
    console.log(art)
  });
  
}, []);




  
  
  return (
   <div className="App">
     <h1>view Dutch Art</h1>
     {
       art.map( artPiece => {
         return (
          <img key={artPiece.id} src={artPiece.webImage.url} alt={artPiece.title} />
         );
       })
     }
   </div>
  );
}

export default App;



// make an api call 
// store data in state
// display results by mapping over our state
// key 
