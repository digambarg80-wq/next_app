"use client";
import { useEffect, useState } from "react";

export default function RandomJokes() {
  const [randomJoke, setRandomJoke] = useState(null);
  const [showJokes, setShowJokes] = useState(true);

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const fetchRandomJokes = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setRandomJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  return (
    <div>
      {randomJoke ? (
        <>
          <p>{randomJoke.setup}</p>

          {showJokes && <h1>{randomJoke.punchline}</h1>}

          {showJokes ? (
            <button onClick={() => setShowJokes(false)}>Hide Punchline</button>
          ) : (
            <button onClick={() => setShowJokes(true)}>Reveal Punchline</button>
          )}
        </>
      ) : (
        <p>Loading joke...</p>
      )}
    </div>
  );
}