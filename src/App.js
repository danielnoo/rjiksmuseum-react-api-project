import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import PieceOfArt from './PieceOfArt'

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
     <PieceOfArt/ >
     <h1>view Dutch Art</h1>
     {
       art.map( artPiece => {
         return (
          <PieceOfArt 
          key={artPiece.id}
          title={artPiece.title}
          imgPath={artPiece.webImage.url}
          
          />
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
