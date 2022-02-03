import React, {useState, useEffect} from "react";
import Character from "./components/Character";

export const App = () => {
  const [people, setPeople] = useState([]);
  // implement loading, takes too much time to render cards

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
    }
    //api call for star wars people, await promise

    fetchPeople();
  }, []);
  // console.log('data', people)
  return (
    <div className="App">
      <h1 className="Header pt-2">Star Wars Characters</h1>
      <Character data={people} />
      {/* pass props to component */}
    </div>
  );
};

export default App;
