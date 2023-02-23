import React, { useState } from 'react';

function RechercheFilm() {
  const [key] = useState(/* '73ab5181' */'3cd5a087f940');
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
      const film = /* `https://www.omdbapi.com/?apikey=${key}&t=${val}` */ `https://api.betaseries.com/movies/random?key=${key}&nb=50`;
      const poster = await fetch(film)
        .then((response) => response.json())
        .then((data) => console.log(data.movie.poster));
       /* for (i = 0; i < data.length; i++) {  */
        if (poster !== 'N/A') {

          setPoster1(poster);
          const fuei = createDom('img', '', imgfilms);
          fuei.setAttribute('src', poster);
        }
       /* } */
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
