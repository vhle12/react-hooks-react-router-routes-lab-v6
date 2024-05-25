import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then(response => response.json())
      .then(data => setActors(data))
      .catch(error => console.error('Error fetching actors:', error));
  }, []);

  return (
    <>
      <NavBar />
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor, index) => (
          <article key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, idx) => (
                <li key={idx}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Actors;