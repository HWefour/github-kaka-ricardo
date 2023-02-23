import React, { useState } from 'react';

function RechercheFilm() {
  const [key] = useState('3d19fc444e3a');
  const [val, setVal] = useState('');
  const [poster1, setPoster1] = useState('');
  const imgfilms = document.getElementById('imgfilm');

  function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
  }

  async function rechercheFilm() {
    try {
      const url = `https://api.betaseries.com/movies/search?key=${key}&title=${val}`;
      const response = await fetch(url);
      const data = await response.json();
      const posters = data.movies.map((movie) => movie.poster);
  
      for (const poster of posters) {
        if (poster !== 'N/A') {
          const fuei = createDom('img', '', imgfilms);
          fuei.setAttribute('src', poster);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleRecherche() {
    rechercheFilm();
  }
  
  function handleInputChange(event) {
    setVal(event.target.value);
  }
  
  return (
    <div>
      <input id="recherche" type="text" value={val} onChange={handleInputChange} />
      <button id="btnRecherche" onClick={handleRecherche}>Rechercher</button>
      <div id="imgfilm"></div>
    </div>
  );
  }  

  export default RechercheFilm; 
  
 
