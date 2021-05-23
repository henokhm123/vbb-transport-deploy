import { useState } from 'react';

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState("");

  const handleQueryChange = event => setSearchQuery(event.target.value);
  const onClickSearch = () => {
    let url = `https://v5.vbb.transport.rest/locations?query=${searchQuery}`;
    fetch(url).then(response => response.json())
              .then(data => setResults(data));
    setSearchQuery("");
  };

  return (
    <div className="App">
      <SearchBar
        searchQuery={searchQuery}
        handleQueryChange={handleQueryChange}
        onClickSearch={onClickSearch}
      />
      <SearchResults results={results}/>
    </div>
  );
}

export default App;
