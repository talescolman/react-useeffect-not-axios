import React, {useState, useEffect} from 'react';

function App() {
  let [show, setShow] = useState(null) // show is the current value, setShow is a function to update show, null is used to not render anything before

  useEffect(
    () => {
      fetch("http://api.tvmaze.com/singlesearch/shows?q=mayans-mc") // get API data for the office
        .then(response => response.json()) // converts the response to json 
        .then(data => setShow(data)) // updates show to the data passed
    },
    [] // empty array of dependencies so the effect will only runs once
  )

  return (
    <div className="App"> // the root element
      {show && ( // if show is true:
        <div>
          <h1>{show.name}</h1> // the show title 
          <img src={show.image.medium} alt={show.name}/> // the show image
        </div>
      )}
    </div>
  );
}

export default App;
