import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import StopDetails from "./components/StopDetails";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState("");

  const handleQueryChange = event => setSearchQuery(event.target.value);
  const onClickSearch = () => {
    let url = `https://v5.vbb.transport.rest/locations?query=${searchQuery}`;
    fetch(url).then(response => response.json())
              .then(data => setResults(data));
    // setSearchQuery("");
  };

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
              <SearchBar
              searchQuery={searchQuery}
              handleQueryChange={handleQueryChange}
              onClickSearch={onClickSearch}
              />
              <SearchResults results={results} />
            </Route>
            <Route path="/stop_details/:id">
              <StopDetails />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
